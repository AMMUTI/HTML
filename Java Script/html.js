//
// function compile()
// {
// var h=document.getElementById('htmle');
// var c=document.getElementById('csse');
// var j=document.getElementById('jse');
// var code=do
//
//
//         // $(document).ready(function(){
//         //     $('#htmle').keyup(function(){
//         //         $('#print').html($(this).val());
//         //     });
//         //     $('#csse').keyup(function(){
//         //         $('#print').css($(this).val());
//         //     });
//         // });
//         //



function compile() {

	var html = document.getElementById("html");
	var css = document.getElementById("css");
	var js = document.getElementById("js");
	var code = document.getElementById("code").contentWindow.document;

	 document.body.onkeyup = function(){
	    code.open();
		code.writeln(html.value+"<style>"+css.value+"</style>"+"<script>" + js.value + "</script>");
		code.close();
      };
    };

compile();
