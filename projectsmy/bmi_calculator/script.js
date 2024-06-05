document.getElementById("bmiForm").addEventListener('submit', function(e){
    e.preventDefault();

    const gender= document.getElementById('gender').value;
    const age=parseFloat(document.getElementById('age').value);
    const hightFeet= parseFloat(document.getElementById('height-feet').value) ;
    const heightInches=parseFloat(document.getElementById('height-inches').value) ;
    const weight=parseFloat(document.getElementById('weight').value);

    if (gender && age && hightFeet && heightInches && weight){
        const height=((hightFeet*12)+ heightInches)*0.0254;
        const bmi=weight/(height*height);
        const resultElement=document.getElementById('result');

        let category=''
        if(bmi<18.5){
            category ='Underweight';
        }
        else if(bmi>=18.5 && bmi<24.9){
            category='Normal weight';
        }

        else if(bmi>=25 && bmi<29.9){
            category='Overweight'
        }
        else {
            category='Obese';
        }

        let resultMessage= 'Your BMI:' + bmi.toFixed(2)+ '<br>';
        resultMessage+= 'Category:' + category;

        resultElement.innerHTML= resultMessage;
    }

})