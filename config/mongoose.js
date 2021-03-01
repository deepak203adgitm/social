const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/newuser",{
    useUnifiedTopology: true,
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify: false

},(err,res)=>{
    if (err) throw err
    if(res){
        return console.log('db connected')
    }
})



module.exports=mongoose
