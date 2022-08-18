import { BeeSon } from '@fairdatasociety/beeson'
import { JsonValue } from '@fairdatasociety/beeson/dist/types'
import { ByteView } from 'multiformats/codecs/interface'

export const name = 'beeson'

// Code value is a placeholder, must be one in the multiformats table.csv
export const code = 0x11

/**
 * @param {BeeSon<JsonValue>} node
 * @returns {ByteView<Uint8Array>}
 */
export const encode = (node: BeeSon<JsonValue>): ByteView<Uint8Array> => {
  return node.serialize()
}

/**
 * @param {ByteView<Uint8Array>} data
 * @returns {Uint8Array}
 */
export const decode = async (dataBytes: Uint8Array): Promise<BeeSon<JsonValue>> => {
  return BeeSon.deserialize(dataBytes)
}
