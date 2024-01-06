let operations = ["add" , "sub" , "mul" , "div"]
      function calculate() {
        let input = document.getElementById("input");
        let result = document.getElementById("result");
        let number = Math.floor(Math.random() * 5) + 1;
        let correctResult = eval(input.value)
        console.log(correctResult);
        console.log(number);
        if(number >= 3 && number <= 5){
            let randOperation = Math.floor(Math.random() * 3);
            let rand = Math.floor(Math.random() * 10) + 1;
            console.log(operations[randOperation]);
            if(operations[randOperation] === "add"){
                result.value = correctResult + rand;
            }
            else if(operations[randOperation] === "sub"){
                result.value = correctResult - rand;
            }
            else if(operations[randOperation] === "mul"){
                result.value = correctResult * rand;
            }
            else if(operations[randOperation] === "div"){
                result.value = correctResult/rand;
            }
        }
        else{
            result.value = correctResult
        }

        if(isNaN(result.value) || result.value == undefined){
            alert("Please Enter equation to solve")
            result.value = "";
        }
      }