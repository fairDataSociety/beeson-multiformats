import { KECCAK_256_CODEC } from '@ethersphere/swarm-cid'
import { CID, digest } from 'multiformats'
import { from } from 'multiformats/hashes/hasher'

export const encodeManifestReferenceAsPromise = async (hashBytes: Uint8Array) => {
  const cid = CID.createV1(0x11, digest.create(KECCAK_256_CODEC, hashBytes))

  return Promise.resolve(cid.bytes)
}
export const hasher = from({
  name: 'swarm-manifest',
  code: 0x11,
  encode: encodeManifestReferenceAsPromise,
})
