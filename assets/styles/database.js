
/*========================================= */
/*===== 777- Afrânio Alves [ DARKNOIDE ]=== */

let body = document.querySelector('body');
let select_cover = document.querySelectorAll('.cover');
let title = document.querySelector('.title-movie');
let star = document.querySelector('.stars');
let year_y = document.querySelector('.year-y');
const AllCoverInformation = [
    {
        
        title:"Jonh Weck III",
        stars:'<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half-o"></i>',
        year:"2019"
    },
     {
       
        title:"Joker The Curinga",
        stars:'<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half-o"></i>',
        year:"2020"
    },
    {
       
        title:"Naruto Shippuden",
        stars:'<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>  <i class="fa fa-star"></i>  <i class="fa fa-star"></i>',
        year:"2021"
    },
     {
       
        title:"Fantastic Quartet",
        stars:'<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> ',
        year:"2018"
    },
     {
       
        title:"Mortal Kombat 11",
        stars:'<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> ',
        year:"2021"
    }
    ,
     {
       
        title:"Anime Marathon",
        stars:'<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> ',
        year:"2021"
    }
     ,
     {
       
        title:"King Kong vs GodZilla",
        stars:'<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> ',
        year:"2021"
    }
     ,
     {
       
        title:"The Wolverine",
        stars:'<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> ',
        year:"2019"
    }
    
]

    body.classList.add('movie002')
    title.innerHTML =  AllCoverInformation[1].title
    star.innerHTML = AllCoverInformation[1].stars
    year_y.innerHTML = AllCoverInformation[1].year





select_cover[0].onclick= ()=>{
    body.classList.remove('movie002');
    body.classList.remove('movie003');
    body.classList.remove('movie004');
    body.classList.remove('movie005');
    body.classList.remove('movie006');
    body.classList.remove('movie007');
    body.classList.remove('movie008');
    select_cover[1].classList.remove('cover1');
    select_cover[2].classList.remove('cover1');
    select_cover[3].classList.remove('cover1');
    select_cover[4].classList.remove('cover1');
    select_cover[5].classList.remove('cover1');
    select_cover[6].classList.remove('cover1');
    select_cover[7].classList.remove('cover1');
    
    select_cover[0].classList.add('cover1');
    title.innerHTML =  AllCoverInformation[0].title
    star.innerHTML = AllCoverInformation[0].stars
    year_y.innerHTML = AllCoverInformation[0].year
    body.classList.add('movie001');
   
}
select_cover[1].onclick= ()=>{
    body.classList.remove('movie001');
    body.classList.remove('movie003');
    body.classList.remove('movie004');
    body.classList.remove('movie005');
    body.classList.remove('movie006');
    body.classList.remove('movie007');
    body.classList.remove('movie008');
    select_cover[0].classList.remove('cover1');
    select_cover[2].classList.remove('cover1');
    select_cover[3].classList.remove('cover1');
    select_cover[4].classList.remove('cover1');
    select_cover[5].classList.remove('cover1');
    select_cover[6].classList.remove('cover1');
    select_cover[7].classList.remove('cover1');
    
    select_cover[1].classList.add('cover1');
     title.innerHTML =  AllCoverInformation[1].title
    star.innerHTML = AllCoverInformation[1].stars
    year_y.innerHTML = AllCoverInformation[1].year
    body.classList.add('movie002');
   
}

