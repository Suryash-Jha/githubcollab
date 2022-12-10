
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
                        a.target= "_blank";
                        // a.innerHTML= content;
                        const but= document.createElement('button');
                        but.className= "but";
                        but.innerHTML= content;
                        but.style.border= "black";
                        but.style.borderRadius= "25px";
                        but.style.backgroundColor= "#661919";
                        but.style.fontSize= "20px";
                        but.style.color= "white";
                        but.style.height= "100%";
                        but.style.width= "100%";
                        a.appendChild(but);
                        document.querySelector(`#question${i+1}`).appendChild(a);
                    }
            }

            else{
                fetch('https://script.google.com/macros/s/AKfycbxwVi0ds51Zd9H0YrpDFttK1pEJpGMcv1ccO1bde6k2VUs7RL66Zx2cqBir89MLL7-z/exec', options)
            .then(response => response.json())
            .then(response => {
                localStorage.setItem("date", currDate);
                document.querySelector("#date").innerHTML= `${currDate}`;
                const todayQuestions= response['question'][currDate];
                console.log(todayQuestions);
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
                                a.target= "_blank";
                                // a.innerHTML= content;
                                const but= document.createElement('button');
                                but.innerHTML= content;
                                but.className= "but";
                                but.style.border= "black";
                                but.style.borderRadius= "25px";
                                but.style.backgroundColor= "#661919";
                                but.style.fontSize= "20px";
                                but.style.color= "white";
                                but.style.height= "100%";
                                but.style.width= "100%";
                                a.appendChild(but);
                                document.querySelector(`#question${i+1}`).appendChild(a);
                                // document.querySelector(`#question${i+1}`).innerHTML= localStorage.getItem(`question${i+1}`);
                }
            }
                
            })
            .catch(err => console.error(err)); 
            }
 
    }