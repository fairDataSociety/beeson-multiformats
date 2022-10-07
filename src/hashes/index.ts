import { from } from 'multiformats/hashes/hasher'
import * as digest from 'multiformats/hashes/digest'
import { BeeSon } from '@fairdatasociety/beeson'
import { makeChunkedFile } from '@fairdatasociety/bmt-js'

export const encode = async (data: Uint8Array): Promise<Uint8Array> => {
  // Serialize back to Beeson, and hash reference
  const node = await BeeSon.deserialize(data)
  const payload = node.serialize()
  const chunk = makeChunkedFile(payload)
  const ref = chunk.address()

  return digest.create(0x1b, ref).digest
}

export const hasher = from({
  name: 'keccak-256',
  code: 0x1b,
  encode,
})
