var pluginEmbedTweet = require("eleventy-plugin-embed-tweet")

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("favicon.ico");

    eleventyConfig.addPlugin(pluginEmbedTweet);

    return {
        markdownTemplateEngine: "njk",
    };
};


