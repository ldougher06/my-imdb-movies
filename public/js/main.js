'use strict';

var API_URL = 'http://www.omdbapi.com/?';
var FIREBASE_URL = 'https://my-movie-app.firebaseio.com/';

var $submitForm = $('.submit-form');

$submitForm.submit(function (evt) {
  evt.preventDefault();
  var title = $(this).find('input[type!="submit"]').val();
  var url = API_URL + 't=' + title + '&r=json';
  console.log(url);
  $.get(url, createMovieNode);
});

var $watchlist = $('.docFrag');

function createMovieNode(data, id) {
  var html = '<div data-id=' + id + ' class=\'movie\'><div><img src=' + data.Poster + ' alt=\'' + data.Title + '\'></img></div>';
  html += '<div>' + data.Title + '</div>';
  html += '<div>' + data.Year + '</div>';
  html += '<div>' + data.Genre + '</div>';
  html += '<div>' + data.Director + '</div>';
  html += '<div>' + data.Plot + '</div>';
  html += '<div><div class=\'imdbLogo\'>' + data.imdbRating + '</div>';
  html += '<div>Metascore ' + data.Metascore + '/100</div>';
  html += '<div><button class=\'removeBtn\'>Remove</button></div></div>';
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
//console.log(data);

//$('.movie-list').append(data.Title, data.Rated, data.Released);

/*}, 'jsonp');*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxPQUFPLEdBQUcsMEJBQTBCLENBQUM7QUFDekMsSUFBSSxZQUFZLEdBQUcsc0NBQXNDLENBQUM7O0FBRTFELElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFcEMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRTtBQUNoQyxLQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDckIsTUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3hELE1BQUksR0FBRyxHQUFHLE9BQU8sR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLFNBQVMsQ0FBQztBQUM3QyxTQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLEdBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFBO0NBTTVCLENBQUMsQ0FBQzs7QUFFSCxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUE7O0FBRTlCLFNBQVMsZUFBZSxDQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDbEMsTUFBSSxJQUFJLEdBQUcsZUFBZSxHQUFHLEVBQUUsR0FBRyxpQ0FBK0IsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVEsR0FBVyxJQUFJLENBQUMsS0FBSyxHQUFHLGlCQUFnQixDQUFDO0FBQ25JLE1BQUksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7QUFDeEMsTUFBSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztBQUN2QyxNQUFJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO0FBQ3hDLE1BQUksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDM0MsTUFBSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztBQUN2QyxNQUFJLElBQUksK0JBQTZCLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7QUFDbkUsTUFBSSxJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO0FBQzFELE1BQUksSUFBSSw4REFBNEQsQ0FBQztBQUNyRSxZQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQ3hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JILFNBQVMsY0FBYyxDQUFDLElBQUksRUFBRTs7QUFFNUIsTUFBSSxNQUFNLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsTUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzs7QUFHNUIsU0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUN4QixDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQVBJX1VSTCA9ICdodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz8nO1xudmFyIEZJUkVCQVNFX1VSTCA9ICdodHRwczovL215LW1vdmllLWFwcC5maXJlYmFzZWlvLmNvbS8nO1xuXG52YXIgJHN1Ym1pdEZvcm0gPSAkKCcuc3VibWl0LWZvcm0nKTtcblxuJHN1Ym1pdEZvcm0uc3VibWl0KGZ1bmN0aW9uIChldnQpIHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIHZhciB0aXRsZSA9ICQodGhpcykuZmluZCgnaW5wdXRbdHlwZSE9XCJzdWJtaXRcIl0nKS52YWwoKTtcbiAgdmFyIHVybCA9IEFQSV9VUkwgKyAndD0nICsgdGl0bGUgKyAnJnI9anNvbic7XG4gIGNvbnNvbGUubG9nKHVybCk7XG4gICQuZ2V0KHVybCwgY3JlYXRlTW92aWVOb2RlKVxuICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAvLyQoJy5tb3ZpZS1saXN0JykuYXBwZW5kKGRhdGEuVGl0bGUsIGRhdGEuUmF0ZWQsIGRhdGEuUmVsZWFzZWQpO1xuXG4gIC8qfSwgJ2pzb25wJyk7Ki9cbn0pO1xuXG52YXIgJHdhdGNobGlzdCA9ICQoJy5kb2NGcmFnJylcblxuZnVuY3Rpb24gY3JlYXRlTW92aWVOb2RlIChkYXRhLCBpZCkge1xuICB2YXIgaHRtbCA9IFwiPGRpdiBkYXRhLWlkPVwiICsgaWQgKyBcIiBjbGFzcz0nbW92aWUnPjxkaXY+PGltZyBzcmM9XCIgKyBkYXRhLlBvc3RlciArIFwiIGFsdD0nXCIgKyAgICAgICAgIGRhdGEuVGl0bGUgKyBcIic+PC9pbWc+PC9kaXY+XCI7XG4gIGh0bWwgKz0gXCI8ZGl2PlwiICsgZGF0YS5UaXRsZSArIFwiPC9kaXY+XCI7XG4gIGh0bWwgKz0gXCI8ZGl2PlwiICsgZGF0YS5ZZWFyICsgXCI8L2Rpdj5cIjtcbiAgaHRtbCArPSBcIjxkaXY+XCIgKyBkYXRhLkdlbnJlICsgXCI8L2Rpdj5cIjtcbiAgaHRtbCArPSBcIjxkaXY+XCIgKyBkYXRhLkRpcmVjdG9yICsgXCI8L2Rpdj5cIjtcbiAgaHRtbCArPSBcIjxkaXY+XCIgKyBkYXRhLlBsb3QgKyBcIjwvZGl2PlwiO1xuICBodG1sICs9IFwiPGRpdj48ZGl2IGNsYXNzPSdpbWRiTG9nbyc+XCIgKyBkYXRhLmltZGJSYXRpbmcgKyBcIjwvZGl2PlwiO1xuICBodG1sICs9IFwiPGRpdj5NZXRhc2NvcmUgXCIgKyBkYXRhLk1ldGFzY29yZSArIFwiLzEwMDwvZGl2PlwiO1xuICBodG1sICs9IFwiPGRpdj48YnV0dG9uIGNsYXNzPSdyZW1vdmVCdG4nPlJlbW92ZTwvYnV0dG9uPjwvZGl2PjwvZGl2PlwiO1xuICAkd2F0Y2hsaXN0LmFwcGVuZChodG1sKTtcbiB9O1xuXG4vKiQoZnVuY3Rpb24oKSB7XG4gICAgZGVidWdnZXI7XG4gICAgdmFyIHVybCA9ICdodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz8nLFxuICAgICAgICB0aXRsZSA9ICd0PScsXG4gICAgICAgIGlucHV0LFxuICAgICAgICBtb3ZpZU5hbWU7XG5cbiAgICAkKCdpbnB1dCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaW5wdXQgPSAkKCcjbW92aWUnKS52YWwoKSxcbiAgICAgICAgICAgIG1vdmllTmFtZSA9IGVuY29kZVVSSShpbnB1dCk7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IHVybCArIHRpdGxlICsgJyZxdWVyeT0nK21vdmllTmFtZSAsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb25wJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufSk7Ki9cblxuXG4vL0pTT05QX0NBTExCQUNLXG5mdW5jdGlvbiBhZGRNb3ZpZURldGFpbChkYXRhKSB7XG5cbiAgdmFyIGRldGFpbCA9IGNyZWF0ZU1vdmllRGV0YWlsKGRhdGEpO1xuICB2YXIgJHRhcmdldCA9ICQoJy5kb2NGcmFnJyk7XG5cbiAgLy8kdGFyZ2V0LmVtcHR5KCk7XG4gICR0YXJnZXQuYXBwZW5kKGRldGFpbCk7XG59O1xuXG4vL0NSRUFURVMgRE9NIEVMRU1FTlRcbi8qZnVuY3Rpb24gY3JlYXRlTW92aWVEZXRhaWwoZGF0YSwgaWQpIHtcbiAgdmFyIGRvY0ZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpOyAvLyBjb250YWlucyBhbGwgZ2F0aGVyZWQgbm9kZXNcblxuICB2YXIgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdIMScpO1xuICBoMS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhlYWRlclwiKTtcbiAgZG9jRnJhZ21lbnQuYXBwZW5kQ2hpbGQoaDEpO1xuICB2YXIgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTW92aWUgRGF0YWJhc2VcIik7XG4gIGgxLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gIHZhciBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRk9STScpO1xuICBmb3JtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3VibWl0LWZvcm1cIik7XG4gIGRvY0ZyYWdtZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lOUFVUJyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTW92aWUgVGl0bGVcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICB2YXIgaW5wdXRfMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lOUFVUJyk7XG4gIGlucHV0XzAuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgaW5wdXRfMC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlNlYXJjaFwiKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dF8wKTtcblxuICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vdmllLWxpc3RcIik7XG4gIGRvY0ZyYWdtZW50LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdTUEFOJyk7XG4gIHNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkb2NGcmFnXCIpO1xuICBkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgcmV0dXJuIGRvY0ZyYWdtZW50O1xufTsqL1xuXG4vKmZ1bmN0aW9uIGdldEpTT05QKHVybCwgY2IpIHtcbiAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzY3JpcHQuc3JjID0gdXJsICsgJyZjYWxsYmFjaz0nICsgY2I7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xufSovXG4iXX0=