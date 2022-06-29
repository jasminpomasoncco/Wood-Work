window.addEventListener("scroll", function(){
    var header=document.querySelector("header");
    header.classList.toggle('down',window.scrollY>0);
})

var menu = document.querySelector('.nav_menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
});

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

var data = google.visualization.arrayToDataTable([
['Task', 'Hours per Day'],
['Enero',     20],
['Febrero',      35],
['Marzo',  25],
['Abril', 15],
['Mayo',    5]


]);

var options = {
title: 'Carpinteros sin empleo en el 2022'
};

var chart = new google.visualization.PieChart(document.getElementById('piechart'));

chart.draw(data, options);
}
