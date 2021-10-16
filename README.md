# readCachedFile
 
Cache the result of a slow and/or resource/time consuming operation (e.g. response from a server request, heavy computation) into a local file.

## Example
```javascript
const data = null

// Callback to retrieve the data

const getPhotoData = async () => await (await fetch('https://jsonplaceholder.typicode.com/photos')).text()

// Run once: calls getPhotoData and creates photos-data.json

data = await readCachedFile("./photos-data.json", getPhotoData)

// Run a second time: no network request, reads from photos-data.json

data = await readCachedFile("./photos-data.json", getPhotoData)
```

## Tips

- To force retrieving/re-generating the data, set `forceUpdate` to true:  
`data = await readCachedFile("./photos-data.json", getPhotoData, true)`