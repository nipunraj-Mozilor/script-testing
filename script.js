// document.getElementById("showVideo").addEventListener("click", function () {
//   var videoPopup = document.getElementById("videoPopup");

//   // Create the YouTube iframe element
//   var youtubeIframe = document.createElement("iframe");
//   youtubeIframe.id = "youtubeIframe";
//   youtubeIframe.width = "560";
//   youtubeIframe.height = "315";
//   youtubeIframe.src =
//     "https://www.youtube.com/embed/RpC85RO0okA?si=eE_QDkqMi2HPv595";
//   youtubeIframe.frameBorder = "0";
//   youtubeIframe.allowFullscreen = true;

//   videoPopup.appendChild(youtubeIframe);

//   videoPopup.style.display = "block";
// });

// document.getElementById("closePopup").addEventListener("click", function () {
//   var videoPopup = document.getElementById("videoPopup");
//   var youtubeIframe = document.getElementById("youtubeIframe");
//   videoPopup.removeChild(youtubeIframe);

//   // Hide the popup
//   videoPopup.style.display = "none";
// });

document.getElementById("showVideo").addEventListener("click", function () {
  var videoModal = document.getElementById("videoModal");
  var youtubeIframe = document.getElementById("youtubeIframe");

  // Set the YouTube video URL
  var videoURL =
    "https://www.youtube.com/embed/RpC85RO0okA?si=eE_QDkqMi2HPv595";
  youtubeIframe.src = videoURL;

  // Show the modal
  videoModal.style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", function () {
  var videoModal = document.getElementById("videoModal");
  var youtubeIframe = document.getElementById("youtubeIframe");

  // Clear the video URL
  youtubeIframe.src = "";

  // Hide the modal
  videoModal.style.display = "none";
});
