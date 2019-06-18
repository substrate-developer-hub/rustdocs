(function() {var implementors = {};
implementors["substrate_client"] = [{text:"impl&lt;H:&nbsp;<a class=\"trait\" href=\"hash_db/trait.Hasher.html\" title=\"trait hash_db::Hasher\">Hasher</a>&gt; <a class=\"trait\" href=\"substrate_state_machine/changes_trie/trait.Storage.html\" title=\"trait substrate_state_machine::changes_trie::Storage\">Storage</a>&lt;H&gt; for <a class=\"struct\" href=\"substrate_client/in_mem/struct.ChangesTrieStorage.html\" title=\"struct substrate_client::in_mem::ChangesTrieStorage\">ChangesTrieStorage</a>&lt;H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H::<a class=\"type\" href=\"hash_db/trait.Hasher.html#associatedtype.Out\" title=\"type hash_db::Hasher::Out\">Out</a>: <a class=\"trait\" href=\"heapsize/trait.HeapSizeOf.html\" title=\"trait heapsize::HeapSizeOf\">HeapSizeOf</a>,&nbsp;</span>",synthetic:false,types:["substrate_client::in_mem::ChangesTrieStorage"]},];
implementors["substrate_client_db"] = [{text:"impl&lt;Block:&nbsp;<a class=\"trait\" href=\"sr_primitives/traits/trait.Block.html\" title=\"trait sr_primitives::traits::Block\">BlockT</a>&gt; <a class=\"trait\" href=\"substrate_state_machine/changes_trie/trait.Storage.html\" title=\"trait substrate_state_machine::changes_trie::Storage\">Storage</a>&lt;<a class=\"struct\" href=\"substrate_primitives/hasher/blake2/struct.Blake2Hasher.html\" title=\"struct substrate_primitives::hasher::blake2::Blake2Hasher\">Blake2Hasher</a>&gt; for <a class=\"struct\" href=\"substrate_client_db/struct.DbChangesTrieStorage.html\" title=\"struct substrate_client_db::DbChangesTrieStorage\">DbChangesTrieStorage</a>&lt;Block&gt;",synthetic:false,types:["substrate_client_db::DbChangesTrieStorage"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
