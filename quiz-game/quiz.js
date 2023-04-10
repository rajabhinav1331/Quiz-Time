const one = 'PATNA'
const two = 'RANCHI'
const three = 'NEW DELHI'
const four = '15 AUGUST'
const five = 'NARENDRA MODI'
const six = 'JAWAHAR LAL NEHRU'
const seven = '26 JANUARY'
const eight = 'UTTAR PRADESH'
const nine = 'DISHPUR'
const ten = 'DROUPADI MURMU'

let count = 0


function validate(){
    
    let answer1 = document.getElementById('ans1').value;
    if(answer1.toUpperCase() === one.toUpperCase()){
        count   = count + 1

    }
    let answer2 = document.getElementById('ans2').value;
    if(answer2.toUpperCase() === two.toUpperCase()){
        count   = count + 1

    }

    let answer3 = document.getElementById('ans3').value;
    if(answer3.toUpperCase() === three.toUpperCase()){
        count   = count + 1

    }
    let answer4 = document.getElementById('ans4').value;
    if(answer4.toUpperCase() === four.toUpperCase()){
        count   = count + 1

    }
    let answer5 = document.getElementById('ans5').value;
    if(answer5.toUpperCase() === five.toUpperCase()){
        count   = count + 1

    }
    let answer6 = document.getElementById('ans6').value;
    if(answer6.toUpperCase() === six.toUpperCase()){
        count   = count + 1

    }
    let answer7 = document.getElementById('ans7').value;
    if(answer7.toUpperCase() === seven.toUpperCase()){
        count   = count + 1

    }
    let answer8 = document.getElementById('ans8').value;
    if(answer8.toUpperCase() === eight.toUpperCase()){
        count   = count + 1

    }
    let answer9 = document.getElementById('ans9').value;
    if(answer9.toUpperCase() === nine.toUpperCase()){
        count   = count + 1

    }
    let answer10 = document.getElementById('ans10').value;
    if(answer10.toUpperCase() === ten.toUpperCase()){
        count   = count + 1

    }


    document.getElementById('main-marks').innerHTML = ` Score:- ${count}`;

    if(count>5){
        document.getElementById('main-remarks').innerHTML = 'PASSED'
    }
    else{
        document.getElementById('main-remarks').innerHTML = `oooOOPS <br> 
                                                               BETTER LUCK NEXT TIME`
    }
    
       document.getElementById('hidden-span').style.display = 'inline'

       count = 0

}