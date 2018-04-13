console.log('JS is ready');

let clickCount = 0;

$(document).ready(onReady);

function onReady() {
    console.log('jQuery is ready');
    $('#counterButton').on('click', clickHandler);
    updateDomCount();
}

function clickHandler() {
    console.log('Counter button was clicked!!');
    clickCount++;
    console.log(clickCount);
    // $('#counterClicks').text('Sea Creature Count:' + clickCount); 
    //the way above is quickest but will it allow me to start the count with 0 at refresh?
    // or like this
    updateDomCount();
    addNewCreature();
}

//or like this con't. (this is the function we are calling above)
function updateDomCount() {
    $('#counterClicks').text('Sea Creature Count:' + clickCount);
}

function addNewCreature() {
    $('#creatureList').append(
        '<tr>' +
            '<td>' + $('#newCreatureName').val() + '</td>' +
            '<td>' + $('#newCreatureSize').val() + ' ft</td>' +
            '<td>' + $('#newCreatureType').val() + '</td>' +
            '<td>' + $('#newCreatureSpeed').val() + ' mph</td>' +
        '</tr>'
    );
}