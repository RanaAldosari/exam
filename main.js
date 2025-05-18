 let username=document.getElementById("username-input")
        let email=document.getElementById("email-input")
        let password=document.getElementById("password-input")
        let usernameError=document.getElementById("username-error")
        let emailError=document.getElementById("email-error")
        let passwordError=document.getElementById("password-error")
        let sightupBtn=document.getElementById("signup-btn")
let apiUrl="https://68219a91259dad2655afc3cc.mockapi.io/api/users/user"
        sightupBtn.addEventListener("click",async function(e){
            e.preventDefault()

let userInfo={
    username:username.value,
    email:email.value,
    password:password.value
}

let valid=true;
if(username.value.length<=4){
    usernameError.textContent="username must be more than 4 characters"
    usernameError.style.color="red"
    valid=false;
}
if(email.value==""||!email.value.includes("@")||!email.value.includes(".com")){
    emailError.textContent="email is invalid,must be includes @,.com"
    emailError.style.color="red"
    valid=false;
}
if(password.value.length<=6){
passwordError.textContent="password must br more than 6 characters"
passwordError.style.color="red"
valid=false;
}
if(!valid)return;

try{
let res=await fetch(apiUrl, {
  method: 'POST',
  body: JSON.stringify(userInfo),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
await res.json()
alert("create account successfully")
window.location.href="login.html"
}catch(err){
    console.log(err)
    alert("there is an error")
}


        })