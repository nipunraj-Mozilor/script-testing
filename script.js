document.getElementById("showVideo").addEventListener("click", function () {
  var videoPopup = document.getElementById("videoPopup");

  // Create the YouTube iframe element
  var youtubeIframe = document.createElement("iframe");
  youtubeIframe.id = "youtubeIframe";
  youtubeIframe.width = "560";
  youtubeIframe.height = "315";
  youtubeIframe.src =
    "https://www.youtube.com/watch?v=RpC85RO0okA&ab_channel=T-Series";
  youtubeIframe.frameBorder = "0";
  youtubeIframe.allowFullscreen = true;

  videoPopup.appendChild(youtubeIframe);

  videoPopup.style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function () {
  var videoPopup = document.getElementById("videoPopup");
  var youtubeIframe = document.getElementById("youtubeIframe");
  videoPopup.removeChild(youtubeIframe);

  // Hide the popup
  videoPopup.style.display = "none";
});
