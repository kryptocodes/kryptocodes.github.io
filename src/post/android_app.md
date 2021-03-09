---
date: "2020-03-01"
title: "A Noob Guide On Building Your Own Whatsapp Sticker app"
slug: "Android App Development"
---
WhatsApp Messenger, or simply WhatsApp is a freeware, cross-platform messaging and Voice over IP (VoIP) service owned by Facebook, Inc. It allows users to send text messages and voice messages, make voice and video calls, and share images, documents, user locations, and other media (spam) currently Whatsapp has 1.5 billion users in 180+ countries and i think everyone uses Whatsapp and so recently Whatsapp introduced a new feature called stickers(not new tho) and of course it's turn to be a another spamming feature to spam other DMs and groups.. so recently saw the spamming sticker app which is flooded in the playstore so i thought of writing about the app building

![wa](/images/waa.jpg)

and recently google had removed tons of the stickers app from the playstore well because of the spam of course

![wa1](/images/wa1.png)

Okay then let's spam more

Before jumping into actual content, let me introduce myself, I'm a react developer, I react more for android and iOS and I'm trying to rust to whack Java. Initially, when I heard about the android app development(Sticker app) same as the typical people I thought it would be difficult to create but when I started to see more and more sticker app in the market... wait wait if it is hard to create then why it is flooded in the App store? And it's turns out, it's not as difficult as you think. 

# Prerequisite

1. A Computer with working internet connection - ofcourse without that you can't build
2. Android studio - welp you can use Expo or any other ide but here we are going to in a traditional path to build an android app
3. Common sense and patience 
4. A learning spirit, there will be no spoonfeeding here

# What this guide will cover:

- Downloading the source
- Modifying the assets
- Building the Sticker App

# What this guide will NOT cover:

- How to Hack WiFi
- adding spyware 
- app to prove earth is flat

# First step

