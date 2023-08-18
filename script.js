const fullscreenButton = document.getElementById("fullscreenButton");
const fullscreenContainer = document.querySelector(".fullscreen-container");

let isFullscreen = false;

fullscreenButton.addEventListener("click", () => {
    if (!isFullscreen) {
        if (fullscreenContainer.requestFullscreen) {
            fullscreenContainer.requestFullscreen();
        } else if (fullscreenContainer.mozRequestFullScreen) {
            fullscreenContainer.mozRequestFullScreen();
        } else if (fullscreenContainer.webkitRequestFullscreen) {
            fullscreenContainer.webkitRequestFullscreen();
        } else if (fullscreenContainer.msRequestFullscreen) {
            fullscreenContainer.msRequestFullscreen();
        }
        
        fullscreenButton.innerText = "Pencere Moduna Dön";
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        
        fullscreenButton.innerText = "Tam Ekran Modu";
    }
    
    isFullscreen = !isFullscreen;
});
