#!/usr/bin/env node
const PSD = require('psd')
const fs = require('fs')
const path = require('path')

const arrPsd = []
const callDir = process.env.PWD

const { data } = require(`${callDir}/data.js`)

let time = Date.now() / 1000
let arrDefinitions = {}



const readDir = () => {
  console.log("Gotta Catch 'Em All")
  const arrDir = fs.readdirSync(callDir)
  arrDir.map(el => {
    const extName = path.extname(el)
    if (extName === '.psd') {
      arrPsd.push(el)
    }
  })
  if (arrPsd.length === 0) {
    console.warn("\x1b[41m", "I don't see psd!")
    console.log("\x1b[0m")
    process.exit(1)
  }
  return arrPsd
}

const chakeTypeOfLay = (el, file) => {
  if (el.type === 'group') {
    el.children.map(child => {
      return chakeTypeOfLay(child, file)
    })
  } else {
    if (el.type === 'layer' && el.text !== undefined) {
      return writeSlide(el, file)
    }
  }
}

const writeSlide = (layer, file) => {
  const text = layer.text.value.toLowerCase().replace(/[\r\u0003]/g, ' ')
  let strDef = []
  data.map((el, i) => {
    if (text.search(el + ' ') !== -1) {
      strDef.push(text)
      strDef.push(el)
      strDef.push(i)
    }
  })

  if (strDef.length === 0) {
    return 0
  } else {
    file = file.replace('.psd', '')
    if (arrDefinitions[file]) {
      return arrDefinitions[file].push(...strDef)
    }
    return arrDefinitions[file] = strDef
  }
}

readDir()

arrPsd.map((file) => {
  const psd = PSD.fromFile(`${callDir}/${file}`)
  psd.parse()
  const child = psd.tree().export().children
  child.forEach(layers => {
    return chakeTypeOfLay(layers, file)
  })
})
const json = JSON.stringify(arrDefinitions)

fs.writeFileSync(`${callDir}/data.json`, json)
time = Date.now() / 1000 - time
console.log('Время выполнения = ', time.toFixed(2))