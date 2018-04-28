console.log(`Hello World from app.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)

//camera menu open

document.querySelector('nav div img').addEventListener('click', function(){
	console.log('im clicked');
	document.body.classList.toggle('nav_open');
})
