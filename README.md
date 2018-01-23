# vsiren
> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8100
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run createEntry
npm run createEntry target  

# run mdev    run dev & mock
npm run mdev

# run all tests
npm test
```

# API MOCK
API : src/api/index.js

``` bash
export const I_HEALTHINFORM = path(healthInform)

export const I_HEALTHINFORM = path(healthInform， true)

true : local mock   mock data from service/mock

false: origin mock  

open snap  dir path = service/snap 

server/server.js  config origin host

example

var crosshost = 'https://easy-mock.com'

```
# multiple Entry
config  ./config/entry.json


