"use strict";

$(document).ready(function () {});

function displayCalendar() {
    var now = new Date(),
        year = now.getFullYear(),
        month = now.getMonth(),
        date = now.getDate(),
        day = now.getDay();

    console.log(now);
    console.log(year + "-" + month + "-" + date + " " + day);
}