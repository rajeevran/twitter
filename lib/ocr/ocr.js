// Importing Required Modules
const Tesseract = require("tesseract.js");
// Local Imports
const discord = require("./discord");

module.exports = {
  getImageText: (tweet, tweetImageUrl) => {
    Tesseract.recognize(tweetImageUrl).then(result => {
      // Sending OCR Results to Discord
      console.log('result.text---->',result.text)
      discord.sendOcr(tweet, result.text, result.confidence);
    })
  }
};
