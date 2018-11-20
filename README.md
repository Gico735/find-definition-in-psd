#Find data in PSD files
#to USE
<!-- `npm -g i find-definition-in-psd` -->
0. put file data.js
1. start script in folder with PSD
2. in folder will be created `data.json`

#example data.json#
```js
{
  "psd1": [  <-- name of psd
    "trolololololo tro lol troro", <-- content where find data
    "lol", <-- data
    28, <-- index data
  ],
  "psd2": [  <-- name of psd
    "lolapex soeq troro", <-- content where find data
    "apex", <-- data
    13, <-- index data
  ],
}

```

#example data.js# 
```js 
const data = [
  "test_1",
  "test_2",
  "test_3",
  "test_4",
  "test_5",
  "test_6",
]

module.exports = { data }
```