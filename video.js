// Select necessary elements
const selfieTemplate = document.querySelector('.selfie-template');
const videoElement = document.createElement('video');
let mediaStream = null;
let isRecording = false;

// Add styles to the video element to fit within the selfie-template
videoElement.style.position = "absolute";
videoElement.style.width = "100%";
videoElement.style.height = "100%";
videoElement.style.objectFit = "cover";
selfieTemplate.style.position = "relative";
selfieTemplate.appendChild(videoElement);

// Function to detect if the face is centered (simulated check)
const isFaceCentered = () => {
    // Simulate a face detection check; you can integrate real face detection like TensorFlow.js here.
    // For now, we'll assume the face is always centered after 1 second.
    return new Promise((resolve) => setTimeout(() => resolve(true), 1000));
};

// Start video recording
async function startRecording() {
    try {
        // Request user media
        mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoElement.srcObject = mediaStream;
        videoElement.play();

        // Wait until the face is detected as centered
        const faceDetected = await isFaceCentered();
        if (!faceDetected) {
            console.log("Face not detected in center.");
            return;
        }

        console.log("Face detected in center. Starting recording...");
        isRecording = true;

        // Record for 30 seconds
        setTimeout(() => stopRecording(), 30000);
    } catch (error) {
        console.error("Error accessing media devices:", error);
    }
}

// Stop video recording
function stopRecording() {
    if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop());
    }
    videoElement.srcObject = null;
    console.log("Recording stopped after 30 seconds.");
}

// Start recording when the page loads
window.addEventListener('DOMContentLoaded', () => {
    startRecording();
});

