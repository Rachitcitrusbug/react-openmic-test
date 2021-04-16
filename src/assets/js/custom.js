/* global jQuery, $, WOW */
$(document).ready(function () {
  new WOW().init();
});

/* Set navigation */

function openNav() {
  $("#mySidenav").addClass("width80");
  $("#nav-res").addClass("opacityon");
  $(".cd-shadow-layer").addClass("displayblock");

  // document.getElementById("mySidenav").style.width = "80%";
  // document.getElementById("nav-res").style.opacity = "1";
  // document.getElementById("cd-shadow-layer").style.display = "block";
}

function closeNav() {
  // document.getElementById("mySidenav").style.width = "0";
  // document.getElementById("nav-res").style.opacity = "0";
  // document.getElementById("cd-shadow-layer").style.display = "none";

  $("#mySidenav").removeClass("width80");
  $("#nav-res").removeClass("opacityon");
  $(".cd-shadow-layer").removeClass("displayblock");
}

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

$(document).ready(function () {
  $(".cd-shadow-layer").click(function () {
    closeNav();
  });
});

/* end of navigation */

$(document).ready(function () {
  $("#toggle-view").click(function () {
    var elem = $("#toggle-view").text();
    if (elem == "View Other week days") {
      $("#toggle-view").text("Hide Other week days");
      $("#other-days").show();
    } else {
      $("#toggle-view").text("View Other week days");
      $("#other-days").hide();
    }
  });
});

// Get the elements with class="column"
var elements = document.getElementsByClassName("grid-list");

// var asdd = document.getElementsByClassName("grid-add");

// Declare a loop variable

var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    // elements[i].style.width = "100%";
    elements[i].setAttribute("class", "grid-list col-lg-3 col-md-6 col-sm-6");
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    // elements[i].style.width = "50%";
    elements[i].setAttribute(
      "class",
      "grid-list col-lg-3 col-md-12 col-sm-6 col-lg-12 list-view"
    );
  }
}

// add active class in view btn

$(document).ready(function () {
  $(".listView").click(function () {
    $(".gridView").removeClass("active");
    $(this).addClass("active");
  });
  $(".gridView").click(function () {
    $(".listView").removeClass("active");
    $(this).addClass("active");
  });
});

// add banners added class

$(".listView").click(function () {
  $(".grid-bg-none").parent().addClass("col-lg-6");
});

// passwiord view hide jquery

$(".toggle-password").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

// pill tab active

$(".nav-tabs li a").click(function () {
  $(".nav-tabs li").removeClass("active");
  $(this).parent().addClass("active");
});

// accordian

$(document).ready(function () {
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this)
      .prev(".card-header")
      .find(".fa")
      .addClass("fa-minus")
      .removeClass("fa-plus");
    $(this).prev(".card-header").parent().addClass("active");
  });

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(this).prev(".card-header").parent().addClass("active");
    })
    .on("hide.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this).prev(".card-header").parent().removeClass("active");
    });
});
