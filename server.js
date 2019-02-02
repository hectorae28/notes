const express=require('express')
const os=require('os')
const path=require('path')
const app=express()
const port=8080

app.use(express.static(/*path.join(__dirname+*/'build'/*)*/))

app.get('/',(req,res)=>{
    res.sendFile(/*path.join(__dirname,'build',*/'./build/index.html'/*)*/)
})

app.listen(port,()=>{
    console.log(`en linea en ${ os.networkInterfaces().wls1[0].address }:${port}`)
})
