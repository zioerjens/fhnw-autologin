# FHNW / BFH Autologin Chrome Extension
This extension allowes you to automise your login into Moodle and Switch Auth.

## Setup

1. Download src folder of the plugin (clone repository for updates)
2. In your browser, go to: chrome://extensions
3. Enable developer mode
4. Click "load unpacked extension"
5. Choose the downloaded src folder
6. Et voilà, the plugin should be ready to use
7. Add your credentials to the plugin

## Supported Organisations
1. FHNW (input value "fhnw")
2. BFH (input value "bfh")

## Security

The credentials are stored unencrypted in the chrome storage. This storage is not vulnerable to attacks over the browser. You have to keep in mind though, that malware or users having access to your operating system can access the password there. However, this is also the case with any other autofill applications. You best have a different password for your FHNW account to the ones you have in any other system.
