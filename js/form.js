function valida() {
    var name1 = document.forms["contactForm"]["fname"].value;
    var phone1 = document.forms["contactForm"]["fphone"].value;
    var email1 = document.forms["contactForm"]["femail"].value;
    var error_name = validateName(name1)
    var error_email = validateEmail(email1)
    var error_phone = validatePhone(phone1)
    let suma = error_name +  error_phone + error_email
    if (suma == 0) {
        document.getElementById("contactForm").style.display = "none";
        document.getElementById("result").innerHTML = "Gracias pronto te respondemos";
        document.getElementById("containerForm").style.background = "#aacdda";
    } else {
        document.getElementById("result").innerHTML = "";
    }
}
function validateName(str) {
    let error = 0;
    if (str == "") {
        document.getElementById("idName").innerHTML = "*Ingresa tu nombre";
        error = 1;
    } else if (str != "") {
        error = hasNumber(str);
        if(error == 1){
            document.getElementById("idName").innerHTML = "*Ingresa un nombre valido";
        } else {
            document.getElementById("idName").innerHTML = "";
        }
    }
    return error;
}
function hasNumber(str) {
    let i;
    let num = "0123456789";
    let err = 0;
    let len = num.length;
    for (i=0;i<len;i++){
        if(str.indexOf(num.charAt(i))!= -1) {
            err = 1;
            break;
        } else {
            err = 0;
        }
    }
    return err;
}
function validateEmail(str) {
    let error = 0;
    if (str == "") {
        document.getElementById("idEmail").innerHTML = "*Ingresa tu correo";
        error = 1;
    } else if (str != "") {
        error = rightEmail(str);
        if(error == 1){
            document.getElementById("idEmail").innerHTML = "*Ingresa un correo valido";
        } else {
            document.getElementById("idEmail").innerHTML = "";
        }
    }
    return error;
}
function rightEmail(valor) {
    let err=0;
    if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(valor)){
        err = 0
    } else {
        err = 1
    }
    return err;
}
function validatePhone(str) {
    let error = 0;
    if (str == "") {
        document.getElementById("idPhone").innerHTML = "*Ingresa tu teléfono";
        error = 1;
    } else {
        if (str.length < 10 || str.length > 10 ) {
            document.getElementById("idPhone").innerHTML = "*Ingresa tu teléfono a 10 dig";
            error = 1;
        } else {
            document.getElementById("idPhone").innerHTML = "";
            error = 0;
        }
    }
    return error;
}
function limit(element, max) {
    if(element.value.length >= max) {
        element.value = element.value.substr(0, max);
    }
}