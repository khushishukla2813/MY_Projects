function isPalindrome(str){
    const cleanstr =str.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log(cleanstr);
    const reversedStr =cleanstr.split('').reverse().join('');
    return cleanstr==reversedStr;


}




function palindromeChecker(){
    const inputText=document.getElementById('inputText');
    const result= document.getElementById('result');
    if(isPalindrome(inputText.value)){
        result.textContent=`"${inputText.value}" is a Palindrome`;

    }
    else{
        result.textContent=`"${inputText.value}" is not a Palindrome`;

    }

    result.classList.add('fadeIn');
    inputText.value= '';
}
document.getElementById('checkButton').addEventListener("click",palindromeChecker);
