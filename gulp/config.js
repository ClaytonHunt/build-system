'use strict';

var clientBase = './src/client';
var serverBase = './src/server';

var distBase = './dist';

var config = {
  ports: {
    client: 8080,
    backend: 8081
  },
  devBaseUrl: 'http://localhost',
  paths: {
    html: clientBase + '/*.html',
    images: clientBase + '/images/**/*.*',
    js: clientBase + '/scripts/business/main.jsx',
    jsWatch: clientBase + '/scripts/business/**/*.js*',
    jsThirdParty: [],
    css: [
      clientBase + '/styles/business/**/*.less'
    ],
    server: serverBase + '/**/*',
    dist: distBase,
    clientDist: distBase + '/client',
    backendDist: distBase + '/server'
  }
};

module.exports = config;