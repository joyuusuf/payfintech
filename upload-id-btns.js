document.addEventListener('DOMContentLoaded', function() {

    const backImage = document.querySelector('.id-back-template');
    const attachButton = document.querySelector('.attach-btn');
    const proceedButton = document.querySelector('.proceed-btn');
    const imageUploadInput = document.getElementById('image-upload');
    const attachBtnsContainer = document.querySelector('.attach-btns');
    let isImageUploaded = false;


    function handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {

                backImage.src = e.target.result;
                isImageUploaded = true;
                attachButton.style.display = 'none';
                attachBtnsContainer.style.display = 'flex';
                proceedButton.disabled = false;
            };
            reader.readAsDataURL(file);
        }
    }

    backImage.addEventListener('click', function() {
        if (!isImageUploaded) {
            imageUploadInput.click();
        } else {

            imageUploadInput.click();
        }
    });


    imageUploadInput.addEventListener('change', handleImageUpload);


    attachButton.addEventListener('click', function() {
        imageUploadInput.click();
    });
    proceedButton.addEventListener('click', function() {
        if (isImageUploaded) {
            window.location.href = 'videoselfie.html';
        } else {

        }
    });
});



// document.addEventListener('DOMContentLoaded', function() {

//     const backImage = document.querySelector('.id-back-template');
//     const attachButton = document.querySelector('.attach-btn');
//     const proceedButton = document.querySelector('.proceed-btn');
//     const imageUploadInput = document.getElementById('image-upload');
//     const attachBtnsContainer = document.querySelector('.attach-btns');
//     let isImageUploaded = false;


//     function handleImageUpload(event) {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function(e) {

//                 backImage.src = e.target.result;
//                 isImageUploaded = true;  
//                 proceedButton.disabled = false;  
//             };
//             reader.readAsDataURL(file); 
//         }
//     }

//     // Click event on the image to trigger file upload
//     backImage.addEventListener('click', function() {
//         if (!isImageUploaded) {
//             imageUploadInput.click();  // Trigger the file input
//         }
//     });

//     imageUploadInput.addEventListener('change', handleImageUpload);


//     attachButton.addEventListener('click', function() {
//         imageUploadInput.click();  
//     });


//     proceedButton.addEventListener('click', function() {
//         if (isImageUploaded) {
//             window.location.href = 'videoselfie.html';  
//         } else {
//             alert('Please upload an image before proceeding.');
//         }
//     });
// });