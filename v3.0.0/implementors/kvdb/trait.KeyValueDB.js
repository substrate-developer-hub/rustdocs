(function() {var implementors = {};
implementors["kvdb_memorydb"] = [{"text":"impl KeyValueDB for InMemory","synthetic":false,"types":[]}];
implementors["kvdb_rocksdb"] = [{"text":"impl KeyValueDB for Database","synthetic":false,"types":[]}];
implementors["node_bench"] = [{"text":"impl KeyValueDB for ParityDbWrapper","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()