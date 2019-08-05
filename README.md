MPD project for KPMG Spring 2019 at CDTM.

This repository contains the CDTM / KPMG app that can be run natively on Android and IOS. This app is being developed by Christian Spier, Carla Pregel-Hoderlein, Jana Petry, Katharina Brenner and Klaudia Guzij in the course of a student-project hosted at CDTM.

Required development tools used in our project:

- node (https://nodejs.org/en/)
- React-Native (https://facebook.github.io/react-native/docs/getting-started)
- MongoDB (https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
- MongoDB Compass (https://www.mongodb.com/download-center/compass)
- Visual Studio (https://code.visualstudio.com)

To run the overall setup follow the next steps:

1. Get Mongo DB running:
   In terminal:
   brew services start mongodb-community@4.0
   mongo

2. Open Backend repository in Visual Studio
   In terminal:
   update and install all necessary packages: npm install  
   Start server: nodemon start

3. Open Frontend repository in Visual Studio
   In terminal:
   Enter the app folder: cd cpoint
   Update and install all necessary packages: npm install
   Start running expo: npm start
   Open your simulator  
   Click on “Run iOS simulator” or “Run on Android device/emulator” (depending on in which type of computer you are working)
   In the simulator:
   Click through the screens
