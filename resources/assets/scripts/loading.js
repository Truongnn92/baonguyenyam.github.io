window.onload = function() {
    setTimeout(function() {
        var loader = document.getElementsByClassName("loading")[0];
        loader.className = "loading animated fadeOut";
        setTimeout(function() {
            loader.style.display = "none"
        }, 1000)
    }, 1000)
}