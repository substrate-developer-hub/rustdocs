(function() {var implementors = {};
implementors["sc_client"] = [{"text":"impl&lt;B, E, Block&gt; <a class=\"trait\" href=\"sp_version/trait.GetRuntimeVersion.html\" title=\"trait sp_version::GetRuntimeVersion\">GetRuntimeVersion</a>&lt;Block&gt; for <a class=\"struct\" href=\"sc_client/struct.LocalCallExecutor.html\" title=\"struct sc_client::LocalCallExecutor\">LocalCallExecutor</a>&lt;B, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block, <a class=\"struct\" href=\"sp_core/hasher/blake2/struct.Blake2Hasher.html\" title=\"struct sp_core::hasher::blake2::Blake2Hasher\">Blake2Hasher</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"sp_core/traits/trait.CodeExecutor.html\" title=\"trait sp_core::traits::CodeExecutor\">CodeExecutor</a> + <a class=\"trait\" href=\"sc_executor/trait.RuntimeInfo.html\" title=\"trait sc_executor::RuntimeInfo\">RuntimeInfo</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>&lt;Hash = <a class=\"struct\" href=\"primitive_types/struct.H256.html\" title=\"struct primitive_types::H256\">H256</a>&gt;,&nbsp;</span>","synthetic":false,"types":["sc_client::call_executor::LocalCallExecutor"]}];
implementors["sp_version"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()