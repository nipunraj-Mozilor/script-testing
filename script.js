document.getElementById("showVideo").addEventListener("click", function () {
  var videoPopup = document.getElementById("videoPopup");
  var youtubeIframe = document.getElementById("youtubeIframe");

  // Set the YouTube video URL
  var videoURL = "https://www.youtube.com/embed/VIDEO_ID";
  youtubeIframe.src = videoURL;

  // Show the popup
  videoPopup.style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function () {
  var videoPopup = document.getElementById("videoPopup");
  var youtubeIframe = document.getElementById("youtubeIframe");

  // Clear the video URL
  youtubeIframe.src = "";

  // Hide the popup
  videoPopup.style.display = "none";
});
