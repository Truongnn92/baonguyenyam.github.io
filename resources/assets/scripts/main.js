    const BNICON = '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="174px" height="104.5px" viewBox="0 0 174 104.5" enable-background="new 0 0 174 104.5" xml:space="preserve"><path fill="#795E9D" d="M14,98c0,2.209-1.791,4-4,4l0,0c-2.209,0-4-1.791-4-4V6c0-2.209,1.791-4,4-4l0,0c2.209,0,4,1.791,4,4V98z"/><path fill="#795E9D" d="M56.667,98c0,2.209-1.791,4-4,4l0,0c-2.209,0-4-1.791-4-4V46c0-2.209,1.791-4,4-4l0,0c2.209,0,4,1.791,4,4V98z"/><path fill="#795E9D" d="M6,96c-2.209,0-4-1.791-4-4l0,0c0-2.209,1.791-4,4-4h52c2.209,0,4,1.791,4,4l0,0c0,2.209-1.791,4-4,4H6z"/><path fill="#795E9D" d="M6,56c-2.209,0-4-1.791-4-4l0,0c0-2.209,1.791-4,4-4h52c2.209,0,4,1.791,4,4l0,0c0,2.209-1.791,4-4,4H6z"/><path fill="#795E9D" d="M122.667,98c0,2.209-1.791,4-4,4l0,0c-2.209,0-4-1.791-4-4V46c0-2.209,1.791-4,4-4l0,0c2.209,0,4,1.791,4,4V98z"/><path fill="#795E9D" d="M82,98c0,2.209-1.791,4-4,4l0,0c-2.209,0-4-1.791-4-4V46c0-2.209,1.791-4,4-4l0,0c2.209,0,4,1.791,4,4V98z"/><path fill="#795E9D" d="M114.667,96c-2.209,0-4-1.791-4-4l0,0c0-2.209,1.791-4,4-4h52c2.209,0,4,1.791,4,4l0,0c0,2.209-1.791,4-4,4H114.667z"/><path fill="#795E9D" d="M72,56c-2.209,0-4-1.791-4-4l0,0c0-2.209,1.791-4,4-4h52c2.209,0,4,1.791,4,4l0,0c0,2.209-1.791,4-4,4H72z"/></svg>';
    const BNLOGO = '';
    const BNSIGN = '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="174px" height="104.5px" viewBox="0 0 174 104.5" enable-background="new 0 0 174 104.5" xml:space="preserve"><path fill="none" stroke="#000000" stroke-miterlimit="10" d="M2,101.944c0,0,31.333-16,32-55.667s0-13,0-13s-3,34-2,66.333c0,0-13.904-59.727-3.333-78.667c15.239-27.302,33.803,8.589,13.362,36.4c-1.021,1.39-5.235,5.185-7.922,6.215c-1.947,0.746-9.036,2.394-6.719,1.718c7.954-2.32,21.28-11.45,29.613-32.45s4-30.045,2.667-22.689c-1.333,7.356-3.333,35.59-0.667,47.531s0.667-5.842,0.667-13.842c0-8.307,0.637-18.651,1.667-7.667c1,10.667,1.667,15,1.667,1.333s0.333-12.216,0.5-5.883c0.123,4.677,4,12.667,4.667,7.667c0.667-5,3.056,1.773,3.167-5.117c0.167-10.383,3,8.333,2.333-1C73,23.827,74.167,14.444,75,4.827c0.738-8.512-5.977,26.481,1,31.333c4.481,3.117,6.001-2.076,6.001-12.41S77.436,24.191,80,28.16s12.667-2.667,47.333-10.333S158,14.493,158,14.493"/><path fill="none" stroke="#000000" stroke-miterlimit="10" d="M48.979,76.957c0,0,63.333-44.784,123-53.117"/></svg>';

    // READY ////////////////////////////////////////////
    $(document).ready(function() {

        // Welcome title App 
        console.log('%cBaoNguyen', 'font-size:50px;color:#fff;text-shadow:0 1px 0#ccc,0 2px 0 #c9c9c9 ,0 3px 0 #bbb ,0 4px 0 #b9b9b9 ,0 5px 0 #aaa ,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);');
        console.log('%c BN APP ' + '%c - Bao Nguyen App ', 'border-radius: 2px; padding: 3px; background: #795d9c; color: #FFF', 'color: #795d9c');

        $('[bn-icon]').html(BNICON);
        $('[bn-sign]').html(BNSIGN);

    });

    // LOAD ////////////////////////////////////////////
    $(window).load(function() {

    });

    // SCROLL ////////////////////////////////////////////
    $(window).scroll(function() {

    });

    // RESIZE ////////////////////////////////////////////
    $(window).resize(function() {

    });

    // ONTIME ////////////////////////////////////////////
    $(function() {

    });