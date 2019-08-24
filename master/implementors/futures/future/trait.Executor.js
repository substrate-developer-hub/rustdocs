(function() {var implementors = {};
implementors["futures_cpupool"] = [{text:"impl&lt;F&gt; <a class=\"trait\" href=\"futures/future/trait.Executor.html\" title=\"trait futures::future::Executor\">Executor</a>&lt;F&gt; for <a class=\"struct\" href=\"futures_cpupool/struct.CpuPool.html\" title=\"struct futures_cpupool::CpuPool\">CpuPool</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Error = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>",synthetic:false,types:["futures_cpupool::CpuPool"]},];
implementors["futures_util"] = [{text:"impl&lt;Sp, Fut&gt; <a class=\"trait\" href=\"futures/future/trait.Executor.html\" title=\"trait futures::future::Executor\">Executor</a>&lt;Fut&gt; for <a class=\"struct\" href=\"futures_util/compat/struct.Compat.html\" title=\"struct futures_util::compat::Compat\">Compat</a>&lt;Sp&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>Sp: <a class=\"trait\" href=\"futures_core/task/spawn/trait.Spawn.html\" title=\"trait futures_core::task::spawn::Spawn\">Spawn03</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future01</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Error = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>",synthetic:false,types:["futures_util::compat::compat03as01::Compat"]},];
implementors["substrate_service"] = [{text:"impl&lt;Factory:&nbsp;<a class=\"trait\" href=\"substrate_service/trait.ServiceFactory.html\" title=\"trait substrate_service::ServiceFactory\">ServiceFactory</a>&gt; <a class=\"trait\" href=\"futures/future/trait.Executor.html\" title=\"trait futures::future::Executor\">Executor</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Error = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt;&gt; for <a class=\"struct\" href=\"substrate_service/struct.FullComponents.html\" title=\"struct substrate_service::FullComponents\">FullComponents</a>&lt;Factory&gt;",synthetic:false,types:["substrate_service::components::FullComponents"]},{text:"impl&lt;Factory:&nbsp;<a class=\"trait\" href=\"substrate_service/trait.ServiceFactory.html\" title=\"trait substrate_service::ServiceFactory\">ServiceFactory</a>&gt; <a class=\"trait\" href=\"futures/future/trait.Executor.html\" title=\"trait futures::future::Executor\">Executor</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Error = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt;&gt; for <a class=\"struct\" href=\"substrate_service/struct.LightComponents.html\" title=\"struct substrate_service::LightComponents\">LightComponents</a>&lt;Factory&gt;",synthetic:false,types:["substrate_service::components::LightComponents"]},{text:"impl <a class=\"trait\" href=\"futures/future/trait.Executor.html\" title=\"trait futures::future::Executor\">Executor</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Error = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt;&gt; for <a class=\"struct\" href=\"substrate_service/struct.SpawnTaskHandle.html\" title=\"struct substrate_service::SpawnTaskHandle\">SpawnTaskHandle</a>",synthetic:false,types:["substrate_service::SpawnTaskHandle"]},{text:"impl&lt;Components&gt; <a class=\"trait\" href=\"futures/future/trait.Executor.html\" title=\"trait futures::future::Executor\">Executor</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Error = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt;&gt; for <a class=\"struct\" href=\"substrate_service/struct.Service.html\" title=\"struct substrate_service::Service\">Service</a>&lt;Components&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Components: <a class=\"trait\" href=\"substrate_service/trait.Components.html\" title=\"trait substrate_service::Components\">Components</a>,&nbsp;</span>",synthetic:false,types:["substrate_service::Service"]},];
implementors["tokio_current_thread"] = [{text:"impl&lt;F&gt; <a class=\"trait\" href=\"futures/future/trait.Executor.html\" title=\"trait futures::future::Executor\">Executor</a>&lt;F&gt; for <a class=\"struct\" href=\"tokio_current_thread/struct.TaskExecutor.html\" title=\"struct tokio_current_thread::TaskExecutor\">TaskExecutor</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Error = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + 'static,&nbsp;</span>",synthetic:false,types:["tokio_current_thread::TaskExecutor"]},];
implementors["tokio_executor"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures/future/trait.Executor.html\" title=\"trait futures::future::Executor\">Executor</a>&lt;T&gt; for <a class=\"struct\" href=\"tokio_executor/struct.DefaultExecutor.html\" title=\"struct tokio_executor::DefaultExecutor\">DefaultExecutor</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Error = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>",synthetic:false,types:["tokio_executor::global::DefaultExecutor"]},];
implementors["tokio_threadpool"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures/future/trait.Executor.html\" title=\"trait futures::future::Executor\">Executor</a>&lt;T&gt; for <a class=\"struct\" href=\"tokio_threadpool/struct.Sender.html\" title=\"struct tokio_threadpool::Sender\">Sender</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Error = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>",synthetic:false,types:["tokio_threadpool::sender::Sender"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
