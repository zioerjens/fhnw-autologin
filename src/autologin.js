async function login() {
    let data = await chrome.storage.sync.get('organization');
    let organizationURLs = organizationsURLs[data.organization];
    if (window.location.href.startsWith(organizationURLs.LOGIN_URL)) {
        if (document.getElementsByClassName('login-container').length != 0 && data.organization === 'bfh') {

            // select organization if not already selected
            if (!document.getElementById('user_idp_iddtext').value.toLowerCase().startsWith(data.organization)) {
                var childrenArray = Array.from(document.getElementById('user_idp_iddlist').children);

                let r = childrenArray.find(child => child.textContent.toLowerCase().startsWith(data.organization))

                document.getElementById('user_idp_iddicon').click()
                r.click()
            }

            //click on button for bfh
            document.getElementById('wayf_submit_button').click();
        }
        return;
    }

    // redirect moodle login
    if (organizationURLs.MOODLE_REDIRECT_ORIGIN !== undefined
        && window.location.href.startsWith(organizationURLs.MOODLE_REDIRECT_ORIGIN)) {

        window.location.replace(organizationURLs.MOODLE_REDIRECT_TARGET);
    }

    // select organization for FHNW with WAYF
    if (organizationURLs.WAYF !== undefined && window.location.href.startsWith(organizationURLs.WAYF)) {

        // select organization if not already selected
        if (!document.getElementById('userIdPSelection_iddtext').value.toLowerCase().startsWith(data.organization)) {
            var childrenArray = Array.from(document.getElementById('userIdPSelection_iddlist').children);

            let r = childrenArray.find(child => child.textContent.toLowerCase().startsWith(data.organization))

            document.getElementById('userIdPSelection_iddicon').click()
            r.click()
        }

        document.querySelector('input[name="Select"]').click();
        return;
    }

    // login to switch
    if (window.location.href.startsWith(organizationURLs.SWITCH_URL)
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
            // only set password if its not null
            if (password.password) {
                document.getElementById('password').value = password.password;
                document.getElementById('login-button').click();
            }

        }
    }
}

const organizationsURLs = {
    bfh: {
        LOGIN_URL: 'https://moodle.bfh.ch/local/bfh_dual_login/',
        SWITCH_URL: 'https://bfh.login.eduid.ch/idp/profile/SAML2/Redirect'
    },
    fhnw: {
        WAYF: 'https://wayf.switch.ch/SWITCHaai/WAYF?',
        MOODLE_REDIRECT_ORIGIN: 'https://moodle.fhnw.ch/login/index.php',
        MOODLE_REDIRECT_TARGET: 'https://moodle.fhnw.ch/auth/shibboleth/index.php',
        SWITCH_URL: 'https://fhnw.login.eduid.ch/idp/profile/SAML2/Redirect'
    }
}

login();
