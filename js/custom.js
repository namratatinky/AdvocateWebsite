function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "namratarose2011@gmail.com",
        Password: "4A065CC472318FD5220ECCDB23D49823AF96",
        To: 'info@aarambhstart.com',
        From: "namratarose2011@gmail.com",
        Subject: "Client Query",
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email id: " + document.getElementById("email").value
            + "<br> Mobile No: " + document.getElementById("mobileNo").value
            + "<br> Query: " + document.getElementById("query").value
    }).then(
        message => alert(message)
    );
}

function getAlert() {
    alert("checking function 123");
}

