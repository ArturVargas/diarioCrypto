const cheerio = require('cheerio');
const request = require('request');

request('https://cointelegraph.com/', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    $('.posts-listing__item').each((i, post) => {
      const title = $(post).find('header').find('span').text();
      const link = $(post).find('a').attr('href');
      const date = $(post).find('footer').find('time').text();
      const author = $(post).find('footer').find('a').text();
      const imageUrl = null; // $(post).find('figure .post-card__figure').find('div').find('img').attr('src');
    })
  }
});

request('https://simpleaswater.com/', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    $('.m-article-card').each((i, post) => {
      const title = $(post).find('div').find('h2').text();
      const link = $(post).find('.m-article-card__info').find('a').attr('href');
      const date = $(post).find('.m-article-card__timestamp').find('span').text();
      const author = $(post).find('.m-article-card__author').attr('aria-label');
      const imageUrl = `https://simpleaswater.com${$(post).find('img').attr('src')}`;
      
    });
  }
});

request('https://medium.com/coinmonks', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    $('div .streamItem').find('div .js-trackPostPresentation').each((i, post) => {
      const title = $(post).find('h3').text();
      const link = $(post).find('a').attr('href');
      const date = $(post).find('div .postMetaInline').find('time').text();
      const author = $(post).find('div .postMetaInline').find('a').text();
      const imageUrl = $(post).find('div .postItem').find('a').css("background-image").split(/"/)[1];
    })
  }
});

request('https://media.consensys.net/', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    $('div .streamItem').find('div .js-trackPostPresentation').each((i, post) => {
      const title = $(post).find('h3').text();
      const link = $(post).find('a').attr('href');
      const date = $(post).find('div .postMetaInline').find('time').text();
      const author = $(post).find('div .postMetaInline').find('a').text();
      const imageUrl = $(post).find('div .postItem').find('a').css("background-image").split(/"/)[1];
      console.log(title);
    })
  }
});
