# Music Fundamentals Chrome Extension

This is a companion extension for the [musictheoryportal](http://musictheoryportal.com/) web app. It provides the token authentication interface as a simple dropdown menu from any web page. 

This extension is designed to help instructors quickly authenticate user submitted tokens from an independent learning managemnt system (LMS) without the need to visit the main app website for each authentication request. 

___

## Installation

The following will guide you through the steps to install this extension on your browser (Google Chrome used in this example). 

1. clone and cd into this repository 

```
$ git clone git@github.com:QED0711/music-fundamentals-extension.git
$ cd music-fundamentals-extension
```

2. Install dependencies

```
$ npm install
```

3. Build the extension package

```
$ npm run build
```

This last command will create a new folder called `build` in the main project directory.

4. Go to Google Chrome -> Settings -> Extensions -> Load Unpacked. Once there, navigate to the newly generated `build` folder in the project directory, and click okay. 

You should now see a new icon in your extensions. Clicking on it will show the authentication page from the [musictheoryportal](http://musictheoryportal.com/) app. Paste a user submitted token into the main text field as you normally would to authenticate it. 