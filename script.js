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

function hourToId(hour) {
    if (hour === 9) {
        return '#nine-am';
    }
    if (hour === 10) {
        return '#ten-am';
    }
    if (hour === 11) {
        return '#eleven-am';
    }
    if (hour === 12) {
        return '#twelve-pm';
    }
    if (hour === 13) {
        return '#one-pm';
    }
    if (hour === 14) {
        return '#two-pm';
    }
    if (hour === 15) {
        return '#three-pm';
    }
    if (hour === 16) {
        return '#four-pm';
    }
    if (hour === 17) {
        return '#five-pm';
    }

}

var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
for (elem of hours) {
    var dom = $(hourToId(elem));
    if (currentTime === elem) {
        dom.css('background-color', 'lightcoral');
        console.log('current time');
    }
    else if (currentTime > elem) {
        dom.css('background-color', 'grey');
        console.log('already passed');
    }
    else if (currentTime < elem) {
        dom.css('background-color', 'lightgreen');
        console.log('coming up');
    }
}



