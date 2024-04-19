const express = require('express')
const bcrypt = require('bcrypt')

const the_list = {
    "Ivan":{
        "name":"Ivan",
        "age":20,
        "comment":"I love potatos",
    },
    "Finn":{
        "name":"Finn",
        "age":30,
        "comment":"I love potatos",
    },
    "Lucy":{
        "name":"Lucy",
        "age":21,
        "comment":"I love potatos",
    },
    "Julia":{
        "name":"Julia",
        "age":19,
        "comment":"I love potatos",
    },
    "Govno":{
        "name":"Govno",
        "age":39,
        "comment":"I love potatos",
    },    
    "Govno":{
        "name":"Govno",
        "age":48,
        "comment":"I love potatos",
    },
}

const app = express()


app.listen(3000,() => {
    console.log("Server is working on 3000 PORT");
})