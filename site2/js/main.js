// function getHour () {
//     const todayTime = new Date ();
//     const hourTime = todayTime.getHours();
//     const secondTime = todayTime.getSeconds();

//     document.querySelector('.hour-txt').innerText = secondTime;

//     if (secondTime >= 1 && secondTime <= 30) {
//         document.querySelector('.hour-txt').classList.add('morning-range');
//         document.querySelector('.hour-txt').classList.remove('inactive');
    
//     } else if (secondTime >= 31 && secondTime <= 40) {
//         document.querySelector('.hour-txt').classList.add('afternoon-range');
//         document.querySelector('.hour-txt').classList.remove('inactive', 'morning-range');
    
//     } else {
//         document.querySelector('.hour-txt').classList.add('inactive');
//         document.querySelector('.hour-txt').classList.remove('morning-range', 'afternoon-range');
//     }
// }

// window.setInterval( function() {
//     getHour();
// }, 1000);

