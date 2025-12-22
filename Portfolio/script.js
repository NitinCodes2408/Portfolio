document.querySelector(".contact-form").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const phoneNumber = "917499853518";

    const text = 
    `New Portfolio Message:%0A` +
    `Name: ${name}%0A` +
    `Email: ${email}%0A` +
    `Message: ${message}`;

    const whatsappURL = 
    `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappURL, "_blank");


    //Success Message
    const successMsg = 
    document.getElementById("success-msg");
    successMsg.style.display = "block";

    //form reset 
    document.querySelector(".contact-form").reset();

    setTimeout(() =>{
        successMsg.style.display="none";
    }, 3000);

});


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
  });
});

document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});