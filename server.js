const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 33,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 30,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Illinois'
    },
    'unkown': {
        'age': 0,
        'birthName': 'Unkown',
        'birthLocation': 'Unkown'
    }
}
//app.get(route, callback)

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req,res)=>{
    const rapper = req.params.name.toLocaleLowerCase()
    if(rappers[rapper]){
        res.json(rappers[rapper])
    }else{
        res.json(rappers['unkown'])
    }
})
app.listen(PORT, () => {
    console.log(`The server is now running on port: ${PORT}`)
})