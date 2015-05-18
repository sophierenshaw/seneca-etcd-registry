var seneca = require('seneca')()

Etcd = require('node-etcd');
etcd = new Etcd();

var getset = function(options){

etcd.set("key","value",{ttl: 60}, console.log);
etcd.get("key", {ttl: 60}, console.log);
}

var list = function( options ){

}

var remove = function( options ){

etcd.del("key", console.log);

}

seneca.use(getset)
seneca.use(list)
seneca.use(remove)
