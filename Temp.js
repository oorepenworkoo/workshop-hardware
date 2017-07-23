$(document).ready(function(){
  var link ="http://158.108.165.223/data/groupZeedUpTemperature";

setInterval(function(){

  $.ajax({
    url: link
  }).done(function(data){
    var C = data;
    var R = data*(4/5.0);
    var K = (data*1)+273;
    var F = (data*9.0)/5+32;
    console.log(C);
    console.log(R);
    console.log(K);
    console.log(F);
    $('#tempCelsiusResult').text( C );
    $('#tempRomerResult').text( R );
    $('#tempKelvinResult').text( K );
    $('#tempFahrenheitResult').text( F );
  }).fail(function(data){
    console.log("Failed please try again...");
  })
},1000*1);

});
