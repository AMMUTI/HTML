$(function(){
      $("#permission").hide() // try to hide google navigation bar
   });
  $("#but").click(function(e) {
    if(testEmailAddress($("#email").val())) {
        $("#result").text(" ");
    } else {
        $("#result").text("Is not valid email");
    }
    //check name
    if(checkname($("#name").val())) {
        $("#n").text(" ");
    } else {
        $("#n").text("Field is required");
    }

    if(checkpass($("#name").val())){
      document.getElementById('p').innerHTML = 'password must contain 8 charcters';
    }
    if(checkdate($("#dd").val())){
      document.getElementById('re').innerHTML = 'date should be select';
    }


  })
  function checkdate(value) {
    if(value.length<=0)
    return true;


  }
  // check the password
  function checkpass(value) {
    var v=value;
    if(v.length<=0)return true;
    else {
      return false;
    }

  }
  // when name is empty after on click print Field is required
  $("#name").focusout(function() {
      var v=$(this).val();
      var l=v.length;
      if(v<1){
            $("#n").html("Field is required")
             }
        else
        {
          $("#n").html("")
        }
  })





  function testEmailAddress(emailToTest) {

     var atSymbol = emailToTest.indexOf("@");
     if(atSymbol < 1) return false;

     var dot = emailToTest.indexOf(".");
     if(dot <= atSymbol + 2) return false;


     if (dot == emailToTest.length - 1) return false;

     return true;
  }

function checkname(value) {
  var v=value;
  if(v.length>0)return true;
  else {
    return false;
  }

}

function pass()
{
  document.getElementById('p').innerHTML = ' ';
var pass = $('#pswd').val();
console.log(pass);
var l = pass.length;
if(l<8){
    document.getElementById('p').innerHTML = 'password must contain 8 charcters';
    

}
if(l==8){

}


}
function f() {
  document.getElementById('p').innerHTML = ' ';
}
function cpass(){
var pswd = $('#pswd').val();
var cpswd = $('#cpswd').val();
if(pswd!=cpswd)
{
    document.getElementById('rp').innerHTML = 'password has no match';

}
else {
document.getElementById('rp').innerHTML = ' ';
}
}

function df()
{
    var dt = $('#dd').val();
    console.log(dt);
    var year = Number(dt.substr(0, 4));
    var d = new Date();
    var y = d.getFullYear();
    var age = y - year;
    if(age<18)
    {
        document.getElementById('er4').innerHTML = 'you are under 18';
        $("#permission").show()
    }
}
function key(){

  var len= $('#t').val();
  var l=len.length;
  var leng=140-l;
    document.getElementById('c').innerHTML = 'you have ' +leng+ ' more';
    if(leng==140)
    {
      $('#t').stop()
    }
}
