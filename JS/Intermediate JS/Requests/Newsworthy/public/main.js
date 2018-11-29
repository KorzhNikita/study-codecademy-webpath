// Page Elements

const engadget = document.getElementById('engadget');
const recode = document.getElementById('recode');
const nextWeb = document.getElementById('nextWeb');
const main = document.getElementsByTagName('main')[0];

// News API Data

const apiKey = 'e463fe590ac84269993d673d8aa082cd';
const engadgetUrl = 'https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=e463fe590ac84269993d673d8aa082cd';
const recodeUrl = 'https://newsapi.org/v2/top-headlines?sources=recode&apiKey=e463fe590ac84269993d673d8aa082cd';
const nextWebUrl = 'https://newsapi.org/v2/top-headlines?sources=the-next-web&apiKey=e463fe590ac84269993d673d8aa082cd';

// Request News Function
const getNews = async url => {
  let response = await fetch(url);
  let jsonResponse = await response.json();
  console.log(jsonResponse);
  const articlesArray = jsonResponse.articles.slice(0, 5);
  console.log(articlesArray);
  return articlesArray;
}
// Render Function

function renderNews(articles) {
  articles.map((article, index) => {
    let articleRow =
      '<div class="articlerow">' +
      ' <div class="article">' +
      '   <h2 class="title">' + article.title + '</h2>' +
      '   <h3>By ' + article.author + '</h3>' +
      '   <p> ' + article.description + '</p>' +
      '   <a href="' + article.url + '" target="_blank" class="readmore"><p>Read More</p></a>' +
      ' </div>' +
      ' <div class="share">' +
      '   <img class="storyimage" src="' + article.urlToImage + '" />' +
      '   <a href="https://twitter.com/NailsWhale" target="_blank"><button type="button" class="tweet" id="tweet ' + index + '">' +
      '   <i class="fa fa-twitter" aria-hidden="true"></i>Tweet This</button></a>' +
      ' </div>' +
      '</div>';

    main.innerHTML += articleRow;
  });
  return articles;
}

// Post Tweet Function

function sendTweets(newsObjects) {
  let tweetButtons = document.getElementsByClassName('tweet');
  for (let i = 0; i < tweetButtons.length; i++) {
    tweetButtons[i].addEventListener('click', function() {
      Twitter.postStatus(newsObjects[i].url)
      tweetButtons[i].innerHTML = "Tweeted";
    }, false);
  }
}

// Button Event Listeners

engadget.addEventListener('click', function() {
  main.innerHTML = ' ';
  // Call getNews() here
  getNews(engadgetUrl).then(articles => renderNews(articles));
}, false);

recode.addEventListener('click', function() {
  main.innerHTML = ' ';
  // Call getNews() here
  getNews(recodeUrl).then(articles => renderNews(articles));
}, false);

nextWeb.addEventListener('click', function() {
  main.innerHTML = ' ';
  // Call getNews() here
  getNews(nextWebUrl).then(articles => renderNews(articles));
}, false);
