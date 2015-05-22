# seneca-etcd-registry
The seneca-etcd-registry driver supports the use of etcd to support service discovery mechanisms and offers support for tree-based key-value structures.

## etcd
etcd is distributed, consistent key value store for shared configuration and service discovery - https://github.com/coreos/etcd

### Getting etcd running

    wget https://github.com/coreos/etcd/releases/download/v2.0.11/etcd-v2.0.11-linux-amd64.tar.gz -o etcd-v2.0.11-linux-amd64.tar.gz
    tar xzvf etcd-v2.0.11-linux-amd64.tar.gz
    cd etcd-v2.0.11-linux-amd64
    ./etcd
    
### Setting and Getting Keys

    ./etcd set key "value"
    ./etcd get key
    
## node-etcd
The best node.js module for connecting to etcd was node-etcd - https://www.npmjs.com/package/node-etcd

    npm install node-etcd
   
### Basic Usage

    Etcd = require('node-etcd');
    etcd = new Etcd();
    etcd.set("key", "value");
    etcd.get("key", console.log);
    etcd.del("key");
