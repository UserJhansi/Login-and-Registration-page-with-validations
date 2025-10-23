document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const pswd = document.getElementById("pswd").value.trim();
  const pswd2 = document.getElementById("pswd2").value.trim();
  const tc = document.getElementById("tc").checked;
  if (name === "" || email === "" || phone === "" || pswd === "" || pswd2 === "") {
    alert("Please fill all fields");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  if (pswd.length < 4) {
    alert("Password must be at least 4 characters");
    return;
  }

  if (pswd !== pswd2) {
    alert("Please Enter Same Password");
    return;
  }
  if (!tc){
    alert("You must accept the Terms and Conditions to register.");
    return;
  }
  
  alert("Registration successful!");
  document.getElementById("signup-form").reset();
});
