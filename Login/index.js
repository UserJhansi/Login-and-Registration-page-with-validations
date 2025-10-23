
document.getElementById("loginForm").addEventListener('submit', function(e){
    e.preventDefault();

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const successMsg = document.getElementById("successMsg"); 

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    const usernameRegex = /^[A-Za-z0-9]{2,15}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%&*])[A-Za-z\d!@#$%&*]{4,12}$/;


    if(username === "" || password === ""){
        alert("Please Enter Username and Password");
    } else if(!usernameRegex.test(username) || !passwordRegex.test(password))  {
      alert("Username or Password are not valid");
    }
    else {
        usernameInput.value ="";
        passwordInput.value ="";
        successMsg.innerHTML= '<i class="bi bi-check-circle-fill me-1"></i> Login Successful !!';
        console.log(`${username} ${password}`);

        setTimeout(() => {
            window.location.href = "/Login/main.html";
        }, 2000);
    }
});






















