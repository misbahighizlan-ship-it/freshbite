<script>
const formulaire = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(e){
    e.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){
        formMessage.textContent = "Tous les champs sont obligatoires !";
        formMessage.style.color = "red";
        return;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        formMessage.textContent = "Adresse email non valide !";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Message envoyé avec succès !";
    formMessage.style.color = "green";

    formulaire.reset(); 
});
</script>
