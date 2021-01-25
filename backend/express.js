const express=require('express')
const app=express()
const request=require('request')
const geocode=require('./geocode')
const forecast=require('./forecast')
const path=require('path')
//DEFINE PATHS FOR EXPRESS CONFIG
const public_dir_path= path.join(__dirname,'../front-end')
// SET UP STATIC DIRECTORY TO SERVE
app.use(express.static(public_dir_path))   

app.get('/weather',(req,res)=>{
    if(!req.query.address)
    {
        return res.send({
            error:'you must provide a search term'
        })
    }
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{     //passing default obj if no address is provided
        if(error)
        {
            return res.send({  error })
        }
        forecast(latitude,longitude,(error,forecastdata)=>{
            if(error)
        {
            return res.send({  error })
        }
        res.send({
            forecast: forecastdata,
            location,
            address:req.query.address

        })
        })
    })
})
app.listen(4000,()=>{
    console.log('server is up on the port')
})