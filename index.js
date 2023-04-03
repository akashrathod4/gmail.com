function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "akashrathod230496",
        Password : "Akash@123",
        To : 'akash3399rathod@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact form enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}