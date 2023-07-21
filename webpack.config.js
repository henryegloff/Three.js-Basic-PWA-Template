
const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');


const title = "Three.js PWA Template";
const short_title = title;
const description = "A basic Three.js Progressive Web App template compiled with Webpack.";
const locale = "en-au";
const color = "#000";
const author = "Henry Egloff";
const author_url = "https://henryegloff.com";
const twitter_handle = "@henryegloff";



const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.js',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { 
          from: 'src/index.html',
          transform(content) {
            return content.toString()
            .replace(/{title}/g, title)
            .replace(/{description}/g, description)
            .replace(/{lang}/g, locale)
            .replace(/{color}/g, color)
            .replace(/{twitter_handle}/g, twitter_handle)
            .replace(/{author}/g, author)
            .replace(/{author_url}/g, author_url)
          },    
        },
        
        { from: 'src/_icons/', to:'_icons' },
        { from: 'src/_media/', to:'_media' },
        { 
          from: 'src/service-worker.js',
        },
        { from: 'src/style.css'},
        { 
          from: 'src/manifest.json',
          transform(content) {
            return content.toString()
            .replace(/{title}/g, title)
            .replace(/{short_title}/g, short_title)
            .replace(/{description}/g, description)
            .replace(/{locale}/g, locale)
            .replace(/{color}/g, color)
            .replace(/{author}/g, author)
            .replace(/{author_url}/g, author_url)
          },      
        },
      ],
    })
  ],
  mode: 'development'
};

module.exports = config;

