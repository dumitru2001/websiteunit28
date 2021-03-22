let anchors = document.querySelectorAll('figcaption a');
let links = [...anchors];

for (let i=0; i<links.length; i++) {
    links[i].onclick = handler;
}

function handler(e) {
    e.preventDefault(); // 1
    let videotarget = this.getAttribute("href"); // 2
    let filename = videotarget.substr(0, videotarget.lastIndexOf('.')); // 3
    let video = document.getElementById("video"); // 4
    video.removeAttribute("poster"); // 4
    let source = document.querySelectorAll("#video_player video source"); // 5
    source[0].src = filename + ".mp4"; // 6
    source[1].src = filename + ".webm"; // 6
    video.load(); // 7
    video.play(); // 8
}

// Event handler for keyboard navigation
window.addEventListener('keydown', (e) => {
    switch (e.which) {
        case 32:  // 1
        case 13:  // 1
            e.preventDefault();
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
            break;

        case 37:  // 2
            skip(-5);
            break;

        case 39:  // 3
            skip(5);
            break;
    }

});

function skip(value) {
    video.currentTime += value;
}

function openNews(evt, newsName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activity", "");
  }
  document.getElementById(newsName).style.display = "block";
  evt.currentTarget.className += " activity";
}
