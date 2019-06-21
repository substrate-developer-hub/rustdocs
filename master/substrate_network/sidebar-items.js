initSidebarItems({"enum":[["NetworkMsg","Messages to be handled by Libp2pNetService."],["NetworkStatePeerEndpoint","Part of the `NetworkState` struct. Unstable."],["ParseErr","Error that can be generated by `parse_str_addr`."],["PublicKey","The public key of a node's identity keypair."],["SyncState","Reported sync state."]],"fn":[["parse_str_addr","Parses a string address and returns the component, if valid."]],"macro":[["build_multiaddr","Easy way for a user to create a `Multiaddr`."],["construct_simple_protocol","Construct a simple protocol that is composed of several sub protocols. Each \"sub protocol\" needs to implement `Specialization` and needs to provide a `new()` function. For more fine grained implementations, this macro is not usable."]],"mod":[["config","Configuration for the networking layer of Substrate."],["consensus_gossip","Utility for gossip of network messages between authorities. Handles chain-specific and standard BFT messages."],["error","Substrate network possible errors."],["generic_message","Generic types."],["identity","A node's network identity keys."],["message","Network packet message types. These get serialized and put into the lower level protocol payload."],["specialization","Specializations of the substrate network protocol to allow more complex forms of communication."],["test",""]],"struct":[["AlwaysBadChecker","Dummy implementation of `FetchChecker` that always assumes that responses are bad."],["Multiaddr","Representation of a Multiaddr."],["NetworkService","Substrate network service. Handles network IO and manages connectivity."],["NetworkState","Returns general information about the networking."],["NetworkStateNotConnectedPeer","Part of the `NetworkState` struct. Unstable."],["NetworkStatePeer","Part of the `NetworkState` struct. Unstable."],["NetworkWorker","Future tied to the `Network` service and that must be polled in order for the network to advance."],["OnDemand","Implements the `Fetcher` trait of the client. Makes it possible for the light client to perform network requests for some state."],["PeerId","Identifier of a peer of the network."],["PeerInfo","Info about a peer's known state."],["ProtocolId","Name of a protocol, transmitted on the wire. Should be unique for each chain."],["RemoteResponse","Future for an on-demand remote call response."],["ReportHandle","A cloneable handle for reporting cost/benefits of peers."]],"trait":[["ClientHandle","Local client abstraction for the network."],["Context","Context for a network-specific handler."],["DiscoveryNetBehaviour","Extension trait for `NetworkBehaviour` that also accepts discovering nodes."],["ExHashT","Minimum Requirements for a Hash within Networking"],["FinalityProofProvider","Finality proof provider."],["ManageNetwork","Trait for managing network"],["TransactionPool","Transaction pool interface"]],"type":[["FetchFuture","Type that represents fetch completion future."],["RequestId","A unique ID of a request."],["StatusMessage","Type alias for using the status type using block type parameters."]]});