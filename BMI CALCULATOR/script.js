function call(){
    let weight= prompt('Enter your weight (in kg)')
    let height= prompt('Enter your height (in cm)')
    let height1= height/100
    let bmi= weight/ (height1 **2)
    let ans=`Your BMI is ${parseFloat(bmi.toFixed(2))}`
    document.getElementById("result").innerText=ans
    
    if(parseFloat(bmi.toFixed(2))<18.5){
        document.getElementById("status").innerText="Status: UnderWeight"
    }
    else if(parseFloat(bmi.toFixed(2))>18.5 && bmi.toFixed(2)<24.9 ){
        document.getElementById("status").innerText="Status: Normal"
    }
    else if(parseFloat(bmi.toFixed(2))>25 && bmi.toFixed(2)<29.9 ){
        document.getElementById("status").innerText="Status: OverWeight"
    }
    else{
        document.getElementById("status").innerText="Status: Obese"
    }
}
