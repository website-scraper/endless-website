## Description

Fake website to test [website-scraper](https://github.com/website-scraper/node-website-scraper) module. 
Serves endless amount of html pages with configurable amount of uniq images and links to other pages.
By default each page has 20 links and 100 images, amount of resources can be changed with `?a=N&img=M` query sting params. 

E.g. http://localhost:3000?a=100&img=500 serves (slowly) a website with 100 links and 500 images for each page. 

## Requirements

* Node.js version > 16 (lower versions were not tested)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
