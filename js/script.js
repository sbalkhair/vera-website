const checkReplace = document.querySelector('.replace-me');
if (checkReplace != null) {
    const replace = new ReplaceMe(checkReplace);
}

function userScroll()
{
    var navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () =>
    {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark');
            navbar.classList.add('opacity-75');
            navbar.classList.add('border-bottom');
            navbar.classList.add('border-secondary');
            navbar.classList.add('navbar-sticky');
        } else {
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('opacity-75');
            navbar.classList.remove('border-bottom');
            navbar.classList.remove('border-secondary');
            navbar.classList.remove('navbar-sticky');
        }
    });
}

document.addEventListener("DOMContentLoaded", userScroll);

// video modal
const videoBtn = document.querySelector('.video-play-button');
const videoModel = document.querySelector('#video-modal');
const video = document.querySelector('#video');
let videoSource;

if (videoBtn != null) {
    videoBtn.addEventListener("click", () =>
    {
        videoSource = videoBtn.getAttribute("data-bs-src");
    });
}

if (videoModel != null) {
    videoModel.addEventListener("show.bs.modal", () =>
    {
        video.setAttribute('src', videoSource + "?autoplay=1;modestbranding=1;showInfo=0");
    });
    videoModel.addEventListener("hidden.bs.modal", () =>
    {
        video.setAttribute('src', videoSource);
    });
}
