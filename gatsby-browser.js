/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

require("./src/styles/main.scss");
require("./src/assets/images/icons.svg");

exports.onClientEntry = () => {
    window.addEventListener('load', () => {
        document.body.className = document.body.className.replace(/\bno-js\b/, '');
    });
};

