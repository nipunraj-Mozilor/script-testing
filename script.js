const addButton = document.getElementById("addLinkButton");
const linkContainer = document.getElementById("linkContainer");

function appendYouTubeLink() {
  const link = prompt("https://youtu.be/scAibuB65TA?si=ARfoDSBZ_6tKfAcM");

  if (link) {
    const iframe = document.createElement("iframe");
    iframe.src = link;
    iframe.width = "560";
    iframe.height = "315";

    linkContainer.appendChild(iframe);
  }
}

// Add a click event listener to the button
addButton.addEventListener("click", appendYouTubeLink);
