$(document).ready(function(){
    $("#submit").click(function(event){
        let isValid=true;
        $(".error").text("");  
        event.preventDefault();
        

        const first=$("#first").val().trim();
        const last=$("#last").val().trim();
        const username=$("#username").val().trim();
        const email=$("#email").val().trim();
        const phone=$("#phone").val().trim();
        const password=$("#password").val().trim();
        const bio=$("#bio").val().trim();


        // form validation

        if(first===""||last===""){
            $("#name-error").text("firstname and lastname are required")
            isValid=false;
        }
        if(username===""){
            $("#username-error").text("username is required")
            isValid=false;
        }
        if(email===""){
            $("#email-error").text("email is required")
            isValid=false;
        }else if(!/^\S+@\S+\.\S+$/.test(email)){
            $("#email-error").text("invalid email")
            isValid=false;
        }
        if(phone===""){
            $("#phone-error").text("phone no is required")
            isValid=false;
        }
        else if(phone.length>10||phone.length<10){
            $("#phone-error").text("invalid phone no")
            isValid=false;
        }
        if(password===""){
            $("#password-error").text("password is required")
            isValid=false;
        }else if(password.length<8){
            $("#password-error").text("password must be contain 8 character")
            isValid=false;
        }

        // dispaly data

        if(isValid){
            const data=`
            <strong>firstName:</strong> ${first}<br/>
            <strong>LasttName:</strong> ${last}<br/>
            <strong>UserName:</strong> ${username}<br/>
            <strong>Email:</strong> ${email}<br/>
            <strong>Phone:</strong> ${phone}<br/>
            <strong>Bio:</strong> ${bio}<br/>
            `
        ;
        $("#data").html(data)
        $(".popup").fadeIn();

        $("#first").val("")
        $("#last").val("")
        $("#username").val("")
        $("#email").val("")
        $("#phone").val("")
        $("#password").val("")
        $("#bio").val("")
        }
    });

    $(".close").click(function(){
        $(".popup").fadeOut();
    })

})