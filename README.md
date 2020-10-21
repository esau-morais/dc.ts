# Discord Clone

![Discord](https://blog.br.uptodown.com/files/2017/12/discord-app-featured-1280x720.jpg)

## Goals



## Buit with



## How do I start?

1. Fork this project

![Forking the project](https://camo.githubusercontent.com/6f03010c651d060f8b7cfc17da7098c1757c4ead/68747470733a2f2f6669727374636f6e747269627574696f6e732e6769746875622e696f2f6173736574732f526561646d652f666f726b2e706e67)

2. Clone the forked repository

    `git clone https://github.com/user/discord-clone` (if you use `git`)

    or 

    `gh repo clone https://github.com/user/discord-clone` (if you use `gh` cli)

3. Install the dependencies

    `npm install` (if you use `npm`)

    or

    `yarn` (if you use   `yarn`)

-----

⚠️ Before you start, you'll need to create a firebase project and set:

- Firestore
- Google authentication

_[See here](#how-to-setup-your-firebase-project) how to setup firebase project_

-----

4. Start the project 

    `npm start` (if you `npm`)

    or

    `yarn start` (if you use `yarn`)

## How to setup your Firebase project

1. Go to [Firebase console](https://console.firebase.google.com/)

2. Click in add project button

![Add project button](https://res.cloudinary.com/emmorais/image/upload/v1603311708/Firebase/Screenshot_2020-10-21_Firebase_console_qfpkvm.png)

3. Insert the project name (as you want)

![Insert the project name (as you want)](https://res.cloudinary.com/emmorais/image/upload/v1603311796/Firebase/Screenshot_2020-10-21_Firebase_console_1_fjsenj.png)

4. Click to continue

5. Click in the settings icon, then click in the project settings

![Click in the settings icons](https://res.cloudinary.com/emmorais/image/upload/v1603311889/Firebase/Screenshot_2020-10-21_Discord_Clone_Discord_Clone_Console_do_Firebase_jhvyih.png)

6. Add a web app to the project and set a name

![Add a web app](https://res.cloudinary.com/emmorais/image/upload/v1603312044/Firebase/Screenshot_2020-10-21_Discord_Clone_Configura%C3%A7%C3%B5es_Console_do_Firebase_qgnosu.png)

7. After creating, copy the settings and set to the `.env` based on the `[.env_sample](./.env_sample)`

8. Create google authentication

![Google authentication](https://res.cloudinary.com/emmorais/image/upload/v1603312235/Firebase/Screenshot_2020-10-21_Discord_Clone_Cloud_Firestore_Console_do_Firebase_1_aovrcl.png)

![Google authentication](https://cloud.google.com/appengine/docs/images/firebase_auth_enable.png)

9. Create firestore and set the roles

![Firestore](https://res.cloudinary.com/emmorais/image/upload/v1603312235/Firebase/Screenshot_2020-10-21_Discord_Clone_Cloud_Firestore_Console_do_Firebase_dri1au.png)

![Firestore](https://res.cloudinary.com/emmorais/image/upload/v1603312242/Firebase/Screenshot_2020-10-21_Discord_Clone_Cloud_Firestore_Console_do_Firebase_2_wrxvwk.png)

----- 

[LICENSE](./LICENSE)
