const scrape = require('website-scraper');

let options = {
    urls: ['https://vi.wikipedia.org/wiki/Jack_(ca_sĩ_Việt_Nam)'],
    directory: './dowload',
};

scrape(options)
    .then( result => {
        // console.log("Website succesfully downloaded");
        console.log(result);
    }).catch((err) => {
        console.log("An error ocurred", err);
});