Download [Android Studio](https://developer.android.com/studio) and git clone or download the whatsapp sticker app repository from the site [Whatsapp sticker app](https://github.com/WhatsApp/stickers.git)


# Second step

Create sticker package (image) 

Hold up before creating sticker there is certain rules and limitation

- Stickers must be exactly 512 x 512 pixels
- A sticker is an image that has a transparent background
- Stickers are organized into “packs”. Your app can contain anywhere from 1 to 10 packs.
- Each sticker pack must have a minimum of 3 stickers and a maximum of 30 stickers
- Stickers must be in the WebP format.
- Each sticker must be less than 100KB.
- Sticker Picker/Tray Icon
- Provide an image that will be used to represent your sticker pack in the WhatsApp sticker picker/tray
- This image should be 96 x 96 pixels
- Max file size of 50KB

TL;DR just convert all stickers to 512x512 size and in webp format Welp again, it's easy to convert thanks to the open source community

Now you have to fetch the assets i mean the stickers either you can use your own images or download images from the internet 

if you are using custom images then you have to remove the background
To remove the background of the image use [remove_bg](https://www.remove.bg/) and to resize and convert image to webp use [resize_img](https://image.online-convert.com/convert-to-webp)

Now open android studio and open the repository which you have downloaded `Whatsapp_Stickers` 
earlier from the github

Now navigate to `Android/app/src/main/assets` in Android Studio and create a new folder(ex: 2 or 3) and added your stickers images(webp images) and 96x96 png image for sticker thumbnail so the sticker assets are ready now we need tweak configuration 

![wa2](/images/wa2.PNG)

```goto
Android/app/src/main/assets/content.json
```

![wa_4](/images/wa4.PNG)

now modify the content.json and add your sticker assets info into it 

Modifying the contents.json file

You must also modify the contents.json file in SampleStickerApp/app/src/main/assets. Replace the values of the metadata with your own. A few notes:

- `name`: the sticker pack's name (128 characters max)
- `identifier`: The identifier should be unique and can be alphanumeric: a-z, A-Z, 0-9, and the following characters are also allowed "_", "-", "." and " ". The identifier should be less than 128 characters.
- `publisher`: name of the publisher of the pack (128 characters max)
Replace the "image_file" value with the file name of your sticker image. It must have both the file name and extension. The ordering of the files in the JSON will dictate the ordering of your stickers in your pack.
- `image_data_version` : an overall representation of the version of the stickers and tray icon. When you update stickers or tray icon in your pack, please update this string, this will tell WhatsApp that the pack has new content and update the stickers on WhatsApp side.
- `avoid_cache` : this tells WhatsApp that the stickers from your pack should not be cached. By default, you should keep it false. Exception is that if your app updates stickers without user actions, you can keep it true, for example: your app provides clock sticker that updates stickers every minute.
- `android_play_store_link and ios_app_store_link (optional fields)`: here you can put the URL to your sticker app in the Google Play Store and Apple App Store (if you have an iOS version of your sticker app). If you provide these URLs, users who receive a sticker from your app in WhatsApp can tap on it to view your sticker app in the respective App Stores. On Android, the URL follows the format
```
https://play.google.com/store/apps/details?id=com.example 
```
where "com.example" is your app's package name.
- `emojis (optional)`: add up to a maximum of three emoji for each sticker file. Select emoji that best describe or represent that sticker file. For example, if the sticker is portraying love, you may choose to add a heart emoji like 💕. If your sticker portrays pizza, you may want to add the pizza slice emoji 🍕. In the future, WhatsApp will support a search function for stickers and tagging your sticker files with emoji will enable that. The sticker picker/tray in WhatsApp today already categorizes stickers into emotion categories (love, happy, sad, and angry)and it does this based on the emoji you tag your stickers with.

Alright, if you don't much patience to look into tags then just copy paste the default code and edit the content accordingly 

![wa_5](/images/wa5.png)

So stickers asset are done!!!

## Before building your app, you will need to do the following:

# this one is totally optional 
- Make sure to change the app's icon (i.e. launcher icon) that will be displayed on the home screens of users who install your app. The icons are contained in SampleStickerApp/app/src/main/res in each of the folders beginning with mipmap (e.g. mipmap-xhdpi or mipmap-xxxhdpi). For a simple way to create these icons, you can use Android Image Asset Studio which is built into Android Studio. See [link](https://developer.android.com/studio/write/image-asset-studio#access)for more information on how to run this tool and read the section here for information on how to use the tool to create your app's launcher icons.
- Change your apps name in 
```
strings.xml 
SampleStickerApp/app/src/main/res/values/strings.xml
```
 This is the name users will see for your app on their phone. You can consider providing translations of your app name by following this instruction: [link](https://developer.android.com/guide/topics/resources/localization)
- In addition, the application id (e.g. com.whatsapp) need to be changed. Note that you need to specify a unique application id that does not exist in play store. For more information on how to set your application ID, visit [link](https://developer.android.com/studio/build/application-id).
- Change the applicationId in build.gradle (SampleStickerApp/app/build.gradle)
For developers that are familiar with package name, you can change the package name, but it is not required. The package name will not be visible once the app is built.

TL;DR to change to app name navigate to 
```
SampleStickerApp/app/src/main/res/values/strings.xml
```
and change the values

![wa7](/images/wa7.png)

```strings.xml
<string name="app_name">Insert_your_app_name</string>
```

and don't forgot to refactor the app build 
```
java/com.example.stickerapp
```

![wa6](/images/wa6.png)

refactor -> rename -> your_app_name
and change the app name in 
```
Sticker/app/Gradle Scripts/build.gradle (Module: app)
```

![wa8](/images/wa8.PNG)

And there we go, voila you are done now enter the run command or export the build TaDa
if you face any problems feel free to ping me I have presence on multiple social media/messaging platforms and I will respond to DMs/mentions as long as you [Don't ask to ask, just ask](https://dontasktoask.com/) and express your intent clearly.

![wa9](/images/wa9.jpg)


here the sample screenshot of the Sticker App which i made while writing this blog
![wa10](/images/wa10.jpg)
P.S if you like android development, please please don’t spam with sticker app really, it’s cancerous to the whole android platform as I mentioned in the beginning the whole app market is flooded with sticker app.. Rather, try to learn other stack and explore more! HAPPY CODING