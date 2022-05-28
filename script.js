const menu = document.getElementById('radiomenu'); 
const workCard = document.getElementById('work'); 
const playCard = document.getElementById('play'); 
const studyCard = document.getElementById('study'); 
const exerciseCard = document.getElementById('exercise'); 
const socialCard = document.getElementById('social'); 
const selfCareCard = document.getElementById('self-care'); 

getValuesForSelectedTimeperiod();

async function getValuesForSelectedTimeperiod() {
    let selectedRadioBtn = document.querySelector('input[name="timeperiod"]:checked'); 

    const res = await fetch('./data.json'); 
    const data = await res.json(); 

    data.forEach(date => {
        switch (date.title) {
            case 'Work': 
                fillValues(getIdLastTimeperiod('work'), getIdCurrentValue('work'), getIdPreviousValue('work'), selectedRadioBtn, date);
                break; 
            case 'Play': 
                fillValues(getIdLastTimeperiod('play'), getIdCurrentValue('play'), getIdPreviousValue('play'), selectedRadioBtn, date);
                break; 
            case 'Study':
                fillValues(getIdLastTimeperiod('study'), getIdCurrentValue('study'), getIdPreviousValue('study'), selectedRadioBtn, date);
                break; 
            case 'Exercise':
                fillValues(getIdLastTimeperiod('exercise'), getIdCurrentValue('exercise'), getIdPreviousValue('exercise'), selectedRadioBtn, date);
                break; 
            case 'Social':
                fillValues(getIdLastTimeperiod('social'), getIdCurrentValue('social'), getIdPreviousValue('social'), selectedRadioBtn, date);
                break;
            case 'Self Care':
                fillValues(getIdLastTimeperiod('self-care'), getIdCurrentValue('self-care'), getIdPreviousValue('self-care'), selectedRadioBtn, date);
        }
    }); 
}

function getIdLastTimeperiod(casename) {
    return document.getElementById(`${casename}-last-timeperiod`);
}

function getIdCurrentValue(casename) {
    return document.getElementById(`${casename}-current`); 
}

function getIdPreviousValue(casename) {
    return document.getElementById(`${casename}-previous`);
}

function fillValues(lastTimeperiod, currentValue, previousValue, selectedRadioBtn, date) {
    if (selectedRadioBtn.value === 'daily') {
        lastTimeperiod.innerHTML = 'Day';
        currentValue.innerHTML = date.timeframes.daily.current;
        previousValue.innerHTML = date.timeframes.daily.previous;

    } else if (selectedRadioBtn.value === 'weekly') {
        lastTimeperiod.innerHTML = 'Week';
        currentValue.innerHTML = date.timeframes.weekly.current;
        previousValue.innerHTML = date.timeframes.weekly.previous;

    } else if (selectedRadioBtn.value === 'monthly') {
        lastTimeperiod.id.innerHTML = 'Month';
        currentValue.innerHTML = date.timeframes.monthly.current;
        previousValue.innerHTML = date.timeframes.monthly.previous;
    }
}

menu.addEventListener('change', getValuesForSelectedTimeperiod);