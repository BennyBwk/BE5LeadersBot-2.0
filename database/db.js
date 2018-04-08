const mongoose = require('mongoose');

mongoose.connect("mongodb://heroku_9w1xhcf1:9lol71lcd62ufeurrg9q5e98na@ds143231.mlab.com:43231/heroku_9w1xhcf1");
// mongoose.connect("mongodb://localhost:27018/leadbotdb");

module.exports = {
    mongoose:mongoose
}
