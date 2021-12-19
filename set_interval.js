

// Set-Interval   (Async Programming funtion)

         //Anonymous funtion passed to reference


// Create a counter timer starts from 0


let sec_counter = 0;
let min_counter = 0;
let min=document.getElementById('minutes');
let sec=document.getElementById('seconds');
min.innerHTML=0;
sec.innerHTML=0;

let id_1=null;
let cb=function(){
    sec_counter++;
   


    sec.innerText=sec_counter;
    if(sec_counter%60==0){
        sec_counter=0;
        min_counter++;
        min.innerText=min_counter;
    }


}


let play_pause_btn=document.getElementById('play_pause');

play_pause_btn.addEventListener('click',function(){
    if(this.innerHTML=='<i class="fas fa-play"></i>'){
        id_1=setInterval(cb,1000);
        this.innerHTML='<i class="fa fa-pause" aria-hidden="true"></i>';
    }
    else{
        clearInterval(id_1);
        this.innerHTML='<i class="fas fa-play"></i>';
        
    }
    
});

// To reset the timer to 0

let stop_btn=document.getElementById('stop');

stop_btn.addEventListener('click',function(){

    clearInterval(id_1);
    min_counter=0;
    sec_counter=0;
    min.innerText=min_counter;
    sec.innerText=sec_counter;
    play_pause_btn.innerHTML='<i class="fas fa-play"></i>';



});

// Now to restart the timer

let restart_btn=document.getElementById('restart');

restart_btn.addEventListener('click',function(){

    min_counter=0;
    sec_counter=0;
    

});





