console.log(`Hello World from app.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)


// document.querySelector('nav div img').addEventListener('click', function(){
// 	console.log('im clicked');
// 	document.body.classList.toggle('nav_open');
// })


$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrow: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1440,
        settings: {
            slidesToShow: 6,
            slidesToScroll: 3,
            infinite: true,
        }
    }, {
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
        }
    },{
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },{
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }    
    }]
});