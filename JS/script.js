window.onload = ()=>{
    getAdvice()
}
const button = document.querySelector('.advice__btn')
const adviceText = document.querySelector('.advice__text')
const adviceNumber = document.querySelector('.advice__number span')


button.addEventListener('click',getAdvice)

async function getAdvice() {
    try {
        response = await fetch('https://api.adviceslip.com/advice');
        data = await response.json();
        advice = data.slip.advice;
        adviceId = data.slip.id;
        //update the advice number
        adviceNumber.innerText = adviceId;
        //update the advice text
        adviceText.innerText= advice;
    } catch (error) {
        console.log(error);
    }
    
}