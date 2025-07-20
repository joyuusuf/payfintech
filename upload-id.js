function initializeKYCUpload() {
    
    const idTemplateImage = document.querySelector('.id-template');
    const attachButton = document.querySelector('.right-section button:not(.attach-btns button)');
    const attachBtnsContainer = document.querySelector('.attach-btns');
    const proceedButton = document.querySelector('.proceed-btn');
    

    let isImageUploaded = false;
 
    attachBtnsContainer.style.display = 'none';

    
    idTemplateImage.addEventListener('click', () => {
        
        const inputFile = document.createElement('input');
        inputFile.type = 'file';
        inputFile.accept = 'image/*';

       
        inputFile.click();

      
        inputFile.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                
                const reader = new FileReader();
                reader.onload = (e) => {
                    
                    idTemplateImage.src = e.target.result;

                    isImageUploaded = true;

                    attachButton.style.display = 'none';

                
                    attachBtnsContainer.style.display = 'flex'; 
                };
                reader.readAsDataURL(file);
            }
        });
    });

    
    attachButton.addEventListener('click', () => {
    
        if (isImageUploaded) {
            attachBtnsContainer.style.display = 'flex';
        }
    });

    
    const attachFileBtn = document.querySelector('.attach-btn');
    attachFileBtn.addEventListener('click', () => {
    
        const inputFile = document.createElement('input');
        inputFile.type = 'file';
        inputFile.accept = 'image/*';
        inputFile.click();

        
        inputFile.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
        
                const reader = new FileReader();
                reader.onload = (e) => {
                    
                    idTemplateImage.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    });

    proceedButton.addEventListener('click', () => {

        if (isImageUploaded) {
            window.location.href = "upload-id-btns.html";
        } else {
        
        }
    });
}

document.addEventListener('DOMContentLoaded', initializeKYCUpload);
