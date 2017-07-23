$(document).ready(function() {

    var linkPerson = "http://158.108.165.223/data/chat/groupZeedUpPerson";

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


});
