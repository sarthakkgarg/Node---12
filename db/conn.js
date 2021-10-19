const mongoose = require("mongoose");

const Db = 
"mongodb+srv://sarth:oneplus6@cluster0.kwba4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(Db, {
    // userNewUrlParser: true,
    
    useUnifiedTopology: true,
   
})
.then(() =>{
    console.log("Connection Successfull");
})
.catch((e) => { 
    console.log(e);
});