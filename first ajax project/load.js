// var xhr = new XMLHttpRequest ();
// xhr.onload = function() {
//   if (xhr.status === 200){
//     document.getElementById('content').innerHTML = xhr.responseText;
// }
// };
// xhr.open('GET', 'home.html', true);
// xhr.send(null);




$(function() {
  $("#data-id").click(function(e) {
    e.preventDefault();
     $("#mydiv").load("load.html")
  })
  $("#data").click(function(e) {
    e.preventDefault();
     $("#mydiv").load("home.html")
  })
})

// $('#data-id').click(function() {
//    // window.history.pushState('obj', 'PageTitle', '/NewPage');
//    window.location.href = "home.html";
//    return false;
// });
