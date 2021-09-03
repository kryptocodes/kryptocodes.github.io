---
title: "Migrating to Notion CMS"
date: 2021-07-16T19:01:20+05:30
slug: "notion"
draft: false
---
Heads up! This post was written before Notion came out with an official API, and uses a reverse-engineering method that isn’t officially supported. Notion now has an official developer API, so you should probably use that instead.

What's popping guys

I'm a big fan of Notion who else is not yeah!, all my routine schedules, to Todo, basically everything fits into notion of course Notion is the best productivity app.This blog post is all about how i tried migrating to notion cms and how badly failed (oh wait no! i did tho)


<iframe width="auto" height="auto" src="https://www.youtube.com/embed/aqO4SmJBlIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

src: [Captain Sinbad](https://youtu.be/aqO4SmJBlIA) 

# What is Notion?

for those who live under rock or don't know notion

Notion is an all-in-one workspace where you can write, plan, collaborate and get organized - it allows you to take notes, add tasks, manage projects & more. Imagine a lego structure.

Notion provides the building blocks and you can create your own layouts and toolkit to get work done. Many people refer to Notion as an “internal wiki” allowing teams and individuals to plan their projects, work and goals.

![img_1](/images/notion/Untitled.png)

# So how does that acts up as CMS ?

so recently Notion made developer (beta) version of their API (cough cough already there are plethora devs who did hacks and made unofficial Notion API' well don't care about it we have the official one).

![img_1](/images/notion/Untitled1.png)

and It's is normal REST. so I started to work on migrating to the Notion CMS (trying beta one are always cool prove me wrong)

# Phase 1: Deciding the Tech Stack (this where I made the mistake)

if you're following me or somehow know me personally, you would have guessed it, Next JS hell yeah this post is sponsored by Vercel Just Kidding 😅

- Next JS
- Tailwind CSS
- TypeScript

Tailwind and TypeScript ofcourse what else one would go? (Bootstrap or other UI libraries? No) 

# Phase 2: Designing

![img_1](/images/notion/Untitled2.png)

figma

started designing MVP went with dark as the default ofcourse didn;t followed everything and rest as the norm 

# Phase 3: Integrating Notion API

this the phase which made me to realize to read the docs especially the beta one's before implementing the actual product

Notion API spits out data with block format each and that doesn't means it spits out everything 

```code 
{

"object": "database",

"title": [

{

"type": "text",

"text": {

"content": "Blog",

"link": **null**

},

"annotations": {

"bold": **false**,

"italic": **false**,

"strikethrough": **false**,

"underline": **false**,

"code": **false**,

"color": "default"

},

"plain_text": "Blog",

"href": **null**

}

],

"properties": {

"Tags": {

"id": "!'(w",

"type": "multi_select",

"multi_select": {

"options": [

{

"id": "4322f3ac-xxxx-xxxx-xxxx-xxxxxxxxxxx",

"name": "Daily",

"color": "purple"

},

{

"id": "f2209809-xxxx-xxxx-xxxx-xxxxxxxxxxx",

"name": "Blog",

"color": "brown"

},
```

and it didn't supported most of the stuffs (undefined), unfortunately it didn't supported Image out of the box which was literally a deal beaker for me, look a blog site without image ? nah right 

so did some google and found the unofficial one supports literally everything only cons is that only public pages were supported which is not a big deal beaker at least for a blog site which is going to be public 

**update: notion-api-worker now support private pages with Notion_Token**

Went ahead with Splitbee' react-notion and notion-api-worker, **notion-api-worker** is **a serveless wrapper** for notion to access the content and **react-notion** is to render the blocks hassle free without additional styling or components 

checkout their docs for further info 

[https://github.com/splitbee/notion-api-worker](https://github.com/splitbee/notion-api-worker)

[https://github.com/splitbee/react-notion](https://github.com/splitbee/react-notion)

forgot to mention **react-notion-x** another cool blazing fast notion renderer 

# Phase 4: coding and deploying

so finally coding yay! at least that what I thought and well world is cruel so is the configuration and workaround for the Next JS and react-notion-api. adding the dark toggle was the most idiotic thing I did while making this. The react-notion is component which renders the stuffs I mean the block which is fetched, The react-notion comes with default styling out of the box and unfortunately the tailwind dark class on the root element didn't worked out 

### Solution?

extract the react-notion styling and add the whole css into the styling. I know I know it's not  the best fix but hey it works 

deployment is easy with nextjs and vercel (checkout vercel if you haven't tried before)

connect your repo with vercel add build command if you have any then click on deploy and that's it taDa

There’s still a lot of problems with this setup but it definitely works and has been helping me to quickly publish posts from anywhere which was the goal in the first place. I wanted to reduce any amount of friction that I could possibly have to get stuff out there.

here is the link for deployed version of the same feel free to checkout btw it's the same site as this but with notion yeah!

[https://kryptocodes-github-io.vercel.app/](https://kryptocodes-github-io.vercel.app/)

# Conclusion

Tho react-notion-x and api working fine but it's unofficial api's right ? so i'ma wait till the stable roll out from notion side