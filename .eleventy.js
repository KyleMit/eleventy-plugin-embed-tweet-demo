const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    eleventyConfig.addFilter("cssmin", source => new CleanCSS({}).minify(source).styles);

    /* embed tweet plugin setup */
    const pluginEmbedTweet = require("eleventy-plugin-embed-tweet")
    let tweetEmbedOptions = {
        cacheDirectory: '',    // default: ''
        useInlineStyles: false // default: true
    }
    eleventyConfig.addPlugin(pluginEmbedTweet, tweetEmbedOptions);


    return {
        markdownTemplateEngine: "njk",
    };
};


