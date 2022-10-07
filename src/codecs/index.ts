import { BlockCodec } from 'multiformats/codecs/interface'
import { BeeSon } from '@fairdatasociety/beeson'
import { JsonValue } from '@fairdatasociety/beeson/dist/types'
const name = 'beeson'
const code = 0xfc
const encode = (node: BeeSon<JsonValue>): Uint8Array => {
  return node.serialize()
}
const decode = async (dataBytes: Uint8Array): Promise<BeeSon<JsonValue>> => {
  return BeeSon.deserialize(dataBytes)
}

export const codec = { name, code, encode, decode } as unknown as BlockCodec<252, BeeSon<JsonValue>>
