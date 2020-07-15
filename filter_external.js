const scrape = require('website-scraper');

const websiteUrl = 'https://nodejs.org';

let options = {
    urls: [websiteUrl],
    directory: './node-homepage',
    // Enable recursive download
    recursive: true,
    // Follow only the links from the first page (index)
    // then the links from other pages won't be followed
    maxDepth: 1,
    urlFilter: function(url){
        
        // If url contains the domain of the website, then continue:
        // https://nodejs.org with https://nodejs.org/en/example.html
        if(url.indexOf(websiteUrl) === 0){
            console.log(`URL ${url} matches ${websiteUrl}`);
            return true;
        }
        
        return false;
    },
};

scrape(options).then((result) => {
    console.log("Webpages succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});