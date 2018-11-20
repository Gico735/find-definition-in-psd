#Find data in PSD files
#to USE
<!-- `npm -g i find-definition-in-psd` -->
0. put file data.js
1. start script in folder with PSD
2. in folder will be created `data.json`

#example data.json#
```js
{
--> name of psd  "psd1": [  
--> content where find data    "trolololololo tro lol troro", 
--> data    "lol", 
--> index data    28, 
  ],
--> name of psd  "psd2": [  
--> content where find data    "lolapex soeq troro", 
--> data    "apex", 
--> index data    13, 
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