import { BeeSon } from '@fairdatasociety/beeson'
import { JsonValue } from '@fairdatasociety/beeson/dist/types'
import { BlockCodec, ByteView } from 'multiformats/codecs/interface'

export class BeesonCodec implements BlockCodec<number, Promise<BeeSon<JsonValue>> | BeeSon<JsonValue>> {
  name = 'beeson'
  // Code value is a placeholder, must be one in the multiformats table.csv

  code = 0x11

  /**
   * @param {BeeSon<JsonValue>} node
   * @returns {ByteView<Uint8Array>}
   */
  encode(node: BeeSon<JsonValue>): ByteView<Uint8Array> {
    return node.serialize()
  }

  /**
   * @param {ByteView<Uint8Array>} data
   * @returns {Uint8Array}
   */
  async decode(dataBytes: Uint8Array): Promise<BeeSon<JsonValue>> {
    return BeeSon.deserialize(dataBytes)
  }
}
