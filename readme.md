---
layout: default-layout.njk
title: "Eleventy Embedded Tweet Demo"
permalink: "/"
---

[![Netlify Status](https://api.netlify.com/api/v1/badges/f851427d-8792-4f86-837c-12ccb48c44fd/deploy-status)](https://app.netlify.com/sites/eleventy-embed-tweet/deploys)


## Problem

Static site generators work hard to bake in performance and do as much work ahead of time as possible.

Which is why it's a bummer that the official way to embed tweets is to use the [publish.twitter.com](https://publish.twitter.com/#) which looks like this:

```html
<blockquote class="twitter-tweet">
  <p lang="en" dir="ltr">
    Nobody:<br><br>
    Software Marketing Page: &quot;Blazingly Fast&quot;
  </p>
  &mdash; Kyle Mitofsky (@KyleMitBTV) 
  <a href="https://twitter.com/KyleMitBTV/status/1188837207206977536">October 28, 2019</a>
</blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
```

And performs like this:

![twitter network traffic](https://i.imgur.com/4SFqs4P.png)

## Goals

* Avoid client side API calls
* Minimize repetitive server side API calls
* Cache assets and API data so project can build offline
* Leverage free (personal) twitter API tier on build server
* Provide fallback for local development for distributed devs who want to run without adding credentials

## Usage

At it's simplest, you should just be able to drop in this nunjucks shortcode with a tweet ID which will deliver all the necessary html to embed (must be passed as a string because long numbers will truncate)

<pre><code>&#x007b;% tweet "1188837207206977536" %&#x007d;</code></pre>

Which is exposed in the config like this:

```js
eleventyConfig.addShortcode("tweet", tweetId => getTweet(tweetId));
```

## Setting .ENV variables

Create a file named `.env` at the project root - it contains keys so it's excluded by the `.gitignore` so each person will have to manually create their own

```env
TOKEN=********
TOKEN_SECRET=********
CONSUMER_KEY=********
CONSUMER_SECRET=********
```

## Todo

* [ ] Destructure API JSON before caching - only store info we care about
* [ ] Much better docs
* [ ] Figure out more consistent CSS structure
* [ ] Cache profile and media images
