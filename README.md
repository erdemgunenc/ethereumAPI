## Description

This API gets the Addresses of Ethereum and checks the balances and sorts them according to USD balance.

To be able to check the status of the Coingecko, the following API is used
```bash
https://api.coingecko.com/api/v3/ping
```
To be able to get the rate of usd/eth from Coingecko, the following API is used
```bash
https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2C&vs_currencies=usd
```

To be able to get the balance of the ETH Addresses', the following service is used
```bash
https://mainnet.infura.io/v3/c4dee2613be34b8c90bfdd762f72daf1

```

Before installation, quick useful demo address (string type) parameter:
```bash
0x061F7937B7b2bc7596539959804F86538b6368dC ETH Address has 61 ETH
0x2698f4fb4b7fe5b9ad7aab6cb1c409bceb0099b1 ETH Address has 0  ETH
```

## Installation

```bash
$ npm install
```

## Running the app locally

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
Then visit http://localhost:3000/api


## Running the app on the Docker
```bash
After copying .env and docker-compose.yml to the root of the working directory;

# Build image
$ docker build . -t ethereumapi

# Check the image
$ sudo docker images

# Run the image
$ docker run -p 3000:3000 -d ethereumapi
```

## Swagger Documentation
```bash
# development
$ npm run start

http://localhost:3000/api

```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


