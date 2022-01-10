// -----------------------------------------------------------
// Votre code ici
// -----------------------------------------------------------



$(function () {
  let widthScreen = $(".app-screen");
  widthScreen.css("width");
  //   console.log(widthScreen)
  let heightScreen = $(".app-screen").css("height");
  // console.log(heightScreen)

  for (let pixel = 0; pixel < 1024; pixel++) {
    widthScreen.append("<div></div>");
    // console.log(pixel);
    $("div").children().addClass("pixel").parent().removeClass("pixel");
  }

  $(".app-tools button").click(function () {
    $(".is-active").removeClass("is-active");
    $(this).addClass("is-active");
    var pixelColor = $(".is-active").css("background-color");

    // console.log(pixelColor)

    $(".pixel").click(function () {
      $(this).css("background-color", pixelColor);
    });
  });

  $("button").removeClass("pixel");
  $("h1").removeClass("pixel");
  $(".colorset-name").removeClass("pixel");

  $("#reset").click(function () {
    $(".pixel").css("background-color", "white");
  });

  $(".pixel").dblclick(function(){
    $(".pixel").css("background-color", "white")
  })
});

let exp = $('#export');
  exp.click(function(){
      domtoimage.toJpeg(document.getElementById('content'))
      .then(function(dataUrl){
          let link = document.createElement('a');
          link.download = 'image.jpeg';
          link.href = dataUrl;
          link.click();
          btnExport();
      });
  });
