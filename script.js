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
        if (date.title === 'Work') {
            const workLastTimeperiod = document.getElementById('work-last-timeperiod'); 
            const workCurrentValue = document.getElementById('work-current'); 
            const workPreviousValue = document.getElementById('work-previous'); 

            fillValues(workLastTimeperiod, workCurrentValue, workPreviousValue, selectedRadioBtn, date);

        } else if (date.title === 'Play') {
            const playLastTimeperiod = document.getElementById('play-last-timeperiod'); 
            const playCurrentValue = document.getElementById('play-current'); 
            const playPreviousValue = document.getElementById('play-previous'); 

            fillValues(playLastTimeperiod, playCurrentValue, playPreviousValue, selectedRadioBtn, date);

        } else if (date.title === 'Study') {
            const studyLastTimeperiod = document.getElementById('study-last-timeperiod'); 
            const studyCurrentValue = document.getElementById('study-current'); 
            const studyPreviousValue = document.getElementById('study-previous'); 

            fillValues(studyLastTimeperiod, studyCurrentValue, studyPreviousValue, selectedRadioBtn, date);

        } else if (date.title === 'Exercise') {
            const exerciseLastTimeperiod = document.getElementById('exercise-last-timeperiod'); 
            const exerciseCurrentValue = document.getElementById('exercise-current'); 
            const exercisePreviousValue = document.getElementById('exercise-previous'); 

            fillValues(exerciseLastTimeperiod, exerciseCurrentValue, exercisePreviousValue, selectedRadioBtn, date);

        } else if (date.title === 'Social') {
            const socialLastTimeperiod = document.getElementById('social-last-timeperiod'); 
            const socialCurrentValue = document.getElementById('social-current'); 
            const socialPreviousValue = document.getElementById('social-previous'); 

            fillValues(socialLastTimeperiod, socialCurrentValue, socialPreviousValue, selectedRadioBtn, date);

        } else if (date.title === 'Self Care') {
            const selfCareLastTimeperiod = document.getElementById('self-care-last-timeperiod'); 
            const selfCareCurrentValue = document.getElementById('self-care-current'); 
            const selfCarePreviousValue = document.getElementById('self-care-previous'); 

            fillValues(selfCareLastTimeperiod, selfCareCurrentValue, selfCarePreviousValue, selectedRadioBtn, date);
        }
    }); 
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