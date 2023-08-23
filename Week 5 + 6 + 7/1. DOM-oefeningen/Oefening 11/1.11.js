document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll("img");
    let caption = document.getElementById("bijschrift");
    let currentImage = null;

    function toggleSizeAndCaption(image, altText) {
        if (image.style.width === "100px") {
            if (currentImage !== null) {
                currentImage.style.width = "100px";
                caption.textContent = "";
            }

            image.style.width = "200px";
            caption.textContent = altText.toUpperCase();
            currentImage = image;
        } else {
            image.style.width = "100px";
            caption.textContent = "";
            currentImage = null;
        }
    }

    for (i = 0; i < images.length; i++) {
        images[i].addEventListener("dblclick", function (event) {
            toggleSizeAndCaption(event.target, event.target.alt);
        });

        images[i].addEventListener("click", function (event) {
            toggleSizeAndCaption(event.target, event.target.alt);
        });
    }
});


//eventueel met hoofdletter:
// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
//
// function toggleSizeAndCaption(image, altText) {
//     var capitalizedAlt = capitalizeFirstLetter(altText);
//
//     if (image.style.width === "100px") {
//         if (currentImage !== null) {
//             currentImage.style.width = "100px";
//             caption.textContent = "";
//         }
//
//         image.style.width = "200px";
//         caption.textContent = capitalizedAlt;
//         currentImage = image;
//     } else {
//         image.style.width = "100px";
//         caption.textContent = "";
//         currentImage = null;
//     }
// }