select_cover[2].onclick= ()=>{
    body.classList.remove('movie001');
    body.classList.remove('movie002');
    body.classList.remove('movie004');
    body.classList.remove('movie005');
    body.classList.remove('movie006');
    body.classList.remove('movie007');
    body.classList.remove('movie008');
    select_cover[1].classList.remove('cover1');
    select_cover[0].classList.remove('cover1');
    select_cover[3].classList.remove('cover1');
    select_cover[4].classList.remove('cover1');
    select_cover[5].classList.remove('cover1');
    select_cover[6].classList.remove('cover1');
    select_cover[7].classList.remove('cover1');
    
    select_cover[2].classList.add('cover1');
    title.innerHTML =  AllCoverInformation[2].title
    star.innerHTML = AllCoverInformation[2].stars
    year_y.innerHTML = AllCoverInformation[2].year

    body.classList.add('movie003');
   
}
select_cover[3].onclick= ()=>{
    body.classList.remove('movie001');
    body.classList.remove('movie002');
    body.classList.remove('movie003');
    body.classList.remove('movie005');
    body.classList.remove('movie006');
    body.classList.remove('movie007');
    body.classList.remove('movie008');
    select_cover[1].classList.remove('cover1');
    select_cover[2].classList.remove('cover1');
    select_cover[0].classList.remove('cover1');
    select_cover[4].classList.remove('cover1');
    select_cover[5].classList.remove('cover1');
    select_cover[6].classList.remove('cover1');
    select_cover[7].classList.remove('cover1');
    
    select_cover[3].classList.add('cover1');
     title.innerHTML =  AllCoverInformation[3].title
    star.innerHTML = AllCoverInformation[3].stars
    year_y.innerHTML = AllCoverInformation[3].year
    body.classList.add('movie004');
   
}
select_cover[4].onclick= ()=>{
    body.classList.remove('movie001');
    body.classList.remove('movie002');
    body.classList.remove('movie003');
    body.classList.remove('movie004');
    body.classList.remove('movie006');
    body.classList.remove('movie007');
    body.classList.remove('movie008');
    select_cover[1].classList.remove('cover1');
    select_cover[2].classList.remove('cover1');
    select_cover[3].classList.remove('cover1');
    select_cover[0].classList.remove('cover1');
    select_cover[5].classList.remove('cover1');
    select_cover[6].classList.remove('cover1');
    select_cover[7].classList.remove('cover1');
    
    select_cover[4].classList.add('cover1');
     title.innerHTML =  AllCoverInformation[4].title
    star.innerHTML = AllCoverInformation[4].stars
    year_y.innerHTML = AllCoverInformation[4].year

    body.classList.add('movie005');
   
}
select_cover[5].onclick= ()=>{
    body.classList.remove('movie001');
    body.classList.remove('movie002');
    body.classList.remove('movie003');
    body.classList.remove('movie004');
    body.classList.remove('movie005');
    body.classList.remove('movie007');
    body.classList.remove('movie008');
    select_cover[1].classList.remove('cover1');
    select_cover[2].classList.remove('cover1');
    select_cover[3].classList.remove('cover1');
    select_cover[4].classList.remove('cover1');
    select_cover[0].classList.remove('cover1');
    select_cover[6].classList.remove('cover1');
    select_cover[7].classList.remove('cover1');
    
    select_cover[5].classList.add('cover1');
     title.innerHTML =  AllCoverInformation[5].title
    star.innerHTML = AllCoverInformation[5].stars
    year_y.innerHTML = AllCoverInformation[5].year

    body.classList.add('movie006');
   
}
select_cover[6].onclick= ()=>{
    body.classList.remove('movie001');
    body.classList.remove('movie002');
    body.classList.remove('movie003');
    body.classList.remove('movie004');
    body.classList.remove('movie005');
    body.classList.remove('movie006');
    body.classList.remove('movie008');
    select_cover[1].classList.remove('cover1');
    select_cover[2].classList.remove('cover1');
    select_cover[3].classList.remove('cover1');
    select_cover[4].classList.remove('cover1');
    select_cover[5].classList.remove('cover1');
    select_cover[0].classList.remove('cover1');
    select_cover[7].classList.remove('cover1');
    
    select_cover[6].classList.add('cover1');
     title.innerHTML =  AllCoverInformation[6].title
    star.innerHTML = AllCoverInformation[6].stars
    year_y.innerHTML = AllCoverInformation[6].year

    body.classList.add('movie007');
   
}
select_cover[7].onclick= ()=>{
    body.classList.remove('movie001');
    body.classList.remove('movie002');
    body.classList.remove('movie003');
    body.classList.remove('movie004');
    body.classList.remove('movie005');
    body.classList.remove('movie006');
    body.classList.remove('movie007');
    select_cover[1].classList.remove('cover1');
    select_cover[2].classList.remove('cover1');
    select_cover[3].classList.remove('cover1');
    select_cover[4].classList.remove('cover1');
    select_cover[5].classList.remove('cover1');
    select_cover[6].classList.remove('cover1');
    select_cover[0].classList.remove('cover1');
    
    select_cover[7].classList.add('cover1');
     title.innerHTML =  AllCoverInformation[7].title
    star.innerHTML = AllCoverInformation[7].stars
    year_y.innerHTML = AllCoverInformation[7].year

    body.classList.add('movie008');
   
}

