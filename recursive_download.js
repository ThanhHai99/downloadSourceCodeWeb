const scrape = require('website-scraper');

let options = {
    urls: ['https://nodejs.org/'],
    directory: './node-homepage',
    // Enable recursive download
    recursive: true,
    // Follow only the links from the first page (index)
    // then the links from other pages won't be followed
    maxDepth: 1
};

scrape(options).then((result) => {
    console.log("Webpages succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});