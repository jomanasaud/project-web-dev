var express= require ("express");

var bodyparser= require ("body-parser");

var mongoose= require ("mongoose");
const bodyParser = require("body-parser");

const app=express()

app.use(bodyParser.json())

app.use(express.static('public'))

app.use(bodyParser.urlencoded({
    extended:true
}))
mongoose.connect("mongodb://127.0.0.1:27017/FlowerShop",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
var db=mongoose.connection

db.on('error',()=>{console.log("db not found")})
db.once('open',()=>{console.log("connected")})


app.post("/register",(req,res)=>{
    var id=req.body.Username;
    var Password=req.body.Password;
    var email=req.body.email;
    var info={
        "Username":id,
        "email":email,
        'Password':Password
    }
    db.collection('Accounts').insertOne(info,(error,coll)=>{
        if(error){
            throw error;
        }
        console.log("added to the db")
        
    })
    return res.redirect('home.html');
    })
    

  app.post("/login",async(req,res)=>{
        var myid=req.body.Username;
        var Password=req.body.Password;
        var getpass= await db.collection('Accounts').find({Username:myid}).toArray()
        if(getpass[0].Password==Password)
        return res.redirect('home.html');
        else 
        return res.redirect('account.html');
       
        })



app.get("/",(req,res)=>{

    return res.redirect('account.html');
})
app.listen(3000,()=>console.log("3000"))

