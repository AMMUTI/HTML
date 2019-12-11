
var turn= document.getElementById("turn");
var box=document.querySelectorAll("#all div");
xo=0;
for(i=0;i<box.length;i++)
{
box[i].onclick=function()
{
 if(this.innerHTML=="")
 {
   if(xo==0)
   {
    this.innerHTML="X";
    turn.innerHTML="O Turn"
    xo=1;
    check();
  }
  else {
    this.innerHTML="O";
    turn.innerHTML="X Turn"
    xo=0;
    check();
  }
 }

};
}
function newgame()
{
  window.location = "home.html";
}
function reset()
{ val=0;
  for(i=0;i<box.length;i++)
  box[i].innerHTML="";
  if(xo==0)
  turn.innerHTML="X's Turn";
  else {
      turn.innerHTML="O's Turn";
  }
}
var val=0;
function check()
{
  var b1 = document.getElementById("b1"), b2 = document.getElementById("b2"), b3 = document.getElementById("b3"),
      b4 = document.getElementById("b4"), b5=document.getElementById("b5"), b6=document.getElementById("b6"),
      b7 = document.getElementById("b7"), b8=document.getElementById("b8"), b9=document.getElementById("b9");

      if(b1.innerHTML!=""&& b1.innerHTML==b2.innerHTML&&b1.innerHTML==b3.innerHTML)
      {
        turn.innerHTML=b1.innerHTML+" won !!";
       alert(b1.innerHTML+" won !!");
       val=1;
      won(b1);
    }

      if(b1.innerHTML!=""&& b1.innerHTML==b4.innerHTML&&b1.innerHTML==b7.innerHTML)
      {turn.innerHTML=b1.innerHTML+" won !!";
      alert(b1.innerHTML+ " won !!");
      val=1;
      won(b1);
      }

      if(b1.innerHTML!=""&& b1.innerHTML==b5.innerHTML&&b1.innerHTML==b9.innerHTML)
      {turn.innerHTML=b1.innerHTML+" won !!";
      alert(b1.innerHTML+ " won !!");
      val=1;
      won(b1);
      }

      if(b2.innerHTML!=""&& b2.innerHTML==b5.innerHTML&&b2.innerHTML==b8.innerHTML)
      {turn.innerHTML=b2.innerHTML+" won !!";
      alert(b2.innerHTML+ " won !!");
      val=1;
      won(b2);
      }

      if(b3.innerHTML!=""&& b3.innerHTML==b6.innerHTML&&b3.innerHTML==b9.innerHTML)
      {turn.innerHTML=b3.innerHTML+" won !!";
      alert(b3.innerHTML+ " won !!");
      val=1;
      won(b3);
     }

      if(b3.innerHTML!=""&& b3.innerHTML==b5.innerHTML&&b3.innerHTML==b7.innerHTML)
      {turn.innerHTML=b3.innerHTML+" won !!";
      alert(b3.innerHTML+ " won !!");
      val=1;
      won(b3);
      }

      if(b4.innerHTML!=""&& b4.innerHTML==b5.innerHTML&&b5.innerHTML==b6.innerHTML)
      {turn.innerHTML=b4.innerHTML+" won !!";
      alert(b4.innerHTML+ " won !!");
      val=1;
      won(b4);
      }

      if(b7.innerHTML!=""&& b7.innerHTML==b8.innerHTML&&b8.innerHTML==b9.innerHTML)
      {turn.innerHTML=b7.innerHTML+" won !!";
      alert(b7.innerHTML+ " won !!");
      val=1;
      won(b7);
      }
      if(b1.innerHTML!=""&&b2.innerHTML!=""&&b3.innerHTML!=""&&b4.innerHTML!=""&&b5.innerHTML!=""&&b6.innerHTML!=""&&b7.innerHTML!=""&&b8.innerHTML!=""&&b9.innerHTML!=""&&val==0)
      {
        tie();
        alert("tie")
      }

}
var countx=0;
var county=0;
var count=0;
var x=document.getElementById("x")
function won(b1,b2,b3)
{

  if(b1.innerHTML=="X"){
    countx++;
  x.innerHTML=("x won : "+countx);}
  else {
    county++;
    document.getElementById("O").innerHTML=("O won : "+county);
  }
  }
  function tie()
  {
    count++;
    document.getElementById("t").innerHTML=("Tie : "+count);
  }
