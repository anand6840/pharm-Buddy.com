const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://farmeasydatabase:farmeasydatabase@cluster0.yltvd29.mongodb.net/PharmBuddyDatabase?retryWrites=true&w=majority")

module.exports={connection}
