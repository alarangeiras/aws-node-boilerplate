#!/bin/env bash

rm -rf dist/ node_modules
npm install
npm run build
cd dist
zip dist.zip bundle.js
cd -
