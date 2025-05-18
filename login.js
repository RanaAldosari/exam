
let usernameLog=document.getElementById("usernameL-input")
let passwordLog=document.getElementById("passwordL-input")
let loginBtn=document.getElementById("login-btn")
let apiUrl="https://68219a91259dad2655afc3cc.mockapi.io/api/users/user"

loginBtn.addEventListener("click",async function(e){
    e.preventDefault()

let usernameL=usernameLog.value;
let passwordL=passwordLog.value;


if(usernameL===""&&passwordL===""){
    alert("fiels is required")
}


let userInfo={
    username:usernameL,
    password:passwordL
}
try{
    let res=await fetch(apiUrl)
    
    if(username===userInfo.username&&password===userInfo.password){
    alert("Login Successfully")
    }
await res.json()
localStorage.setItem("username_key",userInfo.username)
window.location.href="home.html"
}catch(err){
    console.log(err)
}
})

