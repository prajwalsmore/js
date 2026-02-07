const userName = {
    username : "hitesh",
    price : 999,

    welcomeUser : function(){
        console.log(`${this.username}, welcome to ...`);
        
    }
}

userName.welcomeUser()
userName.username = "Sam";
userName.welcomeUser()