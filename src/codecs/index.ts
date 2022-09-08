import { BeeSon } from '@fairdatasociety/beeson'
import { JsonValue } from '@fairdatasociety/beeson/dist/types'
import { ByteView } from 'multiformats/codecs/interface'

export const name = 'beeson'

export const code = 0xfc

/**
 * @param {BeeSon<JsonValue>} node
 * @returns {ByteView<Uint8Array>}
 */
export const encode = (node: BeeSon<JsonValue>): ByteView<Uint8Array> => {
  return node.serialize()
}

async function sleep(ms = 100): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * @param {ByteView<Uint8Array>} dataBytes
 * @returns {Uint8Array}
 */
export const decode = (dataBytes: Uint8Array): Promise<BeeSon<JsonValue>> => {
  return BeeSon.deserialize(dataBytes)
}
