new Swiper('.swiper',{
    loop:true,
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    },
    breakpoints:{
        320:{
            slidesPerView:1,
        },
        350:{
            slidesPerView:1.5,
        },
        450:{
            slidesPerView:2,
        },
       
    }
    
});

