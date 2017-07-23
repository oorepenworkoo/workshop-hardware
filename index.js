$(document).ready(function() {

    var linkHumidity = "http://158.108.165.223/data/groupZeedUp/Humidity";
    var linkPerson = "http://158.108.165.223/data/groupZeedUp/Person";
    var linkTemperature = "http://158.108.165.223/data/groupZeedUp/Temperature";
    var linkDoor = "http://158.108.165.223/data/groupZeedUp/DegreeOfDoor02";
    var linkLight = "http://158.108.165.223/data/groupZeedUp/LED02";
    var linkAir = "http://158.108.165.223/data/groupZeedUp/Air";

// คน ----------------------------------------------------------
    // อัพเดตข้อมูล จำนวนคน
    setInterval(function() {
        $.ajax( {
            url: linkPerson
        } ).done(function( data ) {
            var amount = data;
            console.log( amount );
            $('#personResult').text( amount );
        }).fail(function( data ) {
           console.log( "Failed please try again..." );
        });
    } , 1000 * 1);

// หลอดไฟ ----------------------------------------------------------
    // อัพเดตข้อมูล ไฟเปิดหรือปิด
    var lightIsOn = 0;
    lightFunction = function() {
        $.ajax({
            url: linkLight
        }).done(function(data) {
            if (lightIsOn === 1) {
                $('#light').text("On");
            }else {
                $('#light').text("Off");
            }
        }).fail(function(data) {
            console.log("fail");
        });
        }

    lightFunction();
    

    // เวลา ปุ่มเปิดไฟ ถูกกด
    $('#lightOn').click(function (data) {
        
        lightIsOn = 1;
        lightFunction();
        
    });

    // เวลา ปุ่มปิดไฟ ถูกกด
    $('#lightOff').click(function (data) {
        
        lightIsOn = 0;
        lightFunction();
        
    });

// ประตู ----------------------------------------------------------
    // อัพเดตข้อมูล ประตู
    var doorIsOpen = 0;
    doorFunction = function() {
        $.ajax( {
            url: linkDoor
        }).done(function(data) {
            if (doorIsOpen === 1) {
                $('#door').text("Open");
            }else {
                $('#door').text("Close");
            }
        }).fail(function(data) {
            console.log("fail");
        });
    }
    doorFunction();


    // เวลา ปุ่มเปิดประตู ถูกกด
    $('#openDoor').click(function (data) {

        doorIsOpen = 1;
        doorFunction();

    });


    // เวลา ปุ่มปิดประตู ถูกกด
    $('#closeDoor').click(function(data) {

        doorIsOpen = 0;
        doorFunction();

    });

// แอร์ ----------------------------------------------------------
    // อัพเดตข้อมูล แอร์
    var airIsOn = 0;
    airFunction = function() {
        $.ajax( {
            url: linkAir
        }).done(function(data) {
           if(airIsOn === 1) {
               $('#air').text("On");
           }else {
               $('#air').text("Off");
           }
        }).fail(function(data) {
            console.log("fail");
        });
    }
    airFunction();


    // เวลา ปุ่มเปิดแอร์ ถูกกด
    $('#onAir').click(function(data) {

        airIsOn = 1;
        airFunction();

    });


    // เวลา ปุ่มปิดแอร์ ถูกปเิด
    $('#offAir').click(function(data) {

        airIsOn = 0;
        airFunction();

    });

// ความเข้มแสง ----------------------------------------------------------

    var linkSunlight="http://158.108.165.223/data/groupZeedUp/Light";
  setInterval(function(){
    $.ajax({
      url : linkSunlight
    }).done(function(data){
      var light = data;
      if (data === 1) {
        var k = "Bright";
      console.log(k);
      $('#sunlightResult').text(k);
      } else {
        var s = "Dark";
      console.log(s);
        $('#sunlightResult').text(s);
      }
    }).fail(function(data){
      console.log("Failed please try again...");
    })
  },1000*1);


// อุณหภูมิ ----------------------------------------------------------
  setInterval(function(){

  $.ajax({
    url: linkTemperature
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