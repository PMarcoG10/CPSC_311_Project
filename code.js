/*This functions changes the image when the button is pressed*/
function ChangeImg() {
    var image = document.getElementById("cooked_toast");
    if (image.src.match("images/toast.jpg")) {
        image.src = "images/burnt_toast.jpg"
    } else {
        image.src = "images/toast.jpg"
    }
}