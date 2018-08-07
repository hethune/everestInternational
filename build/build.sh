#!/bin/bash

# set +e
# set -x

# yarn
# yarn test # the test does not pass yet...
# yarn build
# yarn upload


############## wehome.io ###############

zip dist.zip -x "dist/static*" -r dist

scp dist.zip jiale@47.91.242.96:/tmp/

ssh jiale@47.91.242.96 << soff

sudo su

mv -f /tmp/dist.zip /srv/everestInternational/

unzip -o /srv/everestInternational/dist.zip -d /srv/everestInternational

chown -R deploy /srv/everestInternational/dist 

rm -f /srv/everestInternational/dist.zip

exit

exit

soff

rm -f dist.zip
