(function() {var implementors = {};
implementors["substrate_client"] = [{text:"impl&lt;BE, E, B, RA&gt; <a class=\"trait\" href=\"substrate_consensus_common/block_validation/trait.Chain.html\" title=\"trait substrate_consensus_common::block_validation::Chain\">Chain</a>&lt;B&gt; for <a class=\"struct\" href=\"substrate_client/struct.Client.html\" title=\"struct substrate_client::Client\">Client</a>&lt;BE, E, B, RA&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BE: <a class=\"trait\" href=\"substrate_client/backend/trait.Backend.html\" title=\"trait substrate_client::backend::Backend\">Backend</a>&lt;B, <a class=\"struct\" href=\"substrate_primitives/hasher/blake2/struct.Blake2Hasher.html\" title=\"struct substrate_primitives::hasher::blake2::Blake2Hasher\">Blake2Hasher</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"substrate_client/trait.CallExecutor.html\" title=\"trait substrate_client::CallExecutor\">CallExecutor</a>&lt;B, <a class=\"struct\" href=\"substrate_primitives/hasher/blake2/struct.Blake2Hasher.html\" title=\"struct substrate_primitives::hasher::blake2::Blake2Hasher\">Blake2Hasher</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"sr_primitives/traits/trait.Block.html\" title=\"trait sr_primitives::traits::Block\">BlockT</a>&lt;Hash = <a class=\"struct\" href=\"primitive_types/struct.H256.html\" title=\"struct primitive_types::H256\">H256</a>&gt;,&nbsp;</span>",synthetic:false,types:["substrate_client::client::Client"]},];
implementors["substrate_consensus_common"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()