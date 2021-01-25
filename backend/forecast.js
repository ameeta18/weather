const request=require('request')
const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=88fb7863bc21202e29fc83f671e5cba6&query='+ latitude +','+ longitude 
    request({url:url,json:true},(error,response)=>{  
         if(error){
             callback('unable to connect to weather service',undefined)
         }else if(response.body.error){
             callback('unable to find location',undefined)
         }
         else{
             callback(undefined,(response.body.current.temperature)+' is current temperature and'+(response.body.current.feelslike)+' is feel like temperature '
      
         )
        }
    
 })
}
module.exports=forecast