var data = await chrome.storage.sync.get('password');
if (data) {
    document.getElementById('password').value = data.password;
}
document.getElementById('password').oninput = () => {
    const password = {
        password: document.getElementById('password').value
    };
    chrome.storage.sync.set(password);
}

data = await chrome.storage.sync.get('username');
if (data) {
    document.getElementById('username').value = data.username;
}
document.getElementById('username').oninput = () => {
    const username = {
        username: document.getElementById('username').value
    };
    chrome.storage.sync.set(username);
}

fetch("https://www.wiewarm.ch:443/api/v1/temperature.json/17")
    .then((response) => response.json())
    .then(body =>  {
        console.log(body);
        console.log(document.getElementById('aaretemp'));
        document.getElementById('aaretemp').innerHTML = `${body['52'].temp}°C`;
    });