initSidebarItems({"enum":[["EcdsaVerifyError","Error verifying ECDSA signature"]],"fn":[["blake2_128","Conduct a 128-bit Blake2 hash."],["blake2_256","Conduct a 256-bit Blake2 hash."],["chain_id","The current relay chain identifier."],["child_storage","Get `key` from child storage and return a `Vec`, empty if there's a problem."],["child_storage_root","\"Commit\" all existing operations and compute the resultant child storage root."],["clear_child_storage","Clear the storage of a key."],["clear_prefix","Clear the storage entries with a key that starts with the given prefix."],["clear_storage","Clear the storage of a key."],["ed25519_generate","Generate an ed22519 key for the given key type and store it in the keystore."],["ed25519_public_keys","Returns all ed25519 public keys for the given key id from the keystore."],["ed25519_sign","Sign the given `msg` with the ed25519 key that corresponds to the given public key and key type in the keystore."],["ed25519_verify","Verify an ed25519 signature."],["enumerated_trie_root","A trie root formed from the enumerated items. TODO [#2382] remove (just use `ordered_trie_root` (NOTE currently not implemented for without_std))"],["exists_child_storage","Check whether a given `key` exists in storage."],["exists_storage","Check whether a given `key` exists in storage."],["http_request_add_header","Append header to the request."],["http_request_start","Initiates a http request given HTTP verb and the URL."],["http_request_write_body","Write a chunk of request body."],["http_response_headers","Read all response headers."],["http_response_read_body","Read a chunk of body response to given buffer."],["http_response_wait","Block and wait for the responses for given requests."],["keccak_256","Conduct a 256-bit Keccak hash."],["kill_child_storage","Clear an entire child storage."],["local_storage_compare_and_set","Sets a value in the local storage if it matches current value."],["local_storage_get","Gets a value from the local storage."],["local_storage_set","Sets a value in the local storage."],["network_state","Returns information about the local node's network state."],["ordered_trie_root","A trie root formed from the enumerated items."],["print","Print a printable value."],["random_seed","Returns a random seed."],["read_child_storage","Get `key` from child storage, placing the value into `value_out` and return the number of bytes that the entry in storage has beyond the offset or `None` if the storage entry doesn't exist at all. If `value_out` length is smaller than the returned length, only `value_out` length bytes are copied into `value_out`."],["read_storage","Get `key` from storage, placing the value into `value_out` and return the number of bytes that the entry in storage has beyond the offset or `None` if the storage entry doesn't exist at all. If `value_out` length is smaller than the returned length, only `value_out` length bytes are copied into `value_out`."],["secp256k1_ecdsa_recover","Verify and recover a SECP256k1 ECDSA signature. - `sig` is passed in RSV format. V should be either 0/1 or 27/28. - returns `Err` if the signature is bad, otherwise the 64-byte pubkey (doesn't include the 0x04 prefix)."],["set_child_storage","Set the child storage of some particular key to Some value."],["set_storage","Set the storage of some particular key to Some value."],["sleep_until","Pause the execution until `deadline` is reached."],["sr25519_generate","Generate an sr22519 key for the given key type and store it in the keystore."],["sr25519_public_keys","Returns all sr25519 public keys for the given key id from the keystore."],["sr25519_sign","Sign the given `msg` with the sr25519 key that corresponds to the given public key and key type in the keystore."],["sr25519_verify","Verify an sr25519 signature."],["storage","Get `key` from storage and return a `Vec`, empty if there's a problem."],["storage_changes_root","\"Commit\" all existing operations and get the resultant storage change root."],["storage_root","\"Commit\" all existing operations and compute the resultant storage root."],["submit_transaction","Submit transaction to the pool."],["timestamp","Returns current UNIX timestamp (in millis)"],["trie_root","A trie root formed from the iterated items."],["twox_128","Conduct two XX hashes to give a 128-bit result."],["twox_256","Conduct four XX hashes to give a 256-bit result."],["twox_64","Conduct two XX hashes to give a 64-bit result."],["with_externalities","Execute the given closure with global function available whose functionality routes into the externalities `ext`. Forwards the value that the closure returns."],["with_storage","Execute the given closure with global functions available whose functionality routes into externalities that draw from and populate `storage`. Forwards the value that the closure returns."],["with_storage_and_children","Execute the given closure with global functions available whose functionality routes into externalities that draw from and populate `storage` and `children_storage`. Forwards the value that the closure returns."]],"mod":[["offchain","A collection of higher lever helpers for offchain workers."]],"struct":[["Blake2Hasher","Concrete implementation of Hasher using Blake2b 256-bit hashes"]],"trait":[["Printable","Trait for things which can be printed."]],"type":[["ChildrenStorageOverlay","A set of key value pairs for children storage;"],["StorageOverlay","A set of key value pairs for storage."],["TestExternalities","Type alias for Externalities implementation used in tests."]]});