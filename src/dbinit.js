const axios = require('axios');

// DATA


async function createuser(){
    try {
    let res =  await axios.post("http://localhost:4000/api/createuser", user)
    return res.data
    }catch(err){
        return err.response
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
        return err.response
    }
    }

async function getallusers(){
    try {
        let res =  await axios.get("http://localhost:4000/api/getallusers")
        return res.data
    }catch(err){
        return err.response
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
        return err.response
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
        return err.response
    }   
}

async function createitem(listId){
    let data = {
        "link": "link",
        "title": "Testitem",
        "type": "nothing",
        "language": "Ger",
        "author": "Dr.Deoof",
        "description": "dad",
    }
    try {
        let res =  await axios.post(`http://localhost:4000/api/createitem/${listId}`, data)
        return res.data
    }catch(err){
        return err.response;
    }   
}


async function updateitem(itemID, listID){ 
    let data =  {
        "id": "",
        "link": "Updated ",
        "title": "Updated asd",
        "type": "Updated",
        "language": "Eng",
        "author": "Dr.arzt",
        "description": "descr"
    }
            
    data.id = itemID

    try {
        let res =  await axios.put(`http://localhost:4000/api/updateitem/${listID}`, data)
    
        return res.data
    }catch(err){
        return err.response
    }   
}

async function deleteitem(itemID){ 

    try {
        let res =  await axios.delete(`http://localhost:4000/api/deleteitem/${itemID}`)
    
        return res.data
    }catch(err){
        return err.response
    }   
}





function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
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
    sleep(500)
    for (user of users){
        let create = await createuser();
        console.log("Created user: ", create);
    }
    sleep(000)

    // login 
    console.log("http://localhost:4000/auth/login  -----  POST")
    sleep(500)
    const loginres = await login();
    console.log(loginres);
    const token = loginres.access_token;
    sleep(000)

    //getallusers
    console.log("http://localhost:4000/api/getallusers  -----  GET");
    sleep(500)
    const allusers = await getallusers();
    console.log(allusers);
    sleep(000)
    
    //setting the token for header
    axios.defaults.headers.Authorization = 'Bearer ' + token;
    //console.log(axios.defaults.headers)

    //create List
    console.log("\n \n http://localhost:4000/api/createlist  ----  POST");
    sleep(500)
    const list = await createList();
    console.log(list);
    sleep(000)

    //update List
    console.log("http://localhost:4000/api/updatelist  -----  PUT");
    sleep(500)
    const updatedlist = await updatelist(list.id, list.owner.id);
    console.log(updatedlist);
    sleep(000)

    //create Item
    console.log("http://localhost:4000/api/createitem  -----  POST");
    sleep(500)
    const createditem = await createitem(list.id);
    console.log(createditem);

    //update Item
    console.log("http://localhost:4000/api/createitem/:listId  -----  PUT")
    const updateditem = await updateitem(createditem.id, createditem.list.id);
    console.log(updateditem);

    // delete item 
    console.log("http://localhost:4000/api/deleteitem/:itemId  -----  DELETE")
    const deleteditem = await deleteitem(createditem.id, createditem.list.id);
    console.log(deleteditem);

    //create Item
    console.log("http://localhost:4000/api/createitem  -----  POST");
    console.log("New Item created without deletion");    
    sleep(500)
    const createditem2 = await createitem(list.id);
    const createditem3 = await createitem(list.id);
    const createditem4 = await createitem(list.id);
    console.log(createditem2);



    
    console.log(token)
    

}


init()

