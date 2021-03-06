$( document ).ready(function() {

  var MYGLOBALS = function() {
    var globals = {
      splashHeight : 450,
    }
    return {
      getValue : function(s) {
        return globals[s];
      }
    }
  }();


  // configure splash page height
  $splash = $('section#splash');
  $parallax_short = $('section#brands');
  $slide = $('.slide');
  splashHeight = MYGLOBALS.getValue('splashHeight');
  console.log("$splash: ", $splash);
  console.log("$parallax-short: ", $parallax_short);
  $splash.height(splashHeight);
  $("#splash.parallax-window").css("max-height", splashHeight);
  $('.parallax-background.splash').css("height", (splashHeight*1.2)+"px");
  $('.parallax-background.splash').css("top", "-" + ((splashHeight*1.2)/9)+"px");

  parallaxShortHeight = 300;
  $parallax_short.height(parallaxShortHeight);
  $("#brands.parallax-window").css("max-height", parallaxShortHeight);
  $('.parallax-background.short').css("height", (parallaxShortHeight*1.2)+"px");
  $('.parallax-background.short').css("top", "-" + ((parallaxShortHeight*1.2)/9)+"px");


  $('#side-nav').css("top", (splashHeight));
  $('#side-nav').css("opacity", 1);
  $('#side-nav-arrow').css("opacity", 1);


  if ($('.parallax-window').length > 0) {
    parallax();
  }

  $(window).scroll(function(e) {

    splashHeight = MYGLOBALS.getValue('splashHeight');
    var curTop = 0;
    curTop = $(window).scrollTop();

    if ($('.parallax-window').length > 0) {
      parallax();
    }

    if(curTop <= (splashHeight - 96)) {
      if($('#side-nav').css("top", splashHeight + "px")) {
        $("li#phone").css("border-top", "0px solid #999");
        difference = curTop;
        string="translateY(-" + difference + "px)";
        $("#side-nav").css({
          transform: string,
          MozTransform: string,
          WebkitTransform: string,
          msTransform: string
        });
      }
    }
    if(curTop > (splashHeight - 96)) {
      $("li#phone").css("border-top", "1px solid #999");
    }
  });

  $("#close-tooltip").click(function(e) {
    $("#tooltip-number").css("display", "none");
  });

  $("li#phone").click(function(e) {
    $("#tooltip-number").css("display", "flex");
  });

  $("nav li").click(function(e) {
    if(this.id != 'phone') {
      $("#tooltip-number").css("display", "none");
    }
    // when an li in the nav is clicked
    var selected = $(this);
    var all = $('nav a');
    var notSelected = all.not(selected.parent());

    notSelected.children("li").removeClass('active');
    notSelected.children("li").addClass('inactive');

    selected.removeClass('inactive');
    selected.addClass('active');

  });

  function parallax() {
    //grab window and background
    var win = $(".parallax-window");
    var back = $(".parallax-background");

    //calculate distance from top
    var plxBackground = $(".parallax-background");
    var plxWindow = $(".parallax-window");

    var plxWindowTopToPageTop = $(plxWindow).offset().top;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

    var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;

    // console.log("plxWindowTopToPageTop, windowTopToPageTop, plxWindowTopToWindowTop", plxWindowTopToPageTop, windowTopToPageTop, plxWindowTopToWindowTop);
    // console.log("plxBackgroundTopToPageTop, windowInnerHeight, plxWindowTopToWindowTop, plxBackgroundTopToWindowBottom", plxBackgroundTopToPageTop, windowInnerHeight, plxBackgroundTopToWindowTop, plxBackgroundTopToWindowBottom);


    var plxSpeed = 0.25;


    plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
  }

  $('nav a[href^="#' + window.location.href.split("#")[1] + '"]').children("li").trigger("click");


  var googleMap = (function () {
    var myLatlng = new google.maps.LatLng(37.6132591, -122.4047675),
    mapCenter = new google.maps.LatLng(37.6132591, -122.4047675),
    mapCanvas = document.getElementById('google-map'),
    mapOptions = {
      center: mapCenter,
      zoom: 13,
      scrollwheel: false,
      draggable: true,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    },
    map = new google.maps.Map(mapCanvas, mapOptions),
    contentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Otto\'s Appliance Service, Inc.</h1>'+
    '<div id="bodyContent"'+
    '<p>1661 El Camino Real</p>'+
    '</div>'+
    '</div>',
    infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 300
    }),
    marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Otto\'s Appliance Service, Inc.'
    });

    return {
      init: function () {
        map.set('styles', [{
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [
          { hue: '#ffff00' },
          { saturation: 30 },
          { lightness: 10}
          ]}
        ]);
        google.maps.event.addListener(marker, 'click', function () {
          infowindow.open(map,marker);
        });
      }
    };
  }());

googleMap.init();



});
