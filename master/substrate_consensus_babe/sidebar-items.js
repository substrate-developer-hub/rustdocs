initSidebarItems({"constant":[["BABE_ENGINE_ID","The `ConsensusEngineId` of BABE."],["BABE_VRF_PREFIX","The prefix used by BABE for its VRF keys."],["PUBLIC_KEY_LENGTH","The length of the public key"],["VRF_OUTPUT_LENGTH","The length of the VRF output"],["VRF_PROOF_LENGTH","The length of the VRF proof"]],"enum":[["BabePreDigest","A BABE pre-runtime digest. This contains all data required to validate a block and for the BABE runtime module. Slots can be assigned to a primary (VRF based) and to a secondary (slot number based)."],["ConsensusLog","An consensus log item for BABE."],["RawBabePreDigest","A raw version of `BabePreDigest`, usable on `no_std`."]],"fn":[["import_queue","Start an import queue for the BABE consensus algorithm. This method returns the import queue, some data that needs to be passed to the block authoring logic (`BabeLink`), a `BabeBlockImport` which should be used by the authoring when importing its own blocks, and a future that must be run to completion and is responsible for listening to finality notifications and pruning the epoch changes tree."],["start_babe","Start the babe worker. The returned future should be run in a tokio runtime."]],"mod":[["test_helpers","BABE test helpers. Utility methods for manually authoring blocks."]],"struct":[["BabeBlockImport","A block-import handler for BABE."],["BabeConfiguration","Configuration data used by the BABE consensus engine."],["BabeLink","State that must be shared between the import queue and the authoring logic."],["BabeParams","Parameters for BABE."],["BabeVerifier","A verifier for Babe blocks."],["Config","A slot duration. Create with `get_or_compute`."],["Epoch","BABE epoch information"]],"trait":[["BabeApi","API necessary for block authorship with BABE."],["CompatibleDigestItem","A digest item which is usable with BABE consensus."],["SyncOracle","An oracle for when major synchronization work is being undertaken."]],"type":[["AuthorityId","A Babe authority identifier. Necessarily equivalent to the schnorrkel public key used in the main Babe module. If that ever changes, then this must, too."],["AuthorityId","A Babe authority identifier. Necessarily equivalent to the schnorrkel public key used in the main Babe module. If that ever changes, then this must, too."],["AuthorityIndex","The index of an authority."],["AuthorityPair","A Babe authority keypair. Necessarily equivalent to the schnorrkel public key used in the main Babe module. If that ever changes, then this must, too."],["AuthorityPair","A Babe authority keypair. Necessarily equivalent to the schnorrkel public key used in the main Babe module. If that ever changes, then this must, too."],["AuthoritySignature","A Babe authority signature."],["AuthoritySignature","A Babe authority signature."],["BabeAuthorityWeight","The weight of an authority."],["BabeBlockWeight","The weight of a BABE block."],["BabeImportQueue","The BABE import queue type."],["SlotNumber","A slot number."]]});