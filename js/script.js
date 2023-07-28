const form = document.getElementById('form')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    const weight = document.getElementById('weight').value
    const heigh = document.getElementById('height').value
    
    const bmi = (weight / (heigh * heigh).toFixed(2))

    let value = document.getElementById('value')
    let description = ''

    value.classList.add('attention')

    document.getElementById('infos').classList.remove('hidden')

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!'
    } else if (bmi >= 18.5 && bmi <= 25) {
        value.classList.remove('attention')
        value.classList.add('normal')
        description = "Você está no peso ideal!"
    } else if (bmi > 25 && bmi <= 30) {
        description = "Cuidado! você está com sobreso!"
    } else if (bmi > 30 && bmi <= 35) {
        description = "Cuidado! você está com sobreso!"
    } else if (bmi > 35 && bmi <= 40) {
        description = "Cuidado! você está com sobreso!"
    } else {
        description = "Cuidado! você está com obesidade morbida!"
    }

    console.log(bmi)
    value.textContent = bmi.toFixed(1)
    //value.textContent = bmi.replace( '.', ',');
    document.getElementById('description').textContent = description
    //
})