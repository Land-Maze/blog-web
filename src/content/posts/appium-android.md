---
title: 'How to scrap data from android app'
description: 'How to scrap data from android app with appium and webdriverio. This tutorial is for beginners.'
image: 'https://appium.io/docs/en/2.1/assets/images/appium-logo-white.png'
tags: ['appium', 'webdriverio', 'android', 'scrapping']
date: 2023-10-22
---

# Setup

## First of all, we need to install appium server
<div class="post-text">

### It can be installed from pnpm or npm: <div class="copy-button" language="bash"></div>

```bash
$ pnpm add -g appium
```


### To check if it is installed, run:<div class="copy-button" language="bash"></div>
```bash
$ appium -v
```
</div>

<hr>

## Then driver must be installed
<div class="post-text">
Because my project was intend to scrap from android, I will use "uiautomator2".

<b>Before an installation, all environmental variables must be settled.</b>

### Write this (change value) in your <i>.zshrc</i> or <i>.bashrc</i> file:<div class="copy-button" language="bash"></div>
```bash
export ANDROID_SDK_ROOT="/Users/land_maze/Library/Android/sdk"
export JAVA_HOME="/opt/homebrew/opt/openjdk/"
```

ANDROID_SDK_ROOT is a path to your android sdk folder. It can be found in Android Studio -> Preferences -> Appearance & Behavior -> System Settings -> Android SDK -> Android SDK Location

JAVA_HOME is a path to your java home folder. 
### If you don't have java installed, you can install it with<div class="copy-button" language="bash"></div>
``` bash
brew install openjdk
```
Then you can find it with `whereis java` command.
After that, you can source your file with `source ~/.zshrc` or `source ~/.bashrc`.

Now you can install driver with appium driver install uiautomator2, and in result you should expect something like this:
```bash
$ appium driver install uiautomator2
...
...
Driver uiautomator2@2.29.3 successfully installed
- automationName: UiAutomator2
- platformNames: ["Android"]
```
</div>

<hr>

## Installing android emulator
<div class="post-text">

