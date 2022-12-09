        // const fs = require('fs');

        function getCurrDate(){
            const date = new Date();
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            let currentDate = `${day}_${month}_${year}`;
            return currentDate;
        }
        function func1() {
            var todayQuestions= {};
            console.log("hey");
            const options = {method: 'GET'};
            var Todate= localStorage.getItem("date");
            if(Todate== getCurrDate()){
                document.querySelector("#date").innerHTML= `${Todate}`;
                for(let i=0; i<4; i++){
                        var content= localStorage.getItem(`question${i+1}`);
                        console.log(content)
                        var a = document.createElement('a');
                        a.setAttribute("href",`${content}`);
                        a.setAttribute("target","_blank")
                        a.innerText=`${content}`
                        var div=document.querySelector(`#question${i+1}`);
                        console.log(div);
                        div.appendChild(a);
                    }
            }
            else{
                fetch('https://script.google.com/macros/s/AKfycbwkHlGDRJbaumjp0FkSZeCOEirpC6Rqgf0-JhF45dLeh6eRSLuCNp0usVQjbN7wkSb9/exec', options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                console.log("getting response")
                let currDate= getCurrDate();
                const todayQuestions= response['data'][response['data'].length-1];
                console.log(todayQuestions);
                const lastDateKey= Object.keys(todayQuestions);
                if(lastDateKey== currDate){
                    localStorage.setItem("date", lastDateKey);
                    localStorage.setItem("question1", lastDateKey);

                    for(let i=0; i<4; i++){
                        localStorage.setItem(`question${i+1}`, Object.values(todayQuestions[currDate])[i]);
                        document.querySelector(`#question${i+1}`).innerHTML= `Question ${i+1}: ${Object.values(todayQuestions[currDate])[i]}`;
                    }
                }
                else{
                    document.querySelector("#queryFailed").innerHTML= "No questions for today";
                }
            })
            .catch(err => console.error(err)); 
            }
 
    }