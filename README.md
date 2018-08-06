# wehome-international

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
