function esteEmailValid(email) {
    return (
        email.includes("@") &&
        email.includes(".") &&
        email.indexOf("@") > 0 &&
        email.indexOf(".") > email.indexOf("@") + 1 &&
        email.indexOf(".") < email.length - 1
    );
}

function trimiteEmail() {
    let nume = document.getElementById("nume").value.trim();
    let email = document.getElementById("email").value.trim();
    let subiect = document.getElementById("subiect").value.trim();
    let mesaj = document.getElementById("mesaj").value.trim();

    if (!nume || !email || !subiect || !mesaj) {
        Swal.fire({
            icon: 'warning',
            title: 'Toate câmpurile sunt obligatorii!',
            text: 'Te rugăm să completezi toate câmpurile înainte de a trimite.',
            confirmButtonColor: '#f0ad4e'
        });
        return;
    }

    if (!esteEmailValid(email)) {
        Swal.fire({
            icon: 'warning',
            title: 'Email invalid!',
            text: 'Te rugăm să introduci o adresă de email corectă.',
            confirmButtonColor: '#f0ad4e'
        });
        return;
    }

    let parametri = { nume, email, subiect, mesaj };

    emailjs.send("service_ipmrlpp", "template_kv230i5", parametri)
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Mesaj trimis!',
                text: 'Mulțumim! Vom reveni în cel mai scurt timp.',
                confirmButtonColor: '#3085d6'
            });

            document.getElementById("nume").value = '';
            document.getElementById("email").value = '';
            document.getElementById("subiect").value = '';
            document.getElementById("mesaj").value = '';
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Ups...',
                text: 'A apărut o problemă la trimiterea mesajului. Încearcă din nou!',
                confirmButtonColor: '#d33'
            });
            console.error("Eroare la trimiterea emailului:", error);
        });
}
