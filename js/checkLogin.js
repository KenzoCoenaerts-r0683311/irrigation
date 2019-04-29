let name = document.getElementById("name");
let pass = document.getElementById("password");

check(name, '^[a-zA-Z]+$');
check(pass, '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})');


function check(elem, rgx) {
    elem.addEventListener("blur", function( event ) {
        let re = new RegExp(rgx);
        elem.style.borderColor = re.test(elem.value) ? "green" : "red";
    }, true);
}