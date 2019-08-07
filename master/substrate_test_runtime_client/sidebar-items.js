initSidebarItems({"enum":[["Ed25519Keyring","Set of test accounts."],["Sr25519Keyring","Set of test accounts."]],"fn":[["new","Creates new client instance used for tests."],["new_light","Creates new light client instance used for tests."]],"mod":[["backend","Substrate Client data backend"],["client","Substrate Client and associated logic."],["client_db","Client backend that uses RocksDB database as storage."],["client_ext","Client extension for tests."],["consensus","Common utilities for building and using consensus engines in substrate."],["executor","Temporary crate for contracts implementations."],["prelude","A prelude to import in tests."],["trait_tests","tests that should hold for all implementations of certain traits. to test implementations without duplication."]],"struct":[["Backend","Disk backend. Keeps data in a key-value store. In archive mode, trie nodes are kept from all blocks. Otherwise, trie nodes are kept only from some recent blocks."],["Blake2Hasher","Concrete implementation of Hasher using Blake2b 256-bit hashes"],["GenesisParameters","Parameters of test-client builder with test-runtime."],["LightFetcher","Test client light fetcher."],["LocalExecutor","A unit struct which implements `NativeExecutionDispatch` feeding in the hard-coded runtime."],["NativeExecutor","A generic `CodeExecutor` implementation that uses a delegate to determine wasm code equivalence and dispatch to native code when possible, falling back on `WasmExecutor` when not."],["TestClientBuilder","A builder for creating a test client instance."]],"trait":[["BlockBuilderExt","Extension trait for test block builder."],["DefaultTestClientBuilderExt","A `TestClientBuilder` with default backend and executor."],["GenesisInit","A genesis storage initialisation trait."],["TestClientBuilderExt","A `test-runtime` extensions to `TestClientBuilder`."]],"type":[["Backend","Test client database backend."],["BareCryptoStorePtr","A pointer to the key store."],["ChildrenStorageOverlay","A set of key value pairs for children storage;"],["Client","Test client type with `LocalExecutor` and generic Backend."],["Executor","Test client executor."],["LightBackend","Test client light database backend."],["LightBackend","Test client light database backend."],["LightExecutor","Test client light executor."],["StorageOverlay","A set of key value pairs for storage."],["TestClient","A test client with default backend."],["TestClientBuilder","A `TestClient` with `test-runtime` builder."]]});