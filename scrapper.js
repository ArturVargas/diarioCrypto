const cheerio = require('cheerio');
const request = require('request');

var admin = require("firebase-admin");

var serviceAccount = require("./diariocrypto.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

request('https://cointelegraph.com/', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const coinTelegraph = db.collection('coinTelegraphPosts');
    const $ = cheerio.load(html);
    let postData = {};

    $('.posts-listing__item').each((i, post) => {
      const title = $(post).find('header').find('span').text();
      const link = `https://cointelegraph.com${$(post).find('a').attr('href')}`;
      const date = $(post).find('footer').find('time').text();
      const author = $(post).find('footer').find('a').text();
      const imageUrl = null; // $(post).find('figure .post-card__figure').find('div').find('img').attr('src');
      postData = {
        title,
        link,
        date,
        author,
        imageUrl
      };
      
      if (link && title) {
        coinTelegraph.doc((i+1).toString()).set({
          ...postData
        })
      }
    });
  }
});

request('https://simpleaswater.com/', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const simpleAsWater = db.collection('simpleAsWater');
    const $ = cheerio.load(html);
    let postData = {};

    $('.m-article-card').each((i, post) => {
      const title = $(post).find('div').find('h2').text();
      const link = $(post).find('.m-article-card__info').find('a').attr('href');
      const date = $(post).find('.m-article-card__timestamp').find('span').text();
      const author = $(post).find('.m-article-card__author').attr('aria-label');
      const imageUrl = `https://simpleaswater.com${$(post).find('img').attr('src')}`;
      postData = {
        title,
        link,
        date,
        author,
        imageUrl
      };
      
      if (link && title) {
        simpleAsWater.doc((i+1).toString()).set({
          ...postData
        })
      }
    });
  }
});

request('https://medium.com/coinmonks', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const coinMonks = db.collection('coinMonks');
    const $ = cheerio.load(html);
    let postData = {};

    $('div .streamItem').find('div .js-trackPostPresentation').each((i, post) => {
      const title = $(post).find('h3').text();
      const link = $(post).find('a').attr('href');
      const date = $(post).find('div .postMetaInline').find('time').text();
      const author = $(post).find('div .postMetaInline').find('a').text();
      const imageUrl = $(post).find('div .postItem').find('a').css("background-image").split(/"/)[1];
      postData = {
        title,
        link,
        date,
        author,
        imageUrl
      };
      
      if (link && title) {
        coinMonks.doc((i+1).toString()).set({
          ...postData
        })
      }
    })
  }
});

request('https://media.consensys.net/', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const consensys = db.collection('consensys');
    const $ = cheerio.load(html);
    let postData = {};

    $('div .streamItem').find('div .js-trackPostPresentation').each((i, post) => {
      const title = $(post).find('h3').text();
      const link = $(post).find('a').attr('href');
      const date = $(post).find('div .postMetaInline').find('time').text();
      const author = $(post).find('div .postMetaInline').find('a').text();
      const imageUrl = $(post).find('div .postItem').find('a').css("background-image").split(/"/)[1];
      postData = {
        title,
        link,
        date,
        author,
        imageUrl
      };
      
      if (link && title) {
        consensys.doc((i+1).toString()).set({
          ...postData
        })
      }
    })
  }
});
