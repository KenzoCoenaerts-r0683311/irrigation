let name = document.getElementById("name");
let surname = document.getElementById("surname");
let email = document.getElementById("email");
let pass = document.getElementById("password");
let repeatPass = document.getElementById("repeatPass");

check(name, '^[a-zA-Z]+$');
check(surname, '^[a-zA-Z]+$');
check(email, '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');
check(pass, '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})');
check(repeatPass, '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})');


function check(elem, rgx) {
    elem.addEventListener("blur", function( event ) {
        let re = new RegExp(rgx);
        elem.style.borderColor = re.test(elem.value) ? "green" : "red";
    }, true);
}