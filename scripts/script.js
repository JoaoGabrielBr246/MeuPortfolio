document.addEventListener("DOMContentLoaded", function () {
    var githubImage = document.getElementById('githubImage');
    var linkedinImage = document.getElementById('assets/linkedin-icon.png')
    var instaImage = document.getElementById('assets/icon-insta.png')
    githubImage.src = 'assets/git-icon2.png';
});

function changeImageGit(element) {
    element.querySelector('img').src = 'assets/git-icon.png';
}

function restoreImageGit(element) {
    element.querySelector('img').src = 'assets/git-icon2.png';
}

function changeImageLinkedin(element) {
    element.querySelector('img').src = 'assets/linkedin-icon2.png';
}

function restoreImageLinkedin(element) {
    element.querySelector('img').src = 'assets/linkedin-icon.png';
}

function changeImageInsta(element) {
    element.querySelector('img').src = 'assets/icon-insta2.png';
}

function restoreImageInsta(element) {
    element.querySelector('img').src = 'assets/icon-insta.png';
}