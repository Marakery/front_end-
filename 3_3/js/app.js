window.onload = onWindowLoaded;

function onWindowLoaded() {

    tryToListen('hideAndShowButton', 'click', showAllSerials);
    tryToListen('write_me', 'click', openWindow);
    tryToListen('close', 'click', closeWindow);
    tryToListen('submit', 'click', validateForm);
    tryToListen('name', 'click', removeClass);
    tryToListen('email', 'click', removeClass);
    closeWindow();
}

function getById(id) {
    return document.getElementById(id);
}

function tryToListen(id, eventName, func) {
    var element = getById(id);
    if (element) {
        element.addEventListener(eventName, func);
    }
}

function showAllSerials() {

    getById('serials_hiddend').classList.add('serials_showmore_visible');
    getById('hideAndShowButton').style.display = 'none';
}

function openWindow() {
    getById('modal_form').style.display = 'block';
    document.body.style.overflowY = 'hidden';
}


function closeWindow() {
    var modal = getById('modal_form');
    modal.style.display = 'none';
    document.body.style.overflowY = 'auto';

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflowY = 'auto';
        }
    }
}

function removeClass() {
    this.classList.remove('empty');
}

function validateForm() {

    var re = /\S+@\S+\.\S+/;
    var email = getById('email');
    var name = getById('name');


    if (name.value == '') {
        name.classList.add('empty');
        event.preventDefault();
    }

    if (!re.test(email.value)) {
        alert('Please enter a valid email address.');
        email.classList.add('empty');
        event.preventDefault();

    }
}
