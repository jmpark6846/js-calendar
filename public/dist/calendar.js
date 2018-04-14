'use strict';

$(document).ready(function () {
    displayCalendar();
});

function displayCalendar() {
    var now = new Date(),
        currentYear = now.getFullYear(),
        currentMonth = now.getMonth(),
        currentDate = now.getDate(),
        currentDay = now.getDay();

    var html = "";

    var endDates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var firstDate = new Date(Date.UTC(currentYear, currentMonth, 1)),
        startDayOfWeek = 0,
        // 한 주의 시작은 월요일
    columns = currentMonth === 2 && startDayOfWeek === firstDate.getDay() ? 4 : 5,
        day = 1;

    html += '<table> 달력\
            <tr>\
                <td>월</td>\
                <td>화</td>\
                <td>수</td>\
                <td>목</td>\
                <td>금</td>\
                <td>토</td>\
                <td>일</td>\
            </tr>';

    for (var i = 1; i <= columns; i++) {
        html += '<tr>';
        for (var j = 0; j < 7; j++) {
            html += i === 1 && firstDate.getDay() !== j ? '<td></td>' : '<td>' + day++ + '</td>';
        }
        html += '</tr>';
    }
    html += '</table>';

    document.getElementById('calendar').innerHTML = html;
}