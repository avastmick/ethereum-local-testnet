// General cmds to run in the Geth interactive console

// List accounts
eth.accounts

// To test RPC
curl -X POST --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67}' http://192.168.99.100:8901
curl -X POST --data '{"jsonrpc":"2.0","method":"net_version","params":[],"id":67}' http://192.168.99.100:8901
curl -X POST --data '{"jsonrpc":"2.0","method":"net_listening","params":[],"id":67}' http://192.168.99.100:8901
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_coinbase","params":[],"id":64}' http://192.168.99.100:8901
// List accounts
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":1}' http://192.168.99.100:8901

// Unlock accounts
curl -X POST --data '{"jsonrpc":"2.0","method":"personal_unlockAccount","params":[eth.accounts[0]],"id":1}' http://192.168.99.100:8901


// Get the enode url to construct the actual enode URL
admin.nodeInfo

// Constructed, it should look like
//enode://6f8a80d14311c39f35f516fa664deaaaa13e85b2f7493f37f6144d86991ec012937307647bd3b9a82abe2974e1407241d54947bbb39763a4cac9f77166ad92a0@10.3.58.6:30303?discport=30301
// Where the ?discport=30301 is the default UDP port for discovery (compared to the TCP default port of 30301)
// So for this example the ?discport=0 as we set the --nodiscover flag

// Ether held by default account (accounts[0])
web3.fromWei(eth.getBalance(eth.accounts[0]), "ether")

// Set up a means of pre-loading the js cmds:
// loadScript("/home/testnet/conf/cmds.js")