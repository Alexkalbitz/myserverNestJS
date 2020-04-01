const axios = require('axios');

// DATA


async function createuser(){
    try {
    let res =  await axios.post("http://localhost:4000/api/createuser", user)
    return res.data
    }catch(err){
        return error
    }

    }


async function login(){
    try {
        let res =  await axios.post("http://localhost:4000/auth/login",        
        {
        "password":"secret1",
        "username":"chris"
        })
    return res.data
    }catch(err){
        return error
    }
    }

async function getallusers(){
    try {
        let res =  await axios.get("http://localhost:4000/api/getallusers")
        return res.data
    }catch(err){
        return error
    }
}

async function createList(){
    try {
        let res =  await axios.post("http://localhost:4000/api/createlist",        
    {
        "public": false,
        "title": "List title",
        "description": "Description "
    }
     )
    return res.data
    }catch(err){
        return error
    }
}


async function updatelist(listID, ownerID){ 
    let data =  {
        "id": "",
        "public": true,
        "title": "updated title",
        "description": "Updated Description",
        "owner": {
            "id": ""}}
            
    data.id = listID
    data.owner.id = ownerID    
    try {
        let res =  await axios.put("http://localhost:4000/api/updatelist", data)
    
        return res.data
    }catch(err){
        return error
    }   
}

async function createitem(listID){
    let data = {
        "link": "ads",
        "title": "Albern",
        "type": "asda",
        "language": "Ger",
        "author": "Dr.Deoof",
        "description": "dad",
        "listId":""
    }
    data.listId = listID
    try {
        let res =  await axios.post("http://localhost:4000/api/createitem", data)
        return res.data
    }catch(err){
        return error
    }   
}



async function init(){

    //createuser
    const users = [
        {
        "password":"secret1",
        "email":"chris@email.de",
        "username":"chris"
        },
        {
        "password":"secret2",
        "email":"alex@email.de",
        "username":"alex"
        },
        {
        "password":"secret3",
        "email":"lisa@email.de",
        "username":"lisa"
        },
    ];
    
    console.log("http://localhost:4000/api/createuser  -----  POST");
    
    for (user of users){
        let create = await createuser();
        console.log("Created user: ", create);
    }

    // login 
    console.log("http://localhost:4000/auth/login  -----  POST")
    const loginres = await login();
    console.log(loginres);
    const token = loginres.access_token;


    //getallusers
    console.log("http://localhost:4000/api/getallusers  -----  GET");
    const allusers = await getallusers();
    console.log(allusers);
    
    //setting the token for header
    axios.defaults.headers.Authorization = 'Bearer ' + token;
    //console.log(axios.defaults.headers)

    //create List
    console.log("http://localhost:4000/api/createlist  ----  POST");
    const list = await createList();
    console.log(list);

    //update List
    console.log("http://localhost:4000/api/updatelist  -----  PUT");
    const updatedlist = await updatelist(list.id, list.owner.id);
    console.log(updatedlist);

    //create Item
    console.log("http://localhost:4000/api/createitem  -----  POST");
    const createditem = await createitem(list.id);
    console.log(createditem);
    

}



init()




/*
async function init(){
    console.log('initialiseData');

    const URL = "http://localhost:4000/";
    let usercreateresponse = await createUsers();
    console.log(usercreateresponse);
    const loginresponse = await login();
    console.log(loginresponse,'login response');
}
 






async function login(){
    const user =     {
        "password":"secret1",
        "username":"chris"
        }
    const url = "http://localhost:4000/auth/login"

    axios.post(url, user)
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
    }



async function createUsers(){
    const users = [
        {
        "password":"secret1",
        "email":"chris@email.de",
        "username":"chris"
        },
        {
        "password":"secret2",
        "email":"alex@email.de",
        "username":"alex"
        },
        {
        "password":"secret3",
        "email":"lisa@email.de",
        "username":"lisa"
        },
    ]

    const url = "http://localhost:4000/api/createuser";

    let userresponse = []
    for (user of users) {
        userresponse.push(await axiosPost(user, url))
        console.log(userresponse)
    }
    return userresponse
}


async function axiosPost(url, user){
    axios.post(url, user)
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        return error;
    });
}






init();
//*/