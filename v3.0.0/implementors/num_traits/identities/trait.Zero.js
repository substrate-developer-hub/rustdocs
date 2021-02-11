(function() {var implementors = {};
implementors["nalgebra"] = [{"text":"impl&lt;N, R:&nbsp;DimName, C:&nbsp;DimName&gt; Zero for MatrixMN&lt;N, R, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Scalar + Zero + ClosedAdd,<br>&nbsp;&nbsp;&nbsp;&nbsp;DefaultAllocator: Allocator&lt;N, R, C&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;N:&nbsp;SimdRealField&gt; Zero for Quaternion&lt;N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N::Element: SimdRealField,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["num_bigint"] = [{"text":"impl Zero for BigInt","synthetic":false,"types":[]},{"text":"impl Zero for BigUint","synthetic":false,"types":[]}];
implementors["num_complex"] = [{"text":"impl&lt;T:&nbsp;Clone + Num&gt; Zero for Complex&lt;T&gt;","synthetic":false,"types":[]}];
implementors["num_rational"] = [{"text":"impl&lt;T:&nbsp;Clone + Integer&gt; Zero for Ratio&lt;T&gt;","synthetic":false,"types":[]}];
implementors["num_traits"] = [];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()