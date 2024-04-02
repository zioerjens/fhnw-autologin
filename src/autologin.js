async function login() {

    if (window.location.href == 'https://moodle.fhnw.ch/login/index.php') {
        if (document.getElementsByClassName('login-container').length != 0) {
            window.location.replace('https://moodle.fhnw.ch/auth/shibboleth/index.php');
        }
        return;
    }

    if (window.location.href.startsWith('https://fhnw.login.eduid.ch/idp/profile/SAML2/Redirect')
        || window.location.href.startsWith('https://login.eduid.ch/idp/profile/SAML2/Redirect')) {

        if (document.getElementsByClassName('input_error').length != 0) {
            return;
        }
        if (document.getElementById('username') && document.getElementById('username').value == '') {
            const username = await chrome.storage.sync.get('username');
            document.getElementById('username').value = username.username;
            if (!document.getElementById('password')) {
                document.getElementById('login-button').click();
            }
        }
        if (document.getElementById('password') && document.getElementById('password').value == '') {
            const password = await chrome.storage.sync.get('password');
            document.getElementById('password').value = password.password;
            document.getElementById('login-button').click();
        }
    }
}

login();