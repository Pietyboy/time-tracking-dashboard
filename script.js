async function switch_to_daily(){

    const frame = document.getElementsByClassName('timeframe');
    for (let i = 0; i < frame.length; i++){
        frame[i].innerHTML = '';
        frame[i].innerHTML = 'Day';
    }

    buttons_reset();
    document.querySelector('#daily_button').style.color = 'white';

    fetch("./data.json")
        .then(function (response) { return response.json(); })
        .then(function(data) {
            work(data[0].timeframes.daily);
            play(data[1].timeframes.daily);
            study(data[2].timeframes.daily);
            exercise(data[3].timeframes.daily);
            social(data[4].timeframes.daily);
            self_care(data[5].timeframes.daily);
        })
}

async function switch_to_weekly(){
    const frame = document.getElementsByClassName('timeframe');
    for (let i = 0; i < frame.length; i++){
        frame[i].innerHTML = '';
        frame[i].innerHTML = 'Week';
    }

    buttons_reset();
    document.querySelector('#weekly_button').style.color = 'white';

    fetch("./data.json")
        .then(function (response) { return response.json(); })
        .then(function(data) {
            work(data[0].timeframes.weekly);
            play(data[1].timeframes.weekly);
            study(data[2].timeframes.weekly);
            exercise(data[3].timeframes.weekly);
            social(data[4].timeframes.weekly);
            self_care(data[5].timeframes.weekly);
        })
}

async function switch_to_monthly(){
    const frame = document.getElementsByClassName('timeframe');
    for (let i = 0; i < frame.length; i++){
        frame[i].innerHTML = '';
        frame[i].innerHTML = 'Month';
    }

    buttons_reset();
    document.querySelector('#monthly_button').style.color = 'white';

    fetch("./data.json")
        .then(function (response) { return response.json(); })
        .then(function(data) {
            work(data[0].timeframes.monthly);
            play(data[1].timeframes.monthly);
            study(data[2].timeframes.monthly);
            exercise(data[3].timeframes.monthly);
            social(data[4].timeframes.monthly);
            self_care(data[5].timeframes.monthly);
        })
}

function buttons_reset(){
    document.querySelector('#daily_button').style.color = '#6f76c8';
    document.querySelector('#weekly_button').style.color = '#6f76c8';
    document.querySelector('#monthly_button').style.color = '#6f76c8';
}

function work(timeframe){
    const previous_hours = document.querySelector('#work_previous_hours');
    const current_hours = document.querySelector('#work_current_hours');

    previous_hours.innerHTML = '';
    current_hours.innerHTML = '';

    previous_hours.innerHTML = timeframe.previous;
    current_hours.innerHTML = timeframe.current;
}

function play(timeframe){
    const previous_hours = document.querySelector('#play_previous_hours');
    const current_hours = document.querySelector('#play_current_hours');

    previous_hours.innerHTML = '';
    current_hours.innerHTML = '';

    previous_hours.innerHTML = timeframe.previous;
    current_hours.innerHTML = timeframe.current;
}

function study(timeframe){
    const previous_hours = document.querySelector('#study_previous_hours');
    const current_hours = document.querySelector('#study_current_hours');

    previous_hours.innerHTML = '';
    current_hours.innerHTML = '';

    previous_hours.innerHTML = timeframe.previous;
    current_hours.innerHTML = timeframe.current;
}

function exercise(timeframe){
    const previous_hours = document.querySelector('#exercise_previous_hours');
    const current_hours = document.querySelector('#exercise_current_hours');

    previous_hours.innerHTML = '';
    current_hours.innerHTML = '';

    previous_hours.innerHTML = timeframe.previous;
    current_hours.innerHTML = timeframe.current;
}

function social(timeframe){
    const previous_hours = document.querySelector('#social_previous_hours');
    const current_hours = document.querySelector('#social_current_hours');

    previous_hours.innerHTML = '';
    current_hours.innerHTML = '';

    previous_hours.innerHTML = timeframe.previous;
    current_hours.innerHTML = timeframe.current;
}

function self_care(timeframe){
    const previous_hours = document.querySelector('#self_care_previous_hours');
    const current_hours = document.querySelector('#self_care_current_hours');

    previous_hours.innerHTML = '';
    current_hours.innerHTML = '';

    previous_hours.innerHTML = timeframe.previous;
    current_hours.innerHTML = timeframe.current;
}