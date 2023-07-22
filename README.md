# Three.js-Basic-PWA-Template

![Three.js PWA Template](https://raw.githubusercontent.com/henryegloff/Three.js-Basic-PWA-Template/main/src/_media/open-graph.jpg)

This is an ultra basic template / boilerplate for a three.js project that will meet the requirements to be installable as a progressive web app (PWA). It uses Webpack and the [CopyWebpackPlugin](https://webpack.js.org/plugins/copy-webpack-plugin/) to compile everything and to include all the necessary bits and pieces such as icons, manifest.json, and service-worker.js. It is also designed to copy all the required directories and files etc from the src directory only, and to be easily configurable from the webpack.config.js file.

Demo: [https://three-js-basic-pwa-template.vercel.app/](https://three-js-basic-pwa-template.vercel.app/)

At the time of publishing (22/7/2023), this gets a perfect score for all categories in Chrome Lighthouse audit. 😎

To work with this template:

* Update the variables at the top of the Webpack config.js file and adjust the CopyPlugin patterns as required.
* Update the icons and favicon.
* Update the open graph image.

**Please note:** Generally it is much easier to meet Lighthouse requirements in a standard HTML webpage. For Three.js webpages I usually need to make adjustments that will inevitably lower the Lighthouse Audit score. For example, some HTML text content needs to be present in the initial view to meet the ‘Contentful Paint’ requirements. And, when using things like the Orbit Controls it is generally a good idea to set set the meta – user-scalable to 0 etc, which will lower the score for accessibility.