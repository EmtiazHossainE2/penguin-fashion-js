1//
console.log('its working');
2//
const totalh2 = document.getElementsByTagName('h2')
for (const h2 of totalh2) {
    h2.style.color = 'lightblue'
}
3//
const backpack = document.getElementById('backpack');
backpack.style.backgroundColor = 'tomato';
4//
const cards = document.getElementsByClassName('card')
for (const card of cards) {
    card.style.borderRadius = '30px'
}
5//
// const buyBtn = document.getElementsByClassName('panda-btn-buy-now');
// onclick = buyNow;
// function buyNow() {
//     console.log('buy now clicked ')
// }

//function call kore 
function onClick() {
    console.log('Buy now clicked')
}

// direct use kore 
document.getElementById('buy-btn').addEventListener('click', function () {
    console.log('clicked')
})

6// 
const buttons = document.getElementsByClassName('panda-btn-buy-now');
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target)
    })
}

7// 
document.getElementById('your-email').addEventListener('keyup', function (event) {
    let submitBtn = document.getElementById('submit');
    if (event.target.value == 'email') {
        submitBtn.removeAttribute('disabled')
    }
    else {
        submitBtn.setAttribute('disabled', true)
    }
})

