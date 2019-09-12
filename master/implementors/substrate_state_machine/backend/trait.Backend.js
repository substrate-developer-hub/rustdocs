(function() {var implementors = {};
implementors["substrate_client"] = [{text:"impl&lt;H:&nbsp;<a class=\"trait\" href=\"hash_db/trait.Hasher.html\" title=\"trait hash_db::Hasher\">Hasher</a>&gt; <a class=\"trait\" href=\"substrate_state_machine/backend/trait.Backend.html\" title=\"trait substrate_state_machine::backend::Backend\">Backend</a>&lt;H&gt; for <a class=\"enum\" href=\"substrate_client/light/backend/enum.GenesisOrUnavailableState.html\" title=\"enum substrate_client::light::backend::GenesisOrUnavailableState\">GenesisOrUnavailableState</a>&lt;H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H::<a class=\"type\" href=\"hash_db/trait.Hasher.html#associatedtype.Out\" title=\"type hash_db::Hasher::Out\">Out</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>,&nbsp;</span>",synthetic:false,types:["substrate_client::light::backend::GenesisOrUnavailableState"]},];
implementors["substrate_client_db"] = [{text:"impl&lt;B:&nbsp;<a class=\"trait\" href=\"sr_primitives/traits/trait.Block.html\" title=\"trait sr_primitives::traits::Block\">BlockT</a>&gt; <a class=\"trait\" href=\"substrate_state_machine/backend/trait.Backend.html\" title=\"trait substrate_state_machine::backend::Backend\">Backend</a>&lt;<a class=\"struct\" href=\"substrate_primitives/hasher/blake2/struct.Blake2Hasher.html\" title=\"struct substrate_primitives::hasher::blake2::Blake2Hasher\">Blake2Hasher</a>&gt; for <a class=\"struct\" href=\"substrate_client_db/struct.RefTrackingState.html\" title=\"struct substrate_client_db::RefTrackingState\">RefTrackingState</a>&lt;B&gt;",synthetic:false,types:["substrate_client_db::RefTrackingState"]},];
implementors["substrate_state_machine"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()