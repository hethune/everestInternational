# wehome-website

> A Vue.js project

## Build Setup

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn start

# build for production with minification
yarn local

# server for local dist file at localhost:5000
yarn server

# build for production with minification (for deploy cdn)
yarn build

# install dependencies , build for production with minification and deploy cdn
yarn deploy

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
yarn run unit

# run e2e tests
yarn run e2e

# run all tests
yarn test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Deploy
```bash
# copy .env file and modify .env files
cp .env_sample .env
# access_key and secret_key is not in .env_sample,
# you need to add it to your local .env manually

# install dependencies
yarn

# build for production with minification (for deploy cdn)
yarn build

# upload all assets
yarn upload

```

## Nginx
```
server {
  listen 443 ssl; # managed by Certbot
  server_name www.everest.com;
  root /var/www/everest;


  access_log /var/log/nginx/www.everest.access.log;
  error_log /var/log/nginx/www.everest.error.log debug;

  location / {
    root /var/www/everest;
    index index.html;
    try_files $uri $uri/ /index.html;
  }

  include snippets/ssl-params.conf;
  ssl_certificate /etc/letsencrypt/live/everest.com/fullchain.pem; # managed by Certbot
  ssl_certificate_key /etc/letsencrypt/live/everest.com/privkey.pem; # managed by Certbot
}

```
