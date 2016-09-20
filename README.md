bkrall.sideproject.io
=========================
Portfolio. Below documentation based on [https://github.com/anorudes/redux-easy-boilerplate](https://github.com/anorudes/redux-easy-boilerplate).

## Installation
```
$ git clone https://github.com/anorudes/redux-easy-boilerplate.git
$ cd redux-easy-boilerplate
$ npm install
```

## Development
```
$ npm start
```
Runs the project in development mode with hot-reloading of `src` folder.
Open your browser at [http://localhost:3000](http://localhost:3000).

### Try
```
$ rm -rf node_modules
$ npm i
$ npm start
```

## Clean
```
$ npm run clean
```
Using rimraf clean the `dist` folder, which is the target of the `build`

## Build & build:production
```
$ npm run build
```
Builds the app into the 'dist' folder for deployment
```
$ npm run build:production
```
clean the `dist` folder and rebuilds the app for deployment
### Production
To run your server in production simply place the `index.html` and `dist` folder into
your `web root`.

## Run karma
```
$ npm test
