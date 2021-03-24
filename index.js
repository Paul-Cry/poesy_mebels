<<<<<<< HEAD
var blockNav = document.querySelectorAll('.nav_block');
var blockLink = document.querySelectorAll('.button_nav');



var addColor = function(element, dosch){
	element.onmouseover = function(e){
		dosch.style.color = 'white';
	}
	console.log(element);
}




for(let block of  blockNav){
	var blocks = block.children;
	addColor(block, blocks)
	
}

blocks.style.color = 'white';
console.log(blocks)
=======
var blockNav = document.querySelectorAll('.nav_block');
var blockLink = document.querySelectorAll('.button_nav');



var addColor = function(element, dosch){
	element.onmouseover = function(e){
		dosch.style.color = 'white';
	}
	console.log(element);
}




for(let block of  blockNav){
	var blocks = block.children;
	addColor(block, blocks)
	
}

blocks.style.color = 'white';
console.log(blocks)
>>>>>>> 1593ab1dd74b6d31554ac77029705af038512bcb
