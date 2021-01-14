(function() {var implementors = {};
implementors["chacha20"] = [{"text":"impl&lt;R:&nbsp;Rounds&gt; SyncStreamCipher for Cipher&lt;R&gt;","synthetic":false,"types":[]},{"text":"impl SyncStreamCipher for XChaCha20","synthetic":false,"types":[]}];
implementors["salsa20"] = [{"text":"impl SyncStreamCipher for XSalsa20","synthetic":false,"types":[]},{"text":"impl SyncStreamCipher for Salsa20","synthetic":false,"types":[]}];
implementors["salsa20_core"] = [{"text":"impl&lt;C&gt; SyncStreamCipher for Ctr&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: SalsaFamilyCipher,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()