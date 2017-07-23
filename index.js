$(document).ready(function() {

    var linkPerson = "http://158.108.165.223/data/chat/groupZeedUpPerson";
    var linkTemperature = "http://158.108.165.223/data/chat/groupZeedUpTemperature";
    var linkDoor = "http://158.108.165.223/data/chat/groupZeedUpDoor";
    var linkLight = "http://158.108.165.223/data/chat/groupZeedUpLight";
    var linkAir = "http://158.108.165.223/data/chat/groupZeedUpAir";

    

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

    var lightIsOn = false;
    lightFunction = function() {
        $.ajax({
            url: linkLight
        }).done(function(data) {
            if (lightIsOn === true) {
                $('#light').text("On");
            }else {
                $('#light').text("Off");
            }
        }).fail(function(data) {
            console.log("fail");
        });
        }

    lightFunction();
    

    $('#lightOn').click(function (data) {
        
        lightIsOn = true;
        lightFunction();
        
    });

    $('#lightOff').click(function (data) {
        
        lightIsOn = false;
        lightFunction();
        
    });

    var doorIsOpen = false;
    doorFunction = function() {
        $.ajax( {
            url: linkDoor
        }).done(function(data) {
            if (doorIsOpen === true) {
                $('#door').text("Open");
            }else {
                $('#door').text("Close");
            }
        }).fail(function(data) {
            console.log("fail");
        });
    }
    doorFunction();

    $('#openDoor').click(function (data) {

        doorIsOpen = true;
        doorFunction();

    });

    $('#closeDoor').click(function(data) {

        doorIsOpen = false;
        doorFunction();

    });

    var airIsOn = false;
    airFunction = function() {
        $.ajax( {
            url: linkAir
        }).done(function(data) {
           if(airIsOn === true) {
               $('#air').text("On");
           }else {
               $('#air').text("Off");
           }
        }).fail(function(data) {
            console.log("fail");
        });
    }
    airFunction();

    $('#onAir').click(function(data) {

        airIsOn = true;
        airFunction();

    });

    $('#offAir').click(function(data) {

        airIsOn = false;
        airFunction();

    });

});