$('#currentDay').text(moment().format('LLLL'));
var currentTime = moment().hour();


// Save event content in local storage
$('.save-btn').click(function() {
    var eventInputs = {
        nine: $('#nine-am').val(),
        ten: $('#ten-am').val(),
        eleven: $('#eleven-am').val(),
        twelve: $('#twelve-pm').val(),
        one: $('#one-pm').val(),
        two: $('#two-pm').val(),
        three: $('#three-pm').val(),
        four: $('#four-pm').val(),
        five: $('#five-pm').val()
    };
    localStorage.setItem('events', JSON.stringify(eventInputs));
    console.log(JSON.stringify(eventInputs));
});

// Render events saved in local storage
function renderEvents() {
    var savedEvents = JSON.parse(localStorage.getItem('events'));
    if (savedEvents === null) {
        return
    }
    if (savedEvents.hasOwnProperty('nine')) {
        $('#nine-am').text(savedEvents.nine);
    }
    if (savedEvents.hasOwnProperty('ten')) {
        $('#ten-am').text(savedEvents.ten);
    }
    if (savedEvents.hasOwnProperty('eleven')) {
        $('#eleven-am').text(savedEvents.eleven);
    }
    if (savedEvents.hasOwnProperty('twelve')) {
        $('#twelve-pm').text(savedEvents.twelve);
    }
    if (savedEvents.hasOwnProperty('one')) {
        $('#one-pm').text(savedEvents.one);
    }
    if (savedEvents.hasOwnProperty('two')) {
        $('#two-pm').text(savedEvents.two);
    }
    if (savedEvents.hasOwnProperty('three')) {
        $('#three-pm').text(savedEvents.three);
    }
    if (savedEvents.hasOwnProperty('four')) {
        $('#four-pm').text(savedEvents.four);
    }
    if (savedEvents.hasOwnProperty('five')) {
        $('#five-pm').text(savedEvents.five);
    }
    
};

renderEvents();

// Clear events from scheduler

// $('.clear-btn').click(function() {
//     var timeSlot = $(this).attr('value');

// })

// var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
// for (elem of hours) {
//     if (currentTime === elem) {
//         $('.form-control').css('background-color', 'red');
//         console.log('current time');
//     }
//     else if (currentTime > elem) {
//         $('.form-control').css('background-color', 'grey');
//         console.log('already passed');
//     }
//     else if (currentTime < elem) {
//         $('.form-control').css('background-color', 'green');
//         console.log('coming up');
//     }
// }

// function checkCurrentTime()


// if (currentTime.isBetween(moment({hour: 14}), moment({hour: 15}))) {
//     $('.form-control').css('background-color', 'red');
//     console.log('hello');
// }

function checkCurrentTime() {
    // 9am
    if (currentTime === 9) {
        $('#nine-am').css('background-color', 'lightcoral');
        console.log('current time');
    }
    else if (currentTime > 9) {
        $('#nine-am').css('background-color', 'grey');
        console.log('already passed');
    }
    else if (currentTime < 9) {
        $('#nine-am').css('background-color', 'lightgreen');
        console.log('coming up');
    }
    // 10am
    if (currentTime === 10) {
        $('#ten-am').css('background-color', 'lightcoral');
        console.log('current time');
    }
    else if (currentTime > 10) {
        $('#ten-am').css('background-color', 'grey');
        console.log('already passed');
    }
    else if (currentTime < 10) {
        $('#ten-am').css('background-color', 'lightgreen');
        console.log('coming up');
    }
    // 11am
    if (currentTime === 11) {
        $('#eleven-am').css('background-color', 'lightcoral');
        console.log('current time');
    }
    else if (currentTime > 11) {
        $('#eleven-am').css('background-color', 'grey');
        console.log('already passed');
    }
    else if (currentTime < 11) {
        $('#eleven-am').css('background-color', 'lightgreen');
        console.log('coming up');
    }
    // 12pm
    if (currentTime === 12) {
        $('#twelve-pm').css('background-color', 'lightcoral');
        console.log('current time');
    }
    else if (currentTime > 12) {
        $('#twelve-pm').css('background-color', 'grey');
        console.log('already passed');
    }
    else if (currentTime < 12) {
        $('#twelve-pm').css('background-color', 'lightgreen');
        console.log('coming up');
    }
    // 1pm
    if (currentTime === 13) {
        $('#one-pm').css('background-color', 'lightcoral');
        console.log('current time');
    }
    else if (currentTime > 13) {
        $('#one-pm').css('background-color', 'grey');
        console.log('already passed');
    }
    else if (currentTime < 13) {
        $('#one-pm').css('background-color', 'lightgreen');
        console.log('coming up');
    }
    // 2pm
    if (currentTime === 14) {
        $('#two-pm').css('background-color', 'lightcoral');
        console.log('current time');
    }
    else if (currentTime > 14) {
        $('#two-pm').css('background-color', 'grey');
        console.log('already passed');
    }
    else if (currentTime < 14) {
        $('#two-pm').css('background-color', 'lightgreen');
        console.log('coming up');
    }
    // 3pm
    if (currentTime === 15) {
        $('#three-pm').css('background-color', 'lightcoral');
        console.log('current time');
    }
    else if (currentTime > 15) {
        $('#three-pm').css('background-color', 'grey');
        console.log('already passed');
    }
    else if (currentTime < 15) {
        $('#three-pm').css('background-color', 'lightgreen');
        console.log('coming up');
    }
    // 4pm
    if (currentTime === 16) {
        $('#four-pm').css('background-color', 'lightcoral');
        console.log('current time');
    }
    else if (currentTime > 16) {
        $('#four-pm').css('background-color', 'grey');
        console.log('already passed');
    }
    else if (currentTime < 16) {
        $('#four-pm').css('background-color', 'lightgreen');
        console.log('coming up');
    }
    // 5pm
    if (currentTime === 17) {
        $('#five-pm').css('background-color', 'lightcoral');
        console.log('current time');
    }
    else if (currentTime > 17) {
        $('#five-pm').css('background-color', 'grey');
        console.log('already passed');
    }
    else if (currentTime < 17) {
        $('#five-pm').css('background-color', 'lightgreen');
        console.log('coming up');
    }
}

checkCurrentTime();


