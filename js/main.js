$(document).ready(function () {
  //Off Canvas Menu Slide
  $(".menu-toggle").click(function () {
    $("nav").toggleClass("nav-hide");
  });

  //Page Scroll To
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    let target = this.hash;
    let $target = $(target);

    $("html, body").animate(
      {
        scrollTop: $target.offset().top,
      },
      900,
      "swing",
      function () {
        window.location.hash = target;
      }
    );
  });
  // Extra Portfolio Gallery
  $(".show-more-btn").click(function () {
    $(".hidden-gallery").toggle("slow");
  });
});

// Hide #MagicMenu on on scroll down
let didScroll;
let lastScrollTop = 0;
let delta = 5;
let navbarHeight = $("#MagicMenu").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  let st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .MagicMenu-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $("#MagicMenu").fadeOut(500);
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $("#MagicMenu").fadeIn(500);
    }
  }
  lastScrollTop = st;
}
