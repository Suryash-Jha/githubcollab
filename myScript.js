        // const fs = require('fs');

        function getCurrDate(){
            const date = new Date();
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            let currentDate = `${day}_${month}_${year}`;
            return currentDate;
        }

        function extractTextFromSlug(questionSlug){
            var question= questionSlug.split("/")[4].split("-").join(" ");
            return question;
        }
        function func1() {
            var todayQuestions= {};
            // console.log("hey");
            let currDate= getCurrDate();
            const options = {method: 'GET'};
            var Todate= localStorage.getItem("date");
            if(Todate== currDate){
                document.querySelector("#date").innerHTML= `${Todate}`;
                for(let i=0; i<4; i++){
                        var link= localStorage.getItem(`question${i+1}`);
                        var content= extractTextFromSlug(link);
                        const a= document.createElement('a');
                        a.href= link;
                        // a.innerHTML= content;
                        const but= document.createElement('button');
                        but.innerHTML= content;
                        but.style.border= "black";
                        but.style.borderRadius= "25px";
                        but.style.backgroundColor= "black";
                        but.style.fontSize= "20px";
                        but.style.color= "white";
                        but.style.height= "100%";
                        but.style.width= "100%";
                        a.appendChild(but);
                        document.querySelector(`#question${i+1}`).appendChild(a);
                    }
            }
            // if(0){
            //     document.querySelector("#date").innerHTML= `Date: ${Todate}`;
            //     for(let i=0; i<4; i++){
            //             var link= localStorage.getItem(`question${i+1}`);
            //             // var content= extractTextFromSlug(link);

            //             document.querySelector(`#question${i+1}`).innerHTML= `Question ${i+1}: ${content}`;
            //         }
            // }
            else{
                fetch('https://script.google.com/macros/s/AKfycbyVn4KFyZZsWPjKTvB_ZL3uxPkHseKGcmpH3M4sfTzjgnqxpNRRpVB9wJueLMZx8n1J/exec', options)
            .then(response => response.json())
            .then(response => {
                localStorage.setItem("date", currDate);
                document.querySelector("#date").innerHTML= `${currDate}`;
                const todayQuestions= response[currDate];
                if(todayQuestions== undefined){
                    document.querySelector("#queryFailed").innerHTML= "No questions for today";
                }
                else{
                    for(let i=0; i<4; i++){
                                localStorage.setItem(`question${i+1}`, todayQuestions[`Question ${i+1}`]);
                                var link= localStorage.getItem(`question${i+1}`);
                                var content= extractTextFromSlug(link);
                                const a= document.createElement('a');
                                a.href= link;
                                a.innerHTML= content;
                                document.querySelector(`#question${i+1}`).appendChild(a);
                                // document.querySelector(`#question${i+1}`).innerHTML= localStorage.getItem(`question${i+1}`);
                }
            }
                // if(currDate== localDate){
                //     localStorage.setItem("date", currDate);
                //     document.querySelector("#date").innerHTML= `${currDate}`;
                //     for(let i=0; i<4; i++){
                //         localStorage.setItem(`question${i+1}`, todayQuestions[`Question ${i+1}`]);
                //         console
                //         document.querySelector(`#question${i+1}`).innerHTML= localStorage.getItem(`question${i+1}`);
                //     }
                // }
                // else{
                //     localStorage.setItem("date", currDate);
                //     document.querySelector("#queryFailed").innerHTML= "No questions for today";
                // }
                // consolelog(todayQuestions);
                // console.log(todayQuestions);
                // console.log(todayQuestions['Question 1']);
                // var i=0;
                // localStorage.setItem(`question${i+2}`, todayQuestions['Question 1']);
                
            })
            .catch(err => console.error(err)); 
            }
 
    }



    //Previous Code
    /*
    const lastDateKey= Object.keys(todayQuestions);
                if(lastDateKey== currDate){
                    localStorage.setItem("date", lastDateKey);
                    document.querySelector("#date").innerHTML= `Date: ${Todate}`;
                    for(let i=0; i<4; i++){

                        localStorage.setItem(`question${i+1}`, todayQuestions[`'Question $i+1'`]);

                        document.querySelector(`#question${i+1}`).innerHTML= `Question ${i+1}: ${Object.values(todayQuestions[currDate])[i]}`;
                    }
                }
                else{
                    document.querySelector("#queryFailed").innerHTML= "No questions for today";
                } 
    */