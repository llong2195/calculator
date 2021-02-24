function getOldResult(){
    return document.getElementById('old_result').innerText;
}

function showOldResult(num){
    document.getElementById('old_result').innerText = num;
}

function getResult(){
    return document.getElementById('new_result').innerText;
}

function showResult(num){
    if(num == ""){
        document.getElementById('new_result').innerText = "";
    }
    else
        document.getElementById('new_result').innerText = Number(num);
}
function convertToString(num){
    let n = Number(num);
    return n.toLocaleString('en');
}
function convertToNumber(num){
    return Number(num.replace(/,/g,''));
}

let number = document.getElementsByClassName('number');

for( i = 0; i < number.length; i++){
    number[i].addEventListener('click', function(){
        let result = getResult().toString();
        if(result.length == 10) result = NaN;
        if(result != NaN){
            if(checkFloat == true){
                checkFloat = false;
            }
            result += this.id;
            showResult(result);
        }
    })
}

let systems = document.getElementsByClassName('systems');
let checkFloat = false;
for( i = 0; i < systems.length; i++){
    systems[i].addEventListener('click', function(){
        if(this.id == 'C'){
            showOldResult('');
            showResult('');
        }
        else if(this.id == 'DEL'){
            let result = getResult().toString();
            if(result){
                result = result.substr(0, result.length-1);
                showResult(result);
            }
        }
        else if(this.id == '+/-'){
            let result = Number(getResult());
            if(result){
                result = result*(-1);
                result = result.toString();
                showResult(result);
            }
        }
        else if(this.id == '.'){
            let result = getResult().toString();
            if(result.indexOf('.')==-1){
                checkFloat = true;
                result+='.';
                document.getElementById('new_result').innerText = result;
            } 
        }
        else{
            let old_result = getOldResult()
            let new_result = getResult();
            if(new_result!=''){
                old_result += new_result;
                if(this.id == '='){
                    let result = eval(old_result);
                    showOldResult('');
                    showResult(result);
                }
                else{
                    old_result += this.id;
                    showResult('');
                    showOldResult(old_result);
                }
            }

        }
    })
}