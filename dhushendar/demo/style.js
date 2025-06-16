var inputvalue = document.getElementById('user-input');

const calculate = document.querySelectorAll('.calculate').forEach(function(item){
    item.addEventListener('click', function(e){
        inputvalue.innerText = eval(inputvalue.innerText);
        let lastvalue = inputvalue.innerText.substring(
            inputvalue.innerText.length,inputvalue.innerText - 1);
        
        if(!isNaN(lastvalue) && e.target.innerText === '='){
            inputvalue.innerText = eval(inputvalue.innerText);
        }
        else if(e.target.innerText === "AC"){ 
            inputvalue.innerText = "0";
        } 
        else if(e.target.innerText === "CL"){
            inputvalue.innerText = inputvalue.innerText.substring(
                0, inputvalue.innerText.length - 1);
            if(inputvalue.innerText == 0){
                inputvalue.innerText = "0";
            }
            else{
                if(!isNaN(lastvalue)){
                    inputvalue.innerText += e.target.innerText;
                }
            }
        }
        else{
            inputvalue.innerText += e.target.innerText;
        }
    });
});

const number = document.querySelectorAll(".numbers").forEach(function(item){
    item.addEventListener('click', function(e){
        if(inputvalue.innerText === '0'){
            inputvalue.innerText = "";
        }
        inputvalue.innerText += e.target.innerText.trim();
    });

});