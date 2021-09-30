/** @module readCachedFile */

import fs from 'fs'

/**
 * Gets the content for the file when it doesn't exist.
 * @callback FileContentCallback
 * @returns {string|Promise<string>} Returns the file content. Can also return a Promise resolving to the content.
 */

/**
 * Reads the content of a file if it exists, else gets the content using the {@link getFileContent} function and creates the file.
 * @param {string} path - Path to the file.
 * @param {FileContentCallback} getFileContent - Retrieves/generates the content for the file, which is in general slower and/or more resource/time consuming than reading the local file (e.g. response from a server request, heavy computation).
 * @param {boolean} [forceUpdate=false] - Forces the use of {@link getFileContent} to get the content, and creates the file or overwrittes it if it already exists.
 * @returns {Promise} Promise object resolving to the data.
 */
async function readCachedFile(path, getFileContent, forceUpdate = false) {
  let data = null

  if (!forceUpdate && fs.existsSync(path)) {
    data = fs.readFileSync(path, 'utf8')
  } else {
    data = await Promise.resolve(getFileContent())
    fs.writeFileSync(path, data)
  }

  return data
}

export default readCachedFile
