$(document).ready(function(){
  var link ="http://158.108.165.223/data/groupZeedUpTemperature";

setInterval(function(){

  $.ajax({
    url: link
  }).done(function(data){
    var C = data;
    var R = data*4/5;
    var K = data*1+273;
    var F = data*9/5+32;
    console.log(C);
    console.log(R);
    console.log(K);
    console.log(F);
    $('#TempC').text(C);
    $('#TempR').text(R);
    $('#TempK').text(K);
    $('#TempF').text(F);
  }).fail(function(data){
    console.log("Failed please try again...");
  })
},1000*1);
});
