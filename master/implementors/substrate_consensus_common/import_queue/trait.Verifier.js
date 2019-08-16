(function() {var implementors = {};
implementors["substrate_consensus_aura"] = [{text:"impl&lt;B:&nbsp;<a class=\"trait\" href=\"sr_primitives/traits/trait.Block.html\" title=\"trait sr_primitives::traits::Block\">BlockT</a>, C, P, T&gt; <a class=\"trait\" href=\"substrate_consensus_common/import_queue/trait.Verifier.html\" title=\"trait substrate_consensus_common::import_queue::Verifier\">Verifier</a>&lt;B&gt; for <a class=\"struct\" href=\"substrate_consensus_aura/struct.AuraVerifier.html\" title=\"struct substrate_consensus_aura::AuraVerifier\">AuraVerifier</a>&lt;C, P, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"sr_primitives/traits/trait.ProvideRuntimeApi.html\" title=\"trait sr_primitives::traits::ProvideRuntimeApi\">ProvideRuntimeApi</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"substrate_client/backend/trait.AuxStore.html\" title=\"trait substrate_client::backend::AuxStore\">AuxStore</a> + <a class=\"trait\" href=\"substrate_client/blockchain/trait.ProvideCache.html\" title=\"trait substrate_client::blockchain::ProvideCache\">ProvideCache</a>&lt;B&gt; + <a class=\"trait\" href=\"substrate_client/client/trait.BlockOf.html\" title=\"trait substrate_client::client::BlockOf\">BlockOf</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C::<a class=\"type\" href=\"sr_primitives/traits/trait.ProvideRuntimeApi.html#associatedtype.Api\" title=\"type sr_primitives::traits::ProvideRuntimeApi::Api\">Api</a>: <a class=\"trait\" href=\"substrate_client/block_builder/api/trait.BlockBuilder.html\" title=\"trait substrate_client::block_builder::api::BlockBuilder\">BlockBuilderApi</a>&lt;B&gt; + <a class=\"trait\" href=\"substrate_consensus_aura/trait.AuraApi.html\" title=\"trait substrate_consensus_aura::AuraApi\">AuraApi</a>&lt;B, &lt;P as <a class=\"trait\" href=\"substrate_primitives/crypto/trait.Pair.html\" title=\"trait substrate_primitives::crypto::Pair\">Pair</a>&gt;::<a class=\"type\" href=\"substrate_primitives/crypto/trait.Pair.html#associatedtype.Public\" title=\"type substrate_primitives::crypto::Pair::Public\">Public</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"sr_primitives/traits/type.DigestItemFor.html\" title=\"type sr_primitives::traits::DigestItemFor\">DigestItemFor</a>&lt;B&gt;: <a class=\"trait\" href=\"substrate_consensus_aura/trait.CompatibleDigestItem.html\" title=\"trait substrate_consensus_aura::CompatibleDigestItem\">CompatibleDigestItem</a>&lt;P&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"substrate_primitives/crypto/trait.Pair.html\" title=\"trait substrate_primitives::crypto::Pair\">Pair</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;P::<a class=\"type\" href=\"substrate_primitives/crypto/trait.Pair.html#associatedtype.Public\" title=\"type substrate_primitives::crypto::Pair::Public\">Public</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"parity_scale_codec/codec/trait.Decode.html\" title=\"trait parity_scale_codec::codec::Decode\">Decode</a> + <a class=\"trait\" href=\"parity_scale_codec/codec/trait.Encode.html\" title=\"trait parity_scale_codec::codec::Encode\">Encode</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;P::<a class=\"type\" href=\"substrate_primitives/crypto/trait.Pair.html#associatedtype.Signature\" title=\"type substrate_primitives::crypto::Pair::Signature\">Signature</a>: <a class=\"trait\" href=\"parity_scale_codec/codec/trait.Encode.html\" title=\"trait parity_scale_codec::codec::Encode\">Encode</a> + <a class=\"trait\" href=\"parity_scale_codec/codec/trait.Decode.html\" title=\"trait parity_scale_codec::codec::Decode\">Decode</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,&nbsp;</span>",synthetic:false,types:["substrate_consensus_aura::AuraVerifier"]},];
implementors["substrate_consensus_babe"] = [{text:"impl&lt;B, E, Block, RA, PRA, T&gt; <a class=\"trait\" href=\"substrate_consensus_common/import_queue/trait.Verifier.html\" title=\"trait substrate_consensus_common::import_queue::Verifier\">Verifier</a>&lt;Block&gt; for <a class=\"struct\" href=\"substrate_consensus_babe/struct.BabeVerifier.html\" title=\"struct substrate_consensus_babe::BabeVerifier\">BabeVerifier</a>&lt;B, E, Block, RA, PRA, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: <a class=\"trait\" href=\"sr_primitives/traits/trait.Block.html\" title=\"trait sr_primitives::traits::Block\">BlockT</a>&lt;Hash = <a class=\"struct\" href=\"primitive_types/struct.H256.html\" title=\"struct primitive_types::H256\">H256</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"substrate_client/backend/trait.Backend.html\" title=\"trait substrate_client::backend::Backend\">Backend</a>&lt;Block, <a class=\"struct\" href=\"substrate_primitives/hasher/blake2/struct.Blake2Hasher.html\" title=\"struct substrate_primitives::hasher::blake2::Blake2Hasher\">Blake2Hasher</a>&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"substrate_client/call_executor/trait.CallExecutor.html\" title=\"trait substrate_client::call_executor::CallExecutor\">CallExecutor</a>&lt;Block, <a class=\"struct\" href=\"substrate_primitives/hasher/blake2/struct.Blake2Hasher.html\" title=\"struct substrate_primitives::hasher::blake2::Blake2Hasher\">Blake2Hasher</a>&gt; + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;RA: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;PRA: <a class=\"trait\" href=\"sr_primitives/traits/trait.ProvideRuntimeApi.html\" title=\"trait sr_primitives::traits::ProvideRuntimeApi\">ProvideRuntimeApi</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"substrate_client/backend/trait.AuxStore.html\" title=\"trait substrate_client::backend::AuxStore\">AuxStore</a> + <a class=\"trait\" href=\"substrate_client/blockchain/trait.ProvideCache.html\" title=\"trait substrate_client::blockchain::ProvideCache\">ProvideCache</a>&lt;Block&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;PRA::<a class=\"type\" href=\"sr_primitives/traits/trait.ProvideRuntimeApi.html#associatedtype.Api\" title=\"type sr_primitives::traits::ProvideRuntimeApi::Api\">Api</a>: <a class=\"trait\" href=\"substrate_client/block_builder/api/trait.BlockBuilder.html\" title=\"trait substrate_client::block_builder::api::BlockBuilder\">BlockBuilderApi</a>&lt;Block&gt; + <a class=\"trait\" href=\"substrate_consensus_babe/trait.BabeApi.html\" title=\"trait substrate_consensus_babe::BabeApi\">BabeApi</a>&lt;Block&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,&nbsp;</span>",synthetic:false,types:["substrate_consensus_babe::BabeVerifier"]},];
implementors["substrate_network"] = [{text:"impl&lt;B:&nbsp;<a class=\"trait\" href=\"sr_primitives/traits/trait.Block.html\" title=\"trait sr_primitives::traits::Block\">BlockT</a>&gt; <a class=\"trait\" href=\"substrate_consensus_common/import_queue/trait.Verifier.html\" title=\"trait substrate_consensus_common::import_queue::Verifier\">Verifier</a>&lt;B&gt; for <a class=\"struct\" href=\"substrate_network/test/struct.PassThroughVerifier.html\" title=\"struct substrate_network::test::PassThroughVerifier\">PassThroughVerifier</a>",synthetic:false,types:["substrate_network::test::PassThroughVerifier"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
