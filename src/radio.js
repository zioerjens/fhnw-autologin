
chrome.runtime.onMessage.addListener((request, noop, noop2) => {
    chrome.tabs.create({
        active: true,
        url: 'radio.html'
    }, null);

    // if (request.command == "play") {
    //     audio.src = request.src;
    //     audio.play();
    // } else if (request.command == "pause") {
    //     audio.pause();
    // }
});