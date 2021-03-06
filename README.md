# routing

Routing - specialised storage DHT

| Travis build and test status | Appveyor build status | Code Coverage |
|:----------------------------:|:---------------------:|:--------------:|
|[![Build Status](https://travis-ci.org/dirvine/routing.svg?branch=master)](https://travis-ci.org/dirvine/routing)|[![Build status](https://ci.appveyor.com/api/projects/status/ni7c20e9aux3g01i?svg=true)](https://ci.appveyor.com/project/dirvine/routing)|[![Coverage Status](https://coveralls.io/repos/dirvine/routing/badge.svg?branch=master)](https://coveralls.io/r/dirvine/routing?branch=master)|

[Documentation](http://dirvine.github.io/routing/routing/)

###Pre-requisite:
libsodium is a native dependency for [sodiumxoide](https://github.com/dnaq/sodiumoxide). Thus, install sodium by following the instructions [here](http://doc.libsodium.org/installation/index.html).

For windows, download and use the [prebuilt mingw library](https://download.libsodium.org/libsodium/releases/libsodium-1.0.2-mingw.tar.gz).
Extract and place the libsodium.a file in "bin\x86_64-pc-windows-gnu" for 64bit System or "bin\i686-pc-windows-gnu" for a 32bit system.

SQLite3 is also native dependency for [rustsqlite](https://github.com/linuxfood/rustsqlite).
Steps to compile SQLite by,
1. Download SQLite Source code which includes a "configure" script from [SQLite download page](https://www.sqlite.org/download.html) 
2. On Linux, Run `./configure --prefix=/usr && make && sudo make install` to build the SQLite source. While on Windows Users can build using (mingw + msys) and run './configure && make' 
3. On Windows, Copy the `libsqlite3.a` file from the .libs folder to the "bin\{TARGET-TRIPLE}" in the project root folder.
 
##Todo Items

- [x] Set up facade design pattern
- [x] Test facade pattern
- [x] Set up accumulator
- [x] Accumulator tests
- [x] Message header 
- [x] Message header tests
- [x] API version 0.0.6
- [x] Bootstrap handler implementation
- [x] Bootstrap handler test
- [ ] zero state network
- [ ] Test node network (process on single machine)
- [ ] Test node network (local area network)
- [ ] Test node network (across digital ocean images)
- [x] Create sort and bucket index methods 
- [x] Implement routing table
- [x] Test routing table 
- [x] Implement sentinel (initial)
- [x] Finalise sentinel in line with tests
- [x] Implement client node
- [ ] Test client node
- [ ] Implement client façade
- [ ] Test client façade
- [ ] Integrate connection manager (bootstrapping)
- [ ] Implement routing node (handle messages , forwarding etc)
- [x] Test sentinel 
- [x] Implement routing message types (Connect FindNode)
- [x] Test message types
- [x] Implement Get Put Post messages
- [ ] Implement routing node
- [ ] Version 0.0.8
- [ ] Integrate with Sentinel
- [ ] Implement NAT traversal (requires crust v0.1.0)
- [ ] Test basic facade (normal DHT Get Put with republish)
- [ ] Version 0.1 (crates.io)
