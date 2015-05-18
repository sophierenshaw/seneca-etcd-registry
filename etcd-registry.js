"use strict";

var _ = require('lodash')
var seneca = require('seneca')

Etcd = require('node-etcd');
etcd = new Etcd();

seneca.add('role:registry,cmd:set', 	cmd_set)
seneca.add('role:registry,cmd:get', 	cmd_get)
seneca.add('role:registry,cmd:remove',	cmd_remove)
seneca.add('role:registry,cmd:list',	cmd_list)

function cmd_set( args, done ){
  var keyparts = parsekey(args.key)
  setparts(keyparts,args.value)
//etcd.set("key","value",{ttl: 60}, console.log);
  done()
}

function cmd_get( args, done ){
  var keyparts = parsekey(args.key)
//etcd.get("key", {ttl: 60}, console.log);
  done(null,{value:getparts(keyparts)})
}

function cmd_list( args, done ){
  var keyparts = parsekey(args.key)  
  done()
}

function cmd_remove( args, done ){
  var keyparts = parsekey(args.key)
//etcd.del("key", console.log);
  removeparts(keyparts)
  done()
}

function parsekey( keystr ){
  var parts = (keystr||"").split("/")
  return parts

}

function setparts( parts, value ){

  etcd.set(parts,value)

}

function getparts( parts ){
 
  etcd.get(parts)

}

function removeparts( parts ){

  etcd.del(parts)

}

function listparts( parts ){

  
}
seneca.use(cmd_set)
seneca.use(cmd_get)
seneca.use(cmd_list)
seneca.use(cmd_remove)
