(function() {var implementors = {};
implementors["sc_client_api"] = [{"text":"impl&lt;Block:&nbsp;BlockT&gt; ProvideCache&lt;Block&gt; for Blockchain&lt;Block&gt;","synthetic":false,"types":[]}];
implementors["sc_client_db"] = [{"text":"impl&lt;Block:&nbsp;BlockT&gt; ProvideCache&lt;Block&gt; for BlockchainDb&lt;Block&gt;","synthetic":false,"types":[]}];
implementors["sc_service"] = [{"text":"impl&lt;B, E, Block, RA&gt; ProvideCache&lt;Block&gt; for Client&lt;B, E, Block, RA&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Backend&lt;Block&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: BlockT,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()