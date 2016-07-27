#!/bin/bash
sudo mongod -dbpath /var/lib/mongodb/vapor --fork --logpath /var/log/mongodb/vapor.log --logappend
sudo npm run build
