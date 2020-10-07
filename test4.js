// const fs = require('fs');
const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const vgmUrl= 'http://www.vgmusic.com/music/console/nintendo/nes/';

got(vgmUrl)
  .then(response => {
    const dom = new JSDOM(response.body);
    console.log(dom.window.document.querySelector('title').textContent);
  }).catch(err => {
    console.log(err);
});