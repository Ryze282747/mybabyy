$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var audio = new Audio("music2.mp3");
  audio.preload = "auto";

  envelope.click(function () {
    open();
    audio.play().catch(function(error) {
      console.log("Audio play failed:", error);
    });
  });

  btn_open.click(function () {
    open();
    audio.play().catch(function(error) {
      console.log("Audio play failed:", error);
    });
  });

  btn_reset.click(function () {
    close();
    audio.pause();
    audio.currentTime = 0;
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }

  function close() {
    envelope.addClass("close").removeClass("open");
  }
});
