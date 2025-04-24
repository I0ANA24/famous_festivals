let hamburger = document.getElementById('menu-icon');
let close = document.getElementById('menu-icon-close');
let menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    console.log("merge");
    hamburger.style.display = "none";
    close.style.display = "block";
    menu.style.display = "flex";

    document.addEventListener('click', (event) => {
        if(close.style.display === "block" && !menu.contains(event.target) && !hamburger.contains(event.target)) {
            close.style.display = "none";
            hamburger.style.display = "block";
            menu.style.display = "none";
            document.body.style.overflow = "scroll";

            if(event.target.tagName === 'A' || event.target.tagName === 'IMG') {
                event.preventDefault();
            }
        }
    });
});

close.addEventListener('click', () => {
    close.style.display = "none";
    hamburger.style.display = "block";
    menu.style.display = "none";
    document.body.style.overflow = "scroll";
});



// cod pentru formularul de contact

function trimiteEmail() {
    let parametri = {
        nume: document.getElementById("nume").value,
        email: document.getElementById("email").value,
        subiect: document.getElementById("subiect").value,
        mesaj: document.getElementById("mesaj").value,
    };

    emailjs.send("service_ipmrlpp", "template_kv230i5", parametri).then(alert("Email Sent!!"));
    // emailjs.send("service_id", "template_id")
}