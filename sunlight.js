$(document).ready(function(){
  var link="http://158.108.165.223/data/groupZeedUpSunlight";
  setInterval(function(){
    $.ajax({
      url : link
    }).done(function(data){
      var light=data;
      if (data === 1) {
        var k = "Dark";
      console.log(k);
      $('#sunlightResult').text(k);
      } else {
        var s = "Bright";
      console.log(s);
        $('#sunlightResult').text(s);
      }
    }).fail(function(data){
      console.log("Failed please try again...");
    })


  },1000*1)
});
