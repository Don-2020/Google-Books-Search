var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    author: {type: String, required: true},
    description: String,
    image: String,
    link: String,
    title: {type: String, required: true}
});

var Book = mongoose.model("Book", bookSchema);

module.exports = Book;