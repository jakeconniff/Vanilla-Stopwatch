//button references for HTML manipulation
const startButton = document.querySelector('#start-button')
const stopButton = document.querySelector('#stop-button')
const resetButton = document.querySelector('#reset-button')

//time field references
const timeSection = document.querySelector('.timer')
const hourSection = document.querySelector('#hours-span')
const minuteSection = document.querySelector('#minutes-span')
const secondSection = document.querySelector('#seconds-span')

//application variables
var hours = 0
var minutes = 0
var seconds = 0
var timeInterval

function startTimer(){
    console.log('Start timer')

    clearInterval(timeInterval)
    timeInterval = setInterval(timer, 1000)
}

function stopTimer(){
    console.log('Stop timer')

    //pause interval
    clearInterval(timeInterval)
}

function resetTimer(){
    //stop interval
    clearInterval(timeInterval)

    //reset external times
    hourSection.innerHTML = "00"
    minuteSection.innerHTML = "00"
    secondSection.innerHTML = "00"

    console.log(`Reset at ${hours}:${minutes}:${seconds}`)

    //reset internal times
    hours = 0
    minutes = 0
    seconds = 0
}

function timer(){
    //updating internal clock
    if(seconds === 59){
        seconds = 0
        if(minutes === 59){
            minutes = 0
            hours++
        }
        else{
            minutes++
        }
    }
    else{
        seconds++
    }

    //updating external clock
    secondSection.innerHTML = (seconds<10) ? "0" + seconds : seconds
    minuteSection.innerHTML = (minutes<10) ? "0" + minutes : minutes
    hourSection.innerHTML = (hours<10) ? "0" + hours : hours

}