console.log('client side js file is loaded')
document.querySelector('#message-1').style.display='none'
document.querySelector('#message-2').style.display='none'
const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')
weatherform.addEventListener('submit',(e)=>{
    document.querySelector('#message-1').style.display='block'
document.querySelector('#message-2').style.display='block'
    e.preventDefault()
    const location=search.value
    messageOne.textContent='loading...'
    messageTwo.textContent=' '
    fetch('http://localhost:4000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if (data.error)
        { messageTwo.textContent= data.error  }
        else
        {
            messageOne.textContent= data.location
            messageTwo.textContent=data.forecast
        }
    })
})
})