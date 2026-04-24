let status_vpopen = false
let burmalda = document.getElementById('burmalda')
let burmalnet = document.getElementById('burmalnet')
burmalnet.onclick = ()=>{
    
    if (status_vpopen) {
        burmalda.style.display = 'none';
        burmalnet.innerHTML = `<img class="reg2" src="./бургер.png">`;
        status_vpopen = false
    }
    else{
        burmalda.style.display = 'flex';
        burmalnet.innerHTML = `<img class="reg3" src="./крестик.png">`;
        status_vpopen = true
    }
}