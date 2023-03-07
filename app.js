const time = document.getElementById('time') ,
 greetings = document.getElementById('greetings'),
  Name = document.getElementById('name'),
 focus = document.getElementById('focus');


function showTIme (){
    let  today = new Date();
    let hour = today.getHours();
    let min  =  today.getMinutes();
    let sec  = today.getSeconds();

    let isAMPM = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;


    time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec} ${isAMPM}`

    setTimeout(showTIme, 1000);
}


function greeting(){

    let today = new Date();
    let hour = today.getHours();

        if(hour < 12){
            document.body.style.backgroundImage = "url('./img/img3.jpg')"
            document.body.style.color = 'black';
                greetings.textContent = 'Good Morning'
        }else if (hour < 18){
            document.body.style.backgroundImage = "url('./img/img4.jpg')"
            greetings.textContent = 'Good Afternoon'
            document.body.style.fontWeight = 'bold';


        }else{
            greetings.textContent = 'Good Night'
            
        }

}





function getName(){
    if(localStorage.getItem('Name') === null){
        Name.textContent = "[Enter Your name]"
    }else{
        Name.textContent = localStorage.getItem('Name');
    }
}

function setName(e){
    if(e.type === 'keypress'){
        if(e.which === 13 || e.keyCode === 13){
            localStorage.setItem('Name' , e.target.innerHTML)
            Name.blur();

        }
    }else{
        localStorage.setItem('Name' , e.target.innerHTML)
    }


}

function setFocus(e){
    if(e.type === 'keypress'){
        if(e.which === 13 || e.keyCode === 13){
            localStorage.setItem('focus' , e.target.innerHTML)
            focus.blur();

        }
    }else{
        localStorage.setItem('focus' , e.target.innerHTML)
    }


}



function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = "[Focus]"
    }else{
        focus.textContent = localStorage.getItem('focus');
    }
}

Name.addEventListener('keypress', setName);
Name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTIme();
greeting();

getName();
getFocus();
