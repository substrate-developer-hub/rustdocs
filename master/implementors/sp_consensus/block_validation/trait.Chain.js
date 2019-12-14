(function() {var implementors = {};
implementors["sc_client"] = [{"text":"impl&lt;BE, E, B, RA&gt; <a class=\"trait\" href=\"sp_consensus/block_validation/trait.Chain.html\" title=\"trait sp_consensus::block_validation::Chain\">Chain</a>&lt;B&gt; for <a class=\"struct\" href=\"sc_client/struct.Client.html\" title=\"struct sc_client::Client\">Client</a>&lt;BE, E, B, RA&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BE: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;B, <a class=\"struct\" href=\"sp_core/hasher/blake2/struct.Blake2Hasher.html\" title=\"struct sp_core::hasher::blake2::Blake2Hasher\">Blake2Hasher</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"sc_client/trait.CallExecutor.html\" title=\"trait sc_client::CallExecutor\">CallExecutor</a>&lt;B, <a class=\"struct\" href=\"sp_core/hasher/blake2/struct.Blake2Hasher.html\" title=\"struct sp_core::hasher::blake2::Blake2Hasher\">Blake2Hasher</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>&lt;Hash = <a class=\"struct\" href=\"primitive_types/struct.H256.html\" title=\"struct primitive_types::H256\">H256</a>&gt;,&nbsp;</span>","synthetic":false,"types":["sc_client::client::Client"]}];
implementors["sp_consensus"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()