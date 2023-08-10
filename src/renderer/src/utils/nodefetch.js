import { dialog } from 'electron'
import { createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream'
import { promisify } from 'node:util'
import fetch from 'node-fetch'

export const nodeFetch = async (url, userSelectedDestFilePath) => {
  const streamPipeline = promisify(pipeline)
  const response = await fetch(url)
  if (!response.ok) {
    dialog.showErrorBox('error', 'Unknown error, please concat with YinLei.')
    throw new Error(`unexpected response ${response.statusText}`)
  }
  await streamPipeline(response.body, createWriteStream(userSelectedDestFilePath))
  return userSelectedDestFilePath
}
