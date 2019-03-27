// This is the javascript file

// This is the list containing words in all languages
var listQuotes = [
    {quote: "Good Morning!", author: "English", bgcolor: "#90caf9"},
    {quote: "Bonjour", author: "French", bgcolor: "#ce93d8  "}
];

var currentQuote = 0;
var progress = setInterval(timerProgress, 40);
var progressWidth = 0;

// var timeDisplayed = 10000;
// var timer = setInterval(changeQuote, timeDisplayed);

function timerProgress() {
  $(".quote-progress").width(progressWidth + "%");
  if(progressWidth < 100) {
    progressWidth += 0.1;
  } else {
    changeQuote();
    progressWidth = 0;
  }
}

function setQuote() {
  $(".quote").html('"' + listQuotes[currentQuote].quote + '"');
  $(".author-name").html(listQuotes[currentQuote].author);
//   tweetQuote();
  $(".container").css("backgroundColor", listQuotes[currentQuote].bgcolor);
}

function getRandomQuote() {
  currentQuote = Math.round(Math.random() * (listQuotes.length));
  setQuote();
}

function changeQuote() {
  // $("blockquote").fadeToggle( "slow", "linear" );
  if(currentQuote < listQuotes.length - 1){
    currentQuote++;
  } else {
    currentQuote = 0;
  }
  setQuote();
}

$(".previous").click(function() {
  if(currentQuote > 0){
    currentQuote--;
  } else {
    currentQuote = listQuotes.length - 1;
  }
  setQuote();
  progressWidth = 0;
});

$(".next").click(function() {
  changeQuote();
  progressWidth = 0;
});

$(".random").click(function() {
  getRandomQuote();
  progressWidth = 0;
});

/* Twitter API */
// window.twttr = (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0],
//     t = window.twttr || {};
//   if (d.getElementById(id)) return t;
//   js = d.createElement(s);
//   js.id = id;
//   js.src = "https://platform.twitter.com/widgets.js";
//   fjs.parentNode.insertBefore(js, fjs);
 
//   t._e = [];
//   t.ready = function(f) {
//     t._e.push(f);
//   };
 
//   return t;
// }(document, "script", "twitter-wjs"));

// function tweetQuote() {
//   $('#quote-tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quote,inspiration&text=' + encodeURIComponent('"' + listQuotes[currentQuote].quote + '" ' + listQuotes[currentQuote].author));
// }

setQuote();