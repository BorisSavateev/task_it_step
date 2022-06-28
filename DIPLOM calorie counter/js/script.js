
// контйнер для контроля изменений

document.querySelectorAll("input").forEach((item)=>item.oninput = () => {


// получение данных
let defaultAge = document.querySelector(`#age`)

let age = Number(defaultAge.value);

let defaultHeight = document.querySelector(`#height`)

let height = Number(defaultHeight.value);

let defaultWeight = document.querySelector(`#weight`)

let weight = Number(defaultWeight.value);

let activity = document.querySelector('input[name=activity]:checked').value;

let gender = document.querySelector('input[name=gender]:checked').value;

let hiddenBlock = document.querySelector(`.counter__result`)

// 1 работа с кнопкой рассчитать

const buttonSubmit = document.querySelector(`.form__submit-button.button`) 


let ifExecuteSubmit = () => {if (age >0 && height >0 && weight >0) {buttonSubmit.removeAttribute("disabled")
}}

ifExecuteSubmit()

buttonSubmit.setAttribute("onclick", "return false")


buttonSubmit.addEventListener(`click`, () =>{
    hiddenBlock.classList.remove(`counter__result--hidden`)

    // 1.1 вывод значений формул

    document.querySelector(`#calories-norm`).textContent = savingWeight(gender, weight,height, activityCoefficient).toFixed(1)

    document.querySelector(`#calories-minimal`).textContent = lossWeight.toFixed(1)

    document.querySelector(`#calories-maximal`).textContent = gainWeight.toFixed(1);

})

// работа с кнопкой сброса

let buttonReset = document.querySelector(`.form__reset-button`) 


let ifExecuteReset = () => {if (age >0|| height >0 || weight >0) {buttonReset.removeAttribute("disabled")}} 

ifExecuteReset()

buttonReset.addEventListener(`click`, () =>{
    hiddenBlock.classList.add(`counter__result--hidden`)
    defaultAge.value = ``
    defaultHeight.value = ``
    defaultWeight.value = ``

    document.querySelectorAll('input[name=activity]')[0].checked = true;

    document.querySelectorAll('input[name=gender]')[0].checked = true;

    buttonSubmit.setAttribute("disabled", "disabled" )
    buttonReset.setAttribute("disabled", "disabled" )
})



// формулы и константы

let activityCoefficients = {
    min: 1.2,
    low: 1.375,
    medium:  1.55,
    high: 1.725,
    max: 1.9
};

let activityCoefficient = activityCoefficients[activity];


let savingWeight = (gender, weight,height, activityCoefficient) => {return ((gender === `male`) ? ((10 * weight) + (6.25 * height) - (5 * age) + 5)  : ((10 * weight) + (6.25 * height) - (5 * age) - 161)) * activityCoefficient;}


let lossWeight = savingWeight(gender, weight,height, activityCoefficient) * 0.85;

let gainWeight = savingWeight(gender, weight,height, activityCoefficient) * 1.15;


})



