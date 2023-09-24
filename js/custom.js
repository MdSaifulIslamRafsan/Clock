"use strict";
function myTime(){
	let myDate = new Date();
	//hour , minutes & second js 
	let hour,minute = (myDate.getMinutes() < 10) ? "0" + myDate.getMinutes():myDate.getMinutes();
	let second = (myDate.getSeconds() < 10) ? "0" + myDate.getSeconds():myDate.getSeconds();
	//AM & PM js
	let h = (myDate.getHours() >= 12) ? "PM" : "AM";
	if(myDate.getHours() == 0){
		hour = 12;
	}
	else if(myDate.getHours() > 12){
		hour = myDate.getHours() -12;
	}
	else{
		hour = myDate.getHours();
	}
	let curentTime = `${hour} : ${minute} : ${second}` ;
	document.getElementsByClassName('H')[0].innerHTML = curentTime;
	document.getElementsByClassName('M')[0].innerHTML = h;
	//Day , month , date & year js
	let myDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	let myMonth = ["January","Februery","Merch","April","May","June","July","Augest","September","October","November","December"];
	let date = (myDate.getDate());
	let myYear = (myDate.getFullYear());
	let currentDate = `${myDay[myDate.getDay()]} , ${date} , ${myMonth[myDate.getMonth()]} , ${myYear}`
	document.getElementsByClassName('date')[0].innerHTML = currentDate;

}

myTime();

setInterval(function(){
	myTime();
},1000);