const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    eleventyConfig.addFilter("cssmin", source => new CleanCSS({}).minify(source).styles);

    const pluginHighlighting = require("@11ty/eleventy-plugin-syntaxhighlight");
    eleventyConfig.addPlugin(pluginHighlighting)


    /* embed tweet plugin setup */
    const pluginEmbedTweet = require("eleventy-plugin-embed-tweet")
    let tweetEmbedOptions = {
        cacheDirectory: './tweets/', // default: ''
        useInlineStyles: false // default: true
    }
    eleventyConfig.addPlugin(pluginEmbedTweet, tweetEmbedOptions);


    return {
        markdownTemplateEngine: "njk",
    };
};