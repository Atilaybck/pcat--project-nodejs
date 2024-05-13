const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Connect DB
mongoose.connect("mongodb://localhost/pcat-test-db")

//create schema
const PhotoSchema = new Schema({
    title: String,
    description: String
})

const Photo = mongoose.model("Photo",PhotoSchema);

//create a photo
/*Photo.create({
    title:"Photo File 2",
    description:"Photo description 2 lorem ipsum"
});
*/
Photo.find({})
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });
