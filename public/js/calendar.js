$(document).ready(function(){
    displayCalendar();
});

function displayCalendar(year = new Date().getFullYear(), month = new Date().getMonth()){  
    let html = "",
        endDates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], // 매 달 마지막 날짜
        firstDate = new Date(Date.UTC(year, month, 1)), // 해당 달 첫째날
        startDayOfWeek = 0, // 한 주의 시작은 일요일
        columns = (month === 2) && (startDayOfWeek === firstDate.getDay()) ? 4 : 5, // 달력 전체 column 수 계산. 2월 중 달 첫째날 요일이 한 주 시작 요일과 같은 경우는 4줄, 다른 모든 경우는 5줄이다.
        day=1;

    html += '<div>' + (month+1) + '월</div>\
            <table>\
            <tr>\
                <td>일</td>\
                <td>월</td>\
                <td>화</td>\
                <td>수</td>\
                <td>목</td>\
                <td>금</td>\
                <td>토</td>\
            </tr>';

    let space = firstDate.getDay(); // 첫 주 시작일 전 빈칸 갯수
    for(let i=0; i<columns; i++){
        html+='<tr>';

        for(let j=0; j<space; j++)  // 1. 빈칸을 출력해준다.
            html += '<td></td>';    

        for(let j=0; j<7-space; j++){   // 2. 칸에 맞게 숫자를 출력한다.
            html += `<td>${day++}</td>`;

            if(day > endDates[month]) break; // 3. 숫자가 endDates 보다 크면 루프 빠져나옴
        }

        space=0;
        html+='</tr>';
    }
    html+='</table>';

    document.getElementById('calendar').innerHTML = html;
}

