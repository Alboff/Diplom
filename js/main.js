$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $("nav").toggleClass("nav-hide");
  });

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

  $(".show-more-btn").click(function () {
    $(".hidden-gallery").toggle("slow");
  });
});

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

  if (Math.abs(lastScrollTop - st) <= delta) return;

  if (st > lastScrollTop && st > navbarHeight) {
    $("#MagicMenu").fadeOut(500);
  } else {
    if (st + $(window).height() < $(document).height()) {
      $("#MagicMenu").fadeIn(500);
    }
  }
  lastScrollTop = st;
}
