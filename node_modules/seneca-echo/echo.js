/* Copyright (c) 2010-2015 Richard Rodger, MIT License */
/* jshint node:true, asi:true, eqnull:true */
"use strict"


var _ = require('lodash')


module.exports = function echo( options ) {

  options = this.util.deepextend({
    web:     true,
    exclude: {role:true},
    inject:  {},
    delay:   0,
  },options)


  this.add({role:'echo'},function(args,done){
    var out = _.omit(
      _.extend({},args,options.inject),
      _.keys(options.exclude)
    )

    setTimeout(function(){
      done(null,out)
    },options.delay)
  })


  if( options.web ) {
    // assumes express or connect app
    this.act({role:'web',use:function(req,res,next){
      if( 0 === req.url.indexOf('/echo') ) {
        res.writeHead(200)
        var content = req.url

        // use body-parser json middleware to accept JSON data
        if( req.body ) {
          content = _.isObject(req.body) ? JSON.stringify(req.body) : ''+req.body
        } 
        res.end(content)
      }
      else next();
    }})
  }

  return { name:'echo' }
}
