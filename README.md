# readCachedFile
 
Cache the result of a usually slow and/or resource/time consuming operation (e.g. response from a server request, heavy computation) into a local file.

- [📚 Documentation](https://kevduc.github.io/read-cached-file/)
- [📦 Package](https://www.npmjs.com/package/read-cached-file)  
`npm i read-cached-file`

## 📖 Example

```javascript
import readCachedFile from 'read-cached-file'

// Callback to retrieve the data
const getPhotoData = async () => await (await fetch('https://jsonplaceholder.typicode.com/photos')).text()

// Run script once: calls getPhotoData and creates photos-data.json
// Run a second time: no network request, reads from photos-data.json
const data = await readCachedFile("./photos-data.json", getPhotoData)

// Do something with the data
const photos = JSON.parse(data)
```

## 💡 Tips

- To force retrieving/re-generating the data, set `forceUpdate` to true:  
```javascript
data = await readCachedFile("./photos-data.json", getPhotoData, true)
```