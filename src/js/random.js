

function getRandomBetweenFloat(min,max){
    return min + Math.random()*(max-min+1)
}
min = 1200;
max = 4599;

var logElem = getRandomBetweenFloat(min,max);
document.getElementById("bid").innerHTML = logElem.toFixed(2);


function getRandomBetweenFloat1(min,max){
    return min + Math.random()*(max-min+1)
}
min = 1200;
max = 4599;

var logElem = getRandomBetweenFloat1(min,max);
logElem = Math.round(logElem)
document.getElementById("ask").innerHTML = logElem.toFixed(2);



