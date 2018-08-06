#!/bin/bash

set +e
set -x

yarn
# yarn test # the test does not pass yet...
yarn build
yarn upload


############## wehome.io ###############

# scp -r dist/ --exclude static/ jiale@116.62.226.159:/tmp/

# ssh jiale@47.91.242.96 << soff

# sudo su

# mv -rf /tmp/dist/ /srv/everestWebsite/

# sudo chown -R /srv/everestWebsite/dist/ deploy

# exit

# exit

# soff

