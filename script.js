jQuery("#signup").validate({



    rules:{
        ename:{
            required:true,
            email:true
        },
        pname:{
            required:true,
            minlength:5
        },
    },
    messages: {
        ename: {
            required: "Please enter a email",
            email: "Enter a Valid Mail eg:name@domain.com",
        },
        pname: {
            required: "Please Enter Your Password",
            minlength: "Enter Atleast 5 characters"
        }
    }
})