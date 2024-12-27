document.getElementById('downloadBtn').addEventListener('click', function () {
    const urlInput = document.getElementById('urlInput').value.trim();

    // Validate input
    if (!urlInput) {
        alert('Please enter a valid URL');
        return;
    }

    // Simulate fetching a download link (replace this with actual API logic)
    const simulatedDownloadLink = 'https://example.com/download/story.mp4';

    // Display the result
    const resultDiv = document.getElementById('result');
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = simulatedDownloadLink;
    downloadLink.textContent = "Click to Download Story";
    resultDiv.classList.remove('hidden');
});