I used android emulator from Android Studio. It can be installed from [here](https://developer.android.com/studio).

After installation, you can create a new virtual device. I used Pixel 7 Pro with API 34 with arm64 architecture (I'm on M1). But you can use any device you want if API level is 30 or higher.
[How to create a virtual device](https://developer.android.com/studio/run/managing-avds)
</div>

<hr>

## Installing adb
<div class="post-text">

Adb is a tool that allows you to connect to your android device or emulator. It can be installed with brew install android-platform-tools.

After you installed, try to run adb devices command. If you see something like this:
bash
List of devices attached
emulator-5554 device


It means that you have successfully installed adb and connected to your emulator. 

And if there's no devices, check if your emulator is running.

</div>

# Creating a project

<div class="post-text">

### Create a new folder and run npm init command.

```bash
$ mkdir android-scrapper
$ cd android-scrapper
$ npm init -y
```

### Then install all dependencies:
```bash
$ npm install --save-dev webdriverio @types/node ts-node typescript
```

### Create a new file __tsconfig.json__ and paste this:<div class="copy-button" language="bash"></div>
```json
// Path: root_of_your_project/tsconfig.json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "baseUrl": ".",
    "paths": {
      "*": [
        "node_modules/*"
      ]
    }
  }
}
```

### And in __package.json__ file, add this:<div class="copy-button" language="bash"></div>
```json
{
  "scripts": {
    "start": "ts-node ./src/index.ts",
    "build": "tsc"
  },
}
```


Now you can create a new folder src and create a new file `index.ts` in it.
</div>

# Writing a code
<div class="post-text">

First of all, we need to import all necessary libraries:
```typescript
// Path: root_of_your_project/src/index.ts

import { remote } from 'webdriverio';
```

Then we need to create a new function that will be our main function:
```typescript
// Path: root_of_your_project/src/index.ts

async function main(){

    return 0;
}
main().catch(console.error).then(console.log);
```
</div>

---

## Now we need to define opts and capabilities. 
<div class="post-text">
Opts is a configuration for our driver. Capabilities is a configuration for our device.

```typescript
// Path: root_of_your_project/src/index.ts

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android',
  'appium:appPackage': 'ua.avrora.app',
  'appium:appActivity': 'ua.avrora.app.Activities.ShowcaseActivity',
};

const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT!, 10) || 4723,
  logLevel: 'info',
  capabilities,
};
```
</div>

---

## Let's talk more about capabilities
<div class="post-text">

### appium:appPackage - Is a package name of your app. You can find it with
```bash
$ adb shell pm list packages
...
package:com.google.android.configupdater
package:ua.avrora.app
package:com.google.android.gms.supervision
...
```

Or if you know how your app looks like, you can find it with
```bash
$ adb shell pm list packages | grep avrora

package:ua.avrora.app
```

---

### appium:appActivity - Is an activity name of your app. 
Basically, it is a name of the screen that you want to open. You can find it with inside of apk of app. It can be found inside of `AndroidManifest.xml` file. 

You can download pure apk file from external websites like [apkpure.com](https://apkpure.com/).

You can open apk file with Android Studio. Then you can find `AndroidManifest.xml` file. And inside of it, you can find something like this:
```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:versionCode="247"
    android:versionName="2.4.7"
    android:compileSdkVersion="33"
    android:compileSdkVersionCodename="13"
    package="ua.avrora.app"
    platformBuildVersionCode="33"
    platformBuildVersionName="13">

    <uses-sdk
        android:minSdkVersion="15"
        android:targetSdkVersion="33" />

    <uses-permission
        android:name="android.permission.INTERNET" />
<!-- ... -->
```

Inside of `<manifest>` tag, you can find `<activity>` tag. And inside of it, you can find android:name attribute. This is your activity name. But we need to find activity with `android.intent.action.MAIN` and `android.intent.category.LAUNCHER` actions. 
It can be found inside of `<intent-filter>` tag. So, in my case, it looks like this:
```xml
<!-- ... -->
<activity
  android:theme="@ref/0x7f1000c0"
  android:label="@ref/0x7f0f003d"
  android:name="ua.avrora.app.Activities.ShowcaseActivity"
  android:exported="true"
  android:launchMode="1"
  android:screenOrientation="1"
  android:configChanges="0x80"
  android:windowSoftInputMode="0x12">

  <intent-filter>

      <action
          android:name="android.intent.action.MAIN" />

      <category
          android:name="android.intent.category.LAUNCHER" />
  </intent-filter>
</activity>
<!-- ... -->
```

We can see that `android:name` attribute is `ua.avrora.app.Activities.ShowcaseActivity`. So, we can use it as our `appium:appActivity` capability.
</div>

---

## Back to our code
<div class="post-text">
Now we can create a new driver with remote function:

```typescript
const driver = await remote(wdOpts);
```

In our `wdOpts`, we have hostname and port of our appium server. We can use localhost as hostname and 4723 as port. But if you want to use another hostname or port, you can set it in environment variables `APPIUM_HOST` and `APPIUM_PORT`.

---

Now we can use our driver to do something. For example, we can click on a button with driver.`click()` function. But we need to find this button first. We can do it with `driver.$()` function. It is a function that finds an element by selector. In our case, we can use `driver.$('~button')` to find a button with accessibilityLabel attribute equals to button. You can find more information about selectors [here](https://webdriver.io/docs/selectors.html).

In my case, I know that in first screen I see a licence agreement. And I need to click on Accept button. So, I can use this code:
```typescript
// ...
try {
    const acceptButton = await driver.$('//*[@text="Згоден"]');
    await acceptButton.click();
  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
  }
// ...
```
In this code, I use `driver.$()` function to find an element with text attribute equals to Згоден. And then I click on it with `click()` function. Wait for 1 second to finish animation and close the session with `deleteSession()` function.
</div>

---

## Run the code
<div class="post-text">

Now we can run our code with `npm start` command. And we can see, our code works. But we can see that our code is not finished. It's more up to you HOW to finish it.

#### You can find more information about webdriverio [here](https://webdriver.io/docs/gettingstarted.html).

</div>

# I hope this tutorial was helpful for you. 
<div class="post-text">


#### If you have any questions or proposition, you can ask me in [telegram](https://t.me/Land_Maze) @Land_Maze.

### The code will be available [here](https://github.com/LandMaze/appium-avrora-scrapper).

</div>