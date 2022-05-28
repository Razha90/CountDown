var number1 = document.getElementsByClassName('number')[0];
var number2 = document.getElementsByClassName('number')[1];
var number3 = document.getElementsByClassName('number')[2];
var number4 = document.getElementsByClassName('number')[3];

var numberM1 = document.getElementsByClassName('minute')[0];
var numberM2 = document.getElementsByClassName('minute')[1];
var numberM3 = document.getElementsByClassName('minute')[2];
var numberM4 = document.getElementsByClassName('minute')[3];

var numberH1= document.getElementsByClassName('hour')[0];
var numberH2= document.getElementsByClassName('hour')[1];
var numberH3= document.getElementsByClassName('hour')[2];
var numberH4= document.getElementsByClassName('hour')[3];

var numberD1 = document.getElementsByClassName('day')[0];
var numberD2 = document.getElementsByClassName('day')[1];
var numberD3 = document.getElementsByClassName('day')[2];
var numberD4 = document.getElementsByClassName('day')[3];

var boxFlip = document.getElementsByClassName('box-flip');

var second = 42 ;
var minute = 41;
var hour = 23;
var day = 08;
var seconds;
var minutes;
var hours;
var days;
setInterval(() => {
    second--;
    if (second < 10) {
         seconds = (second).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    } else {
        seconds = second;
    }
    if (minute < 10) {
        minutes = (minute).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    } else {
        minutes = minute;
    }
    if (hour < 10) {
        hours = (hour).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}); 
    } else {
        hours = hour;
    }
    if (day < 10) {
        days = (day).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    }else {
        days =day;
    }
    setTimeout(() => {
        number2.innerHTML = seconds;
        number4.innerHTML = seconds;
    }, 500);

    setTimeout(() => {
        document.getElementsByClassName('box-flip')[3].style.transition = '1s';
        document.getElementsByClassName('box-flip')[3].style.transform = 'rotateX(-180deg)';
    }, 130);

    setTimeout(() => {
        document.getElementsByClassName('box-flip')[3].style.transition = '0s';
        document.getElementsByClassName('box-flip')[3].style.transform = 'rotateX(0deg)';
    },900)
    
    if (second == 0) {
        second = 59;
        minute--;
        setTimeout(() => {
            boxFlip[2].style.transition = '1s';
        boxFlip[2].style.transform = 'rotateX(-180deg)';
        },130);
        setTimeout(() => {
            numberM2.innerHTML = minutes;
            numberM4.innerHTML = minutes;
        }, 500);
        setTimeout(() => {
            boxFlip[2].style.transition = '0s';
        boxFlip[2].style.transform = 'rotateX(0deg)';
        }, 900);
    };

    if (minute == 0){
        minute = 59;
        hour--;
        setTimeout(() => {
            boxFlip[1].style.transition = '1s';
        boxFlip[1].style.transform = 'rotateX(-180deg)';
        },130);
        setTimeout(() => {
            numberH2.innerHTML = hours;
            numberH4.innerHTML = hours;
        }, 500);
        setTimeout(() => {
            boxFlip[1].style.transition = '0s';
        boxFlip[1].style.transform = 'rotateX(0deg)';
        }, 900);
    }
    number1.innerHTML = seconds;
    number3.innerHTML = seconds;

    numberM1.innerHTML = minutes;
    numberM3.innerHTML = minutes;

    numberH1.innerHTML = hours;
    numberH3.innerHTML = hours;
}, 1000);

numberM1.innerHTML = minute;
numberM3.innerHTML = minute;
setTimeout(() => {
    boxFlip[2].style.transition = '1s';
    boxFlip[2].style.transform = 'rotateX(-180deg)';
    setTimeout(() => {
        numberM2.innerHTML = minute;
numberM4.innerHTML = minute;
boxFlip[2].style.transition = '0s';
boxFlip[2].style.transform = 'rotateX(0deg)';
minute--;
    }, 800);
} ,1130);

numberH1.innerHTML = hour ;
numberH3.innerHTML = hour ;
setTimeout(() => {
    boxFlip[1].style.transition = '1s';
    boxFlip[1].style.transform = 'rotateX(-180deg)';
    setTimeout(() => {
        numberH2.innerHTML = hour ;
numberH4.innerHTML = hour ;
boxFlip[1].style.transition = '0s';
    boxFlip[1].style.transform = 'rotateX(0deg)';
    }, 800);
} ,1130);

numberD1.innerHTML=day;
numberD3.innerHTML=day;
setTimeout(() => {
    boxFlip[0].style.transition = '1s';
    boxFlip[0].style.transform = 'rotateX(-180deg)';
setTimeout(() => {
    numberD2.innerHTML=day;
    numberD4.innerHTML=day;
    boxFlip[0].style.transition = '0s';
    boxFlip[0].style.transform = 'rotateX(0deg)';
}, 800);
} ,1130);

