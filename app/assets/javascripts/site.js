$( document ).ready(function() {

  var MYGLOBALS = function() {
    var globals = {
      splashHeight : $(window).height(),
    }
    return {
      getValue : function(s) {
        return globals[s];
      }
    }
  }();



  // configure splash page height
  $splash = $('section#splash');
  $slide = $('.slide');
  splashHeight = MYGLOBALS.getValue('splashHeight');
  console.log("splashHeight, ", splashHeight);
  $splash.height(splashHeight);
  $("#splash.parallax-window").css("max-height", splashHeight);
  $('#splash > .parallax-background').css("height", (splashHeight*1.2)+"px");
  $('#splash > .parallax-background').css("top", "-" + ((splashHeight*1.2)/9)+"px");

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

    console.log("curTop window scrolltop: ", curTop);


    if ($('.parallax-window').length > 0) {
      parallax();
    }

    if(curTop <= (splashHeight - 96)) {
      if($('#side-nav').css("top", splashHeight + "px")) {

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
      $("li#phone").css("border-top", "1px solid silver");
    }
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
    notSelected.children("li").addClass('unactive');

    selected.removeClass('unactive');
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

    console.log("plxWindowTopToPageTop, windowTopToPageTop, plxWindowTopToWindowTop", plxWindowTopToPageTop, windowTopToPageTop, plxWindowTopToWindowTop);
    console.log("plxBackgroundTopToPageTop, windowInnerHeight, plxWindowTopToWindowTop, plxBackgroundTopToWindowBottom", plxBackgroundTopToPageTop, windowInnerHeight, plxBackgroundTopToWindowTop, plxBackgroundTopToWindowBottom);


    var plxSpeed = 0.25;

    plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
  }

  $('nav a[href^="#' + window.location.href.split("#")[1] + '"]').children("li").trigger("click");

  // google map
  var infowindow, latlng, map, marker1, options;

  latlng = new google.maps.LatLng(37.6132591, -122.4047675);

  options = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    navigationControl: true,
    mapTypeControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    offsetWidth: true
  };

  map = new google.maps.Map(document.getElementById("google-map"), options);

  marker1 = new google.maps.Marker({
    position: latlng,
    map: map
  });

  google.maps.event.addListener(marker1, "click", function() {
    return infowindow.open(map, marker1);
  });

  infowindow = new google.maps.InfoWindow({
    content: "<div class=\"info\"><a href=\"https://www.google.com/maps/dir/''/otto's+appliance+service,+inc.,+el+camino+real,+millbrae,+ca/@37.613286,-122.4390378,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x808f77777340c3f5:0x8e9e9781e1a01fb4!2m2!1d-122.404705!2d37.613291\"><strong>Otto's Appliance Service, Inc.</strong></a><br/>1663 El Camino Real</div>"
  });

  infowindow.open(map, marker1);


});
