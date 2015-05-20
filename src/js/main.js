var API_URL = 'http://www.omdbapi.com/?';
var FIREBASE_URL = 'https://my-movie-app.firebaseio.com/';

var $submitForm = $('.submit-form');

$submitForm.submit(function (evt) {
  evt.preventDefault();
  var title = $(this).find('input[type!="submit"]').val();
  var url = API_URL + 't=' + title + '&r=json';
  console.log(url);
  $.get(url, createMovieNode)
    //console.log(data);

    //$('.movie-list').append(data.Title, data.Rated, data.Released);

  /*}, 'jsonp');*/
});

var $watchlist = $('.docFrag')

function createMovieNode (data, id) {
  var html = "<div data-id=" + id + " class='movie'><div><img src=" + data.Poster + " alt='" +         data.Title + "'></img></div>";
  html += "<div>" + data.Title + "</div>";
  html += "<div>" + data.Year + "</div>";
  html += "<div>" + data.Genre + "</div>";
  html += "<div>" + data.Director + "</div>";
  html += "<div>" + data.Plot + "</div>";
  html += "<div><div class='imdbLogo'>" + data.imdbRating + "</div>";
  html += "<div>Metascore " + data.Metascore + "/100</div>";
  html += "<div><button class='removeBtn'>Remove</button></div></div>";
  $watchlist.append(html);
 };

/*$(function() {
    debugger;
    var url = 'http://www.omdbapi.com/?',
        title = 't=',
        input,
        movieName;

    $('input').click(function() {
        var input = $('#movie').val(),
            movieName = encodeURI(input);
        $.ajax({
            url: url + title + '&query='+movieName ,
            dataType: 'jsonp',
            success: function(data) {
             console.log(data);
            }
        })
    })
});*/


//JSONP_CALLBACK
function addMovieDetail(data) {

  var detail = createMovieDetail(data);
  var $target = $('.docFrag');

  //$target.empty();
  $target.append(detail);
};

//CREATES DOM ELEMENT
/*function createMovieDetail(data, id) {
  var docFragment = document.createDocumentFragment(); // contains all gathered nodes

  var h1 = document.createElement('H1');
  h1.setAttribute("class", "header");
  docFragment.appendChild(h1);
  var text = document.createTextNode("Movie Database");
  h1.appendChild(text);

  var form = document.createElement('FORM');
  form.setAttribute("class", "submit-form");
  docFragment.appendChild(form);

  var input = document.createElement('INPUT');
  input.setAttribute("placeholder", "Movie Title");
  input.setAttribute("required", "");
  form.appendChild(input);

  var input_0 = document.createElement('INPUT');
  input_0.setAttribute("type", "submit");
  input_0.setAttribute("value", "Search");
  form.appendChild(input_0);

  var div = document.createElement('DIV');
  div.setAttribute("class", "movie-list");
  docFragment.appendChild(div);

  var span = document.createElement('SPAN');
  span.setAttribute("class", "docFrag");
  div.appendChild(span);

  return docFragment;
};*/

/*function getJSONP(url, cb) {
  var script = document.createElement('script');
  script.src = url + '&callback=' + cb;

  document.body.appendChild(script);
}*/
