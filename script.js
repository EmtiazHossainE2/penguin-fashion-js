console.log('hi');
console.log('its working ')

const header1 = document.getElementsByTagName('h1');
for (const h1 of header1) {
    h1.style.color = '#30cf14';
}

/* 
১. আমি যদি বলি কোন একটা এলিমেন্ট কে সিলেক্ট করে নিয়ে এসে console log করে দেখাতে হবে। তুমি কি সেটা করে দেখাতে পারবে? 

২. সেখানে একদম হেডার এ একটা buy now বাটন আছে। সেই বাটনে একটা ক্লিক হ্যান্ডলার যোগ করতে হবে? সেটা কি করতে পারবে? যদি পারো তাহলে সেই বাটনে ক্লিক করলে উপরে যেখানে BE THE PENGUIN এই কথাগুলো আছে সেখানে BE THE PENGUIN এর পরিবর্তে "I AM PENGUIN" কথাটা লিখে দিতে পারবে? 
*/

const copyRight = document.getElementById('copy-right');
console.log(copyRight.innerText)

document.getElementById('buy-now-btn').addEventListener('click', function () {
    const heraderText = document.getElementById('header-text');
    heraderText.innerText = 'I AM PENGUIN'
})