/*========================================= */
/*===== 777- Afrânio Alves [ DARKNOIDE ]=== */


window.onload = function(){
    let menu = document.querySelectorAll('.img-menu');
    let play = document.querySelector('.btn-play-pause');
    let movie = document.querySelector('video');
    let stop = document.querySelector('.btn-stop');
    let exit = document.querySelector('.btn-exit');
    let modal = document.querySelector('.modal-movie');
    let watch = document.querySelector('.btn-play');
    let index = 0;
    let index_id = false;
    let menu_mobile = document.querySelector('.menu-mobile');
    let select_movie = document.querySelectorAll('.cover');
    
    const thrillers =[
        {
            thriller1_path:"./assets/thriller/thriller3.mp4"
        }
    ]

    function LoadingThriller(){
        movie.src = thrillers[0].thriller1_path

    }
    LoadingThriller();
    
    play.onclick = function(){
         index = (parseInt(movie.duration));
         function Controller(){
              let id = parseInt(movie.currentTime)
              if(index == id){
                 play.innerHTML = '<i class="fa fa-play"></i>';
              }
         }

        time = setInterval(Controller,1000);
       
        if(movie.paused){
            
             movie.play();
             play.innerHTML = '<i class="fa fa-pause"></i>';
            
        }else{
             movie.pause();
             play.innerHTML = '<i class="fa fa-play"></i>';
        }
       
    }
    stop.onclick = function(){
        movie.src = thrillers[0].thriller1_path;
        clearInterval(time);
        play.innerHTML = '<i class="fa fa-play"></i>';
    }

     exit.onclick = function(){
         modal.classList.add('modal-exit');
         modal.classList.remove('modal-open')
        
         play.innerHTML = '<i class="fa fa-play"></i>';
         setTimeout(()=>{
              movie.src = thrillers[0].thriller1_path;
              modal.style.display = 'none';
         },2000)
        
    }

    watch.onclick = function(){
         modal.classList.add('modal-open');
         modal.classList.remove('modal-exit')
         modal.style.display = 'flex';
         
    }


  

    menu[1].onclick = function(){
        if(index_id == false){
            menu[1].classList.add('menu-add-anime');
            menu[0].classList.remove('menu-remove-anime');
            menu_mobile.style.display = "flex";
             menu_mobile.classList.remove('menu_exit');
            menu_mobile.classList.add('menu_open');
            
            index_id = true;
           
        }
    }

       menu[0].onclick = function(){
           if(index_id == true){
            menu[1].classList.remove('menu-add-anime');
            menu[0].classList.add('menu-remove-anime');
            menu_mobile.classList.add('menu_exit')
            menu_mobile.classList.remove('menu_open');
            
            setTimeout(()=>{ menu_mobile.style.display = "none";},2000)
           
            index_id = false
            

       }
    }
   
}