
function validateContactForm() {
    var requestType = document.forms["contact-form"]["requesttype"];
    var yourEmail = document.forms["contact-form"]["youremail"];
    var subject = document.forms["contact-form"]["subject"];
    var message = document.forms["contact-form"]["message"];

    var errors = [];

    if (requestType.value == "") {
        requestType.classList.add("form-field-required");
        errors.push("Choose a request.\n");
    } else {
        requestType.classList.remove("form-field-required");
    }

    if (yourEmail.value == "") {
        yourEmail.classList.add("form-field-required");
        errors.push("E-mail is required.\n");
    } else {
        yourEmail.classList.remove("form-field-required");
    }

    if (subject.value == "") {
        subject.classList.add("form-field-required");
        errors.push("Subject is required.\n");
    } else {
        subject.classList.remove("form-field-required");
    }

    if (message.value == "") {
        message.classList.add("form-field-required");
        errors.push("Message is required.\n");
    } else {
        message.classList.remove("form-field-required");
    }

    if (errors.length > 0) {
        return fillTheFormNotify(errors);
    } else {
        return success(requestType.value);
    }
}

function fillTheFormNotify(errors) {
    var message = "";
    errors.forEach(error => {
        message += error;
    });
    alert(message);
    return false;
}

function success(requestType) {
    alert(`${requestType} sent successfully!`);
    return false;
}