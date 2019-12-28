
module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("favicon.ico");

    const pluginEmbedTweet = require("eleventy-plugin-embed-tweet")
    let tweetEmbedOptions = {
        cacheDirectory: '',
        useInlineStyles: false 
    }
    eleventyConfig.addPlugin(pluginEmbedTweet, tweetEmbedOptions);

    return {
        markdownTemplateEngine: "njk",
    };
};


