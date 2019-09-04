function handleFiles() {
    const img = document.getElementById('image-upload').files[0];
    const toShowImage = new FileReader();

    if(img) {
        toShowImage.readAsDataURL(img);

        toShowImage.onloadend = function() {
            document.getElementById('image').src = toShowImage.result;
        }
    }
}

handleFiles();