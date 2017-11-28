$(document).ready( function() {
    $('#nav-logo-enter').click(function(){
        $('nav').removeClass('nav-hide');
        $('nav').addClass('nav-show');
    });

    $('#nav-logo-exit').click(function(){
        $('nav').removeClass('nav-show');
        $('nav').addClass('nav-hide');
    });
    function shakeHeader() {
        var HTC = $('#header-text-content > h1#header-main-text');  // Grabbing Header Text Content from DOM
        if (HTC.hasClass('zoomIn')) {
            HTC.removeClass('zoomIn');
        }

        HTC.toggleClass('headShake');
    }

    function shakeDownloadButton() {
        var DB = $('#header-text-content > a#download-button');  // Grabbing Header Download Button from DOM
        if (DB.hasClass('zoomIn')) {
            DB.removeClass('zoomIn');
        }

        DB.toggleClass('bounce');
    }

    function shakeButton() {
        var CME = $('a#contact-me-email');  // Grabbing Contact me Button from DOM
        var PB = $('a#portfolio-button');  // Grabbing  Portfolio Button from DOM
        CME.toggleClass('tada');
        PB.toggleClass('tada');
    }

    function shakeButton2() {
        var DonateB = $('#donate-container');  // Grabbing Donate Container Button from DOM
        DonateB.toggleClass('rubberBand')
    }
    var shakeHeaderInterval = setInterval(shakeHeader, 5000);
    var shakeDownloadButtonInterval = setInterval(shakeDownloadButton, 2000);
    var shakeButton = setInterval(shakeButton, 4000);
    var shakeButton2 = setInterval(shakeButton2, 2000);
});