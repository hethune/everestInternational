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

mv -f /tmp/dist.zip /srv/everestWebsite/

unzip -o /srv/everestWebsite/dist.zip -d /srv/everestWebsite

chown -R deploy /srv/everestWebsite/dist 

rm -f /srv/everestWebsite/dist.zip

exit

exit

soff

############## h5.fangpinduo.com ##############

scp dist.zip jiale@116.62.226.159:/tmp/

ssh jiale@116.62.226.159 << soff

sudo su

mv -f /tmp/dist.zip /srv/everestWebsite/

unzip -o /srv/everestWebsite/dist.zip -d /srv/everestWebsite

chown -R deploy /srv/everestWebsite/dist 

rm -f /srv/everestWebsite/dist.zip

exit

exit

soff

rm -f dist.zip
