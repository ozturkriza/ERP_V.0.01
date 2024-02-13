import  express  from "express";  
const app =express()
const port=3000



app.get("/", (req,res)=>{
    res.send("indexsayfasıffffffff");
});

app.listen(port,() =>{
    console.log("3000 portu dinleniyor.")
})
