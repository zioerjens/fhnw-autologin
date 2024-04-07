document.getElementById('radioButton').addEventListener('click', () => {
    chrome.runtime.sendMessage({ command: "play", src: "https://radio.garden/api/ara/content/listen/ZcDmIJPt/channel.mp3?r=1&17" });
});