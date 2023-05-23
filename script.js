function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
        if (x[i].style.display === "block" && x[i].id === menuName) {

            x[i].style.display = "none";
            evt.currentTarget.classList.remove("w3-light-grey");
            return;
        } else {
            x[i].style.display = "none";
        }
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].classList.remove("w3-light-grey");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.classList.add("w3-light-grey");
}


document.getElementById("date").innerHTML = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('img');

    images.forEach(function(image) {
        image.addEventListener('click', function() {
            var fullscreenImage = document.createElement('div');
            fullscreenImage.className = 'fullscreen-image';

            var img = document.createElement('img');
            img.src = this.src;

            fullscreenImage.appendChild(img);
            document.body.appendChild(fullscreenImage);

            fullscreenImage.addEventListener('click', function() {
                document.body.removeChild(this);
            });
        });
    });
});