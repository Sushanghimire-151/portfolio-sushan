$(function () {
  /********************************************
   * Loader
   ********************************************/
  // let unblurTime = setInterval(unblur, 25);
  // let loadTime = 0;
  // var loadText = $(".load-text");
  // var blurContainer = $(".blur-container");
  // $("body").css("overflow", "hidden");

  // function unblur() {
  //   loadTime++;

  //   if (loadTime > 99) {
  //     clearInterval(unblurTime);
  //     $(".loader").css("z-index", 0);
  //     $("body").css("overflow", "auto");
  //   }

  //   // console.log(loadTime);

  //   loadText.html(loadTime + "%");
  //   loadText.css("opacity", scale(loadTime, 0, 100, 1, 0));
  //   var blurOpacity = scale(loadTime, 0, 100, 30, 0);
  //   console.log(blurOpacity);
  //   blurContainer.css("filter", `blur(${blurOpacity}px)`);
  // }

  // const scale = (num, in_min, in_max, out_min, out_max) => {
  //   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  // };

  /********************************************
   * Console log if everything works fine
   ********************************************/
  console.log("Website loaded successfully!");
});
