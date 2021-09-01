var formname = document.querySelector("#FormName");
var phone = document.querySelector("#Phone");
var email = document.querySelector("#Email");
var company = document.querySelector("#Company");
var message = document.querySelector("#Message");
var submit = document.querySelector("[type='submit']");

var isStorageSupport = true;
var storageName = "";
var storagePhone = "";
var storageEmail = "";
var storageCompany = "";
var storageMessage = "";
try {
    storageName = localStorage.getItem("formname");
    storagePhone = localStorage.getItem("phone");
    storageEmail = localStorage.getItem("email");
    storageCompany = localStorage.getItem("company");
    storageMessage = localStorage.getItem("message");
    if (storageName) formname.value = storageName;
    if (storagePhone) phone.value = storagePhone;
    if (storageEmail) email.value = storageEmail;
    if (storageCompany) company.value = storageCompany;
    if (storageMessage) message.value = storageMessage;
} catch (err) {
    isStorageSupport = false;
}
if (!formname.value || !phone.value) {
    submit.classList.add("disabled");
} else {
    submit.classList.remove("disabled");
}


submit.addEventListener("click", function (evt) {
    if (formname.value && phone.value) {
        if (isStorageSupport) {
            localStorage.setItem("formname", formname.value);
            localStorage.setItem("phone", phone.value);
            localStorage.setItem("email", email.value);
            localStorage.setItem("company", company.value);
            localStorage.setItem("message", message.value);
        }
    } else {
        evt.preventDefault();
        if (!formname.value) {
            formname.classList.remove("modal-error");
            formname.offsetWidth;
            formname.classList.add("modal-error");
        }
        if (!phone.value) {
            phone.classList.remove("modal-error");
            phone.offsetWidth;
            phone.classList.add("modal-error");
        }
    }
});

var activateSubmit = function () {
    if (!formname.value || !phone.value) {
        submit.classList.add("disabled");
    } else {
        submit.classList.remove("disabled");
    }
    if (!formname.value) {
        document.querySelector("#FormName + div > label:last-of-type").classList.add("showed");
    } else {
        document.querySelector("#FormName + div > label:last-of-type").classList.remove("showed");
    }
    if (!phone.value) {
        document.querySelector("#Phone + div > label:last-of-type").classList.add("showed");
    } else {
        document.querySelector("#Phone + div > label:last-of-type").classList.remove("showed");
    }
}

formname.addEventListener("input", activateSubmit);
phone.addEventListener("input", activateSubmit);

function activate(target) {
    document.getElementById(target).focus();
}
