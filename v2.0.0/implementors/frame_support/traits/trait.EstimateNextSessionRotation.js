(function() {var implementors = {};
implementors["frame_support"] = [];
implementors["pallet_babe"] = [{"text":"impl&lt;T:&nbsp;Trait&gt; EstimateNextSessionRotation&lt;&lt;T as Trait&gt;::BlockNumber&gt; for Module&lt;T&gt;","synthetic":false,"types":[]}];
implementors["pallet_session"] = [{"text":"impl&lt;BlockNumber:&nbsp;Rem&lt;Output = BlockNumber&gt; + Sub&lt;Output = BlockNumber&gt; + Zero + PartialOrd + Saturating + Clone, Period:&nbsp;Get&lt;BlockNumber&gt;, Offset:&nbsp;Get&lt;BlockNumber&gt;&gt; EstimateNextSessionRotation&lt;BlockNumber&gt; for PeriodicSessions&lt;Period, Offset&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()