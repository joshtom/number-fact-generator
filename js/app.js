          let fact = document.querySelector("#fact");
          let factText = document.querySelector("#factText");
          let numberInput = document.querySelector("#numberInput");
        //   const getFactAjax = () => {
        // //     // Getting the user input
        //     let number = numberInput.value;
        //     // Getting request from the api
        //     let xhr = new XMLHttpRequest();
        //     xhr.open('GET', 'http://numbersapi.com/'+number);

        //     xhr.onload = function (){
        //         if (this.status == 200 && number != ""){ //The alternative is number != ""
        //             // console.log(this.responseText);
        //             fact.style.display = 'block';
        //             factText.innerText = this.responseText;
        //         }
        //     }
        //     xhr.send();
        // }
        
                // Using the fetch API to get the value 
                var getFactFetch = () => {
                    let number = numberInput.value;
                    fetch('http://numbersapi.com/'+number)
                    .then(response => response.text())
                    .then(data => {
                        if (number != ""){
                            fact.style.display = 'block';
                            factText.innerText = data;
                        } else{
                            fact.style.display = 'none';
                        }
                    })
                    .catch(err => console.log(err));
                }

                // Trigger the checkbox to make the input box display random text based on the entered year
                function getRandomYear() {
                var check = document.getElementById("year");
                if (check.checked)
                    {
                        var getFactFetch = () => {
                            let number = numberInput.value;
                            fetch('http://numbersapi.com/'+number+'/year')
                            .then(response => response.text())
                            .then(data => {
                                if (number != ""){
                                    fact.style.display = 'block';
                                    factText.innerText = data;
                                } else{
                                    fact.style.display = 'none';
                                }
                            })
                            .catch(err => console.log(err));
                        }
                        numberInput.addEventListener('input', getFactFetch);
                    }
                else 
                    {
                        location.reload();
                    }
                }

        //   numberInput.addEventListener('input', getFactFetch);

          
      