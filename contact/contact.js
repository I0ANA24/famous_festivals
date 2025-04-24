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