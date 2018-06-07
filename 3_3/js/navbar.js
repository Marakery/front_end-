var menu = document.getElementById('menu');
menu.addEventListener('click', adaptiveMenu);

function adaptiveMenu() {
    var x = document.getElementById('menu');
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});


$(document).ready(function () {
    $('#menu').on('click', 'a', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 300);
    });
});


window.onload = function () {
    showAllSerials();
    modalWindow();
    closeModalWindowClicked();
    validateForm();
}


function showAllSerials() {
    document.getElementById('hideAndShowButton').addEventListener('click', showMore);

    function showMore() {
        document.getElementById('hideAndShowButton').style.display = 'none';
        document.getElementById('serials_hiddend').classList.add('serials_showmore_visible');
    }
}


function modalWindow() {
    document.getElementById('write_me').addEventListener('click', openModalWindow);
    var modal = document.getElementById('modal_form');
    var body = document.body;

    function openModalWindow() {
        modal.style.display = 'block';
        body.style.overflowY = 'hidden';
    }
}



function closeModalWindowClicked() {
    document.getElementById('close').addEventListener('click', closeModalWindow);
    var modal = document.getElementById('modal_form');
    var body = document.body;

    function closeModalWindow() {
        modal.style.display = 'none';
        body.style.overflowY = 'auto';
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            body.style.overflowY = 'auto';
        }
    }
}


function validateForm() {
    var form = document.getElementById('modal_content');
    form.addEventListener('submit', validate);

    function validate() {

        var email = document.getElementById('email');
        var adr_pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        var emptyEmail = document.getElementsByClassName('emptyEmail');

        var emptyFields = document.getElementsByClassName('emptyFields');
        for (var i = 0; i < emptyFields.length; i++) {
            if (!emptyFields[i].value) {
                emptyFields[i].classList.add('empty');

            }
            event.preventDefault();
        }
    }




    var emptyFields = document.getElementsByClassName('emptyFields');
    for (var i = 0; i < emptyFields.length; i++) {
        emptyFields[i].addEventListener('click', function () {
            this.classList.remove('empty');
        });   
    }
 
    
    
}

