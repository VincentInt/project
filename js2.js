let plus = document.getElementById('plus').onclick = () => one_count(1)
let minus = document.getElementById('minus').onclick = () => one_count(-1)
let count = document.getElementById('count')
let count_price = document.getElementById('count-price')
let obertka = document.getElementById('obertka')
let vonychka = document.getElementsByName('vonychka')
let price_list = [400, 300, 500, 200]
let selection_price = 0
let count_nice
let obertka2 = document.getElementById('obertka2')
let glav2 = document.getElementById('glav2')
let glav3 = document.getElementById('glav3')
let email = document.getElementById('email')
let fio = document.getElementById('fio')
let fioError = document.getElementById('fio-error')
let emailError = document.getElementById('email-error')

let closed = document.getElementById('closed').onclick = () =>{
    document.body.style.overflowY = 'scroll';
    obertka2.style.display = 'none';
}

function clearErrors() {
    fioError.textContent = ''
    emailError.textContent = ''
}

let yes = document.getElementById('yes').onclick = () => {
    clearErrors()
    let hasError = false

    if (!fio.value.trim()) {
        fioError.textContent = 'Введите ФИО'
        hasError = true
    } else if (fio.value.trim().length < 5) {
        fioError.textContent = 'ФИО должно содержать минимум 5 символов'
        hasError = true
    } else if (!/^[a-zA-Zа-яА-ЯёЁ\s\-]+$/.test(fio.value.trim())) {
        fioError.textContent = 'ФИО должно содержать только буквы'
        hasError = true
    } else if (!fio.value.trim().includes(' ')) {
        fioError.textContent = 'Введите фамилию и имя через пробел'
        hasError = true
    }
    
    if (!email.value.trim()) {
        emailError.textContent = 'Введите email'
        hasError = true
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        emailError.textContent = 'Введите корректный email'
        hasError = true
    }
    
    if (hasError) return
    
    obertka.style.display = 'none';
    obertka2.style.display = 'flex';
    glav2.innerHTML = `Билетов на сумму : ${count_nice*selection_price} ₽`
    glav3.innerHTML = `Отправленны по почте : ${email.value}`
}

let no = document.getElementById('no').onclick = () => { 
    obertka.style.display = 'none'; 
    document.body.style.overflowY = 'scroll'
    clearErrors()
}

vonychka.forEach((pomilsa, price) => {
    pomilsa.onclick = () => {
        bilet(price_list[price])
    }
})

function bilet(price) {
    obertka.style.display = 'flex';
    selection_price = price;
    count_nice = 1
    count.innerHTML = count_nice;
    count_price.innerHTML = `${count_nice * selection_price}₽`
    document.body.style.overflowY = 'hidden'
    fio.value = ''
    email.value = ''
    clearErrors()
}

function one_count(move) {
    count_nice += move
    if (count_nice <= 0) {
        count_nice = 0
    }
    count.innerHTML = count_nice;
    count_price.innerHTML = `${count_nice * selection_price}₽`
}

