$(document).ready(function(){
    displayCalendar();
});

function displayCalendar(){
    let now = new Date(),
        currentYear = now.getFullYear(),
        currentMonth = 4,//now.getMonth(),
        currentDate = now.getDate(),
        currentDay = now.getDay();

    let html = "";

    let endDates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let firstDate = new Date(Date.UTC(currentYear, currentMonth, 1)),
        startDayOfWeek = 0, // 한 주의 시작은 일요일
        columns = (currentMonth === 2) && (startDayOfWeek === firstDate.getDay()) ? 4 : 5,
        day=1;



    html += '<table> 달력\
            <tr>\
                <td>일</td>\
                <td>월</td>\
                <td>화</td>\
                <td>수</td>\
                <td>목</td>\
                <td>금</td>\
                <td>토</td>\
            </tr>';



    /*
    1. 빈칸을 출력해준다.
        1-1 
    2. 칸에 맞게 숫자를 출력한다.
    3. 숫자가 endDates와 같으면 루프 빠져나옴
    */
    let temp=0;
    for(let i=0; i<columns; i++){
        html+='<tr>';
        
        if(i===0){
            for(temp=0; temp<7; temp++){
                if(firstDate.getDay() !== temp)
                    html += '<td></td>';
                else
                    break;
            }
            
        }
        console.log(temp);
        for(let j=0; j<7-temp; j++){
            html += `<td> ${day++}</td>`;

            if(day > endDates[currentMonth]) break;
            
        }
        temp=0;
        html+='</tr>';
    }
    html+='</table>';

    document.getElementById('calendar').innerHTML = html;
}

