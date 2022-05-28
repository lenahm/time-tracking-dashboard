const menu = document.getElementById('radiomenu'); 

menu.addEventListener('change', () => {
    let selectedRadioBtn = document.querySelector('input[name="timeperiod"]:checked'); 
    console.log(selectedRadioBtn.value);
})