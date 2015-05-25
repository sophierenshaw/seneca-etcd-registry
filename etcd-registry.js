/*Copyright (c) 2015, MIT License */
/* jshint node:true, asi:true, eqnull:true, loopfunc:true*/
"use strict";

var _ = require('lodash')

module.exports = function(options) {
  var seneca = this

  options = seneca.util.deepextend({
  },options)

Etcd = require('node-etcd');
etcd = new Etcd();

seneca.add('role:etcd-registry,cmd:set', 	cmd_set)
seneca.add('role:etcd-registry,cmd:get', 	cmd_get)
seneca.add('role:etcd-registry,cmd:remove',	cmd_remove)
seneca.add('role:etcd-registry,cmd:list',	cmd_list)

function cmd_set( args, done ){
  var keyparts = parsekey(args.key)
  setparts(keyparts,args.value)
  done()
}

function cmd_get( args, done ){
  var keyparts = parsekey(args.key)
  done(null,{value:getparts(keyparts)})
}

function cmd_list( args, done ){
  var keyparts = parsekey(args.key)  
  done()
}

function cmd_remove( args, done ){
  var keyparts = parsekey(args.key)
  removeparts(keyparts)
  done()
}

seneca.add('init:etcd-registry',function(args,done){
  done()
})

return {
  name:"etcd-registry"
}

function parsekey( keystr ){
  var parts = (keystr||"").split("/")
  return parts

}

function setparts( parts, value ){

  etcd.set(parts, value, console.log);

}

function getparts( parts ){
 
  etcd.get(parts)

}

function removeparts( parts ){

  etcd.del(parts)

}

function listkeys( parts ){

  
}
