          let fact = document.querySelector("#fact");
          let factText = document.querySelector("#factText");
          let numberInput = document.querySelector("#numberInput");
                // Using the fetch API to get the value 
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
                else if(!check.checked)
                    {
                   
           let getFactFetch = () => {
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
                 numberInput.addEventListener('input', getFactFetch);
                    }
                }

                // This will be the default in case the random year is not triggered
                 let getFactFetch = () => {
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
                 numberInput.addEventListener('input', getFactFetch);
            

         

      