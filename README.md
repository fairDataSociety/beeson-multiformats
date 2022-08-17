# beeson-multiformats
codec for multiformats



> Block codec for multiformats

**Warning: This project is in alpha state. There might (and most probably will) be changes in the future to its API and working. Also, no guarantees can be made about its stability, efficiency, and security at this stage.**

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Contribute](#contribute)
- [License](#license)

## Install

WIP!

## Usage

WIP!


```typescript

import * as Block from 'multiformats/block'
import * as codec from '@fairdatasociety/beeson-multiformats'
import * as swarmCid from '@ethersphere/swarm-cid-js'

const value = { hello: 'Swarm Bee' }
const hasher = {
    digest: input => swarmCid.encodeManifestReference(input)
}

// encode a block
let block = await Block.encode({ value, codec, hasher })

block.value // { hello: 'Swarm Bee' }
block.bytes // Uint8Array - Beeson serialize
block.cid   // CID() SwarmManifestCid or SwarmFeedCid

// you can also decode blocks from their binary state (Beeson deserialize)
block = await Block.decode({ bytes: block.bytes, codec, hasher })

// if you have the cid you can also verify the hash on decode
block = await Block.create({ bytes: block.bytes, cid: block.cid, codec, hasher })
```



## Maintainers

- [molekilla](https://github.com/molekilla)

## License

[MIT](./LICENSE)