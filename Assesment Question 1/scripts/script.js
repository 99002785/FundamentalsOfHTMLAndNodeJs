function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


function validateForm() {
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var dateOfBirth = document.contactForm.dateOfBirth.value;




    var nameErr = emailErr = mobileErr = countryErr = genderErr = true;

    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }


    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }


    if (country == "Select") {
        printError("countryErr", "Please select your country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }


    if (gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }


    if ((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
        return false;
    } else {




        var dataPreview = "You've entered the following details and it has been updated in local storage: \n" +
            "Full Name: " + name + "\n" +
            "Email Address: " + email + "\n" +
            "Mobile Number: " + mobile + "\n" +
            "Date of Birth: " + dateOfBirth + "\n" +
            "Country: " + country + "\n" +
            "Gender: " + gender + "\n";


        var formData = {
            "Full name": name,
            "Email Address": email,
            "Mobile Number": mobile,
            "Date of Birth": dateOfBirth,
            "Country": country,
            "Gender": gender,

        };



        localStorage.setItem('formData', JSON.stringify(formData));
        alert(dataPreview);

    }
};

function store() {
    var storedValue = localStorage.getItem("formData");
    document.getElementById('displayEntry').innerHTML = storedValue;

    alert(storedValue);
}