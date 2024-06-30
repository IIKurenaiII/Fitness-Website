
var navbarbutton = document.getElementById("btn");
navbarbutton.addEventListener("click",function(){
    window.location.href = "store.html";
});
var orderbutton3 = document.getElementById("orderbtn3");
var storebutton = document.getElementById("storebtn");

orderbutton3.addEventListener("click",function(){
    window.location.href = "order3.html";
});
storebutton.addEventListener("click",function(){
    window.location.href = "store.html";
});

//messengers
var buttoninstagram = document.getElementById("ig");
var buttonfacebook = document.getElementById("fb");
var buttonyoutube = document.getElementById("yt");
var buttontelegram = document.getElementById("tl");

buttoninstagram.addEventListener("click", function(){
    window.location.href= "https://www.instagram.com/";
});

buttonfacebook.addEventListener("click", function(){
    window.location.href= "https://www.facebook.com/?locale=uk_UA";
});

buttonyoutube.addEventListener("click", function(){
    window.location.href= "https://www.youtube.com/";
});

buttontelegram.addEventListener("click", function(){
    window.location.href= "https://web.telegram.org/a/";
});

//scroll-button
document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.querySelector('.button__scroll');

    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    function scrollToTop() {
        var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentPosition > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, currentPosition - currentPosition / 8);
        }
    }

    scrollToTopBtn.addEventListener('click', scrollToTop);
});

//select 
function closeDropdown() {
    console.log('Dropdown closed');
}


function toggleVisibility(showId, hideId1, hideId2, button) {
    var showBlock = document.getElementById(showId);
    var hideBlock1 = document.getElementById(hideId1);
    var hideBlock2 = document.getElementById(hideId2);

    showBlock.classList.remove('hidden');
    hideBlock1.classList.add('hidden');
    hideBlock2.classList.add('hidden');

    var label = button.querySelector('.label');
    if (label.textContent === 'Вибрати') {
        label.textContent = 'Відмінити';
        document.getElementById('orderButton').disabled = false;
    } else {
        label.textContent = 'Вибрати';
        hideBlock1.classList.remove('hidden');
        hideBlock2.classList.remove('hidden');
        document.getElementById('orderButton').disabled = true;
    }
}

function placeOrder() {
    var selectedBlock = document.querySelector('.stage__block:not(.hidden)');

    if (selectedBlock) {
        var blockId = selectedBlock.id;

        var orderPages = {
            'block1': 'order.html',
            'block2': 'order2.html',
            'block3': 'order3.html'
        };

        var orderPageUrl = orderPages[blockId];

        if (orderPageUrl) {
            window.location.href = orderPageUrl;
        }
    }
}



//modal-window
function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'flex';
}

window.onclick = function (event) {
    var modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

//order-counter
const switches = document.querySelectorAll('.stage1__parts input[type="checkbox"]');
const counter = document.getElementById('counter');

let activatedSwitchesCount = 0;

function updateCounter() {
  counter.textContent = `Покращень вибрано: ${activatedSwitchesCount}`;
}

switches.forEach(switchElement => {
  switchElement.addEventListener('change', function() {
    if (this.checked) {
      activatedSwitchesCount++;
    } else {
      activatedSwitchesCount--;
    }
    updateCounter();
  });
});

updateCounter();


//order-modal
function openModalorder() {
    var modalo = document.getElementById('myModal-order');
    modalo.style.display = 'flex';
}

function closeModalorder() {
    var modalo = document.getElementById('myModal-order');
    modalo.style.display = 'none';
}

window.onclick = function (event) {
    var modalo = document.getElementById('myModal-order');
    if (event.target === modalo) {
        modalo.style.display = 'none';
    }
}

//order-link
function redirectTo(page) {
    window.location.href = page;
}


//registration modal
function openModalReg () {
    var modal = document.getElementById('myModalReg');
    modal.style.display = 'flex';
}

function closeModalReg () {
    var modal = document.getElementById('myModalReg');
    modal.style.display =  'none';
}

document.addEventListener('click', function (event) {
    var modal = document.getElementById('myModalReg');
    if (event.target === modal) {
        closeModalReg();
    }
});

