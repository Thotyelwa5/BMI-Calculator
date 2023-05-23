let heightInput = document.querySelector("#height");
let weightInput = document.querySelector("#weight");
let calculateButton = document.querySelector("#calculate");
let result = document.querySelector("#result");
let bmiNum=0;

calculateButton.addEventListener('click', ()=>{
   
    if ( validation()) {
        calcBMI()
        console.log(bmiNum);
    }
   
})

function calcBMI() {
    bmiNum=eval(weightInput.value/Math.pow(heightInput.value/100,2)).toFixed(2)
    if (bmiNum<18.4) {
        result.textContent=`BMI :${bmiNum}, You are underweight 😁`
    } else if (bmiNum>=18.5 && bmiNum<=24.9){
        result.textContent=`BMI :${bmiNum}, You are normal weight 😍`
        
    }else if (bmiNum>=25 && bmiNum<=29.9) {
        result.textContent=`BMI :${bmiNum},You are overweight 😊`
        
    } else if(bmiNum>=30){
        result.textContent=`BMI :${bmiNum}, You are Obese😶`
        
    }
    
}
document.querySelector('#clear').addEventListener('click',()=>{
    clear()
})
function clear() {
    heightInput.value="";
    weightInput.value="";
    result.textContent=""
    
}
function validation() {
    if (isNaN(heightInput.value) || heightInput.value.length ==0) {
        result.textContent="Wrong input"
        return false
    }else if (isNaN(weightInput.value) || weightInput.value.length ==0) {
        result.textContent="Wrong input"
        return false
    }else{
        return true
    }
    
}

