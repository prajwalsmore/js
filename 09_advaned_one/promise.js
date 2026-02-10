const promiseONe = new Promise((resolve, reject) => {
    // do an asynch task
    //db calls, cryptography

    setTimeout(() => {
        console.log('Asynch Task is completed');
        resolve() // if you dont use this, you wont get .then result
    }, 1000);
})


promiseONe.then(() => {
    console.log('Promise consumed');
    
})

new Promise((resolve, reject) =>{
    setTimeout(()=>{
        console.log("Asynch  2 resolved");
        resolve()
    },1000)
}).then(() => {
    console.log("Asynch 2 consumed");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({'username' : 'prajwal', 'email' : 'prajwal@google.com'})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({'username' : 'prajwal', 'password' : 123})
        }else{
            reject(`OOPs! Something went wrong`)
        }
    })
})

promiseFour
.then((user) =>{ //on new line for better readability
    console.log(user);
    return user.username 
})
.then((username) => {
    console.log(username);
    
})
.catch((error) => {
    console.log(error);
    
})
.finally(() => console.log('You promise is either resolved or rejected')
)


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true 
        if(!error){
            resolve({'username' : 'javascript', 'password' : 123})
        }else{
            reject(`OOPs! JS went wrong`)
        }
    })
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);   
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

async function getAllUser(){
    try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/users');
        const data = await response.json() //it also needds time
        console.log(data);
    } catch (error) {
        console.log('E: ', error);
        
    }
    
}

getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})  
.catch((error) => console.log(error))

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))