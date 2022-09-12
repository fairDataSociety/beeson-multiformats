import keccak256 from 'keccak256'
import { from } from 'multiformats/hashes/hasher'

export const encode = async (hashBytes: Uint8Array) => {
  return keccak256(Buffer.from(hashBytes))
}
export const hasher = from({
  name: 'keccak-256',
  code: 0x1b,
  encode,
})
