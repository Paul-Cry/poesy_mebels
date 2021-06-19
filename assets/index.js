let action = function(number){
	window.scrollTo(0, number)
}

let counter = 0

window.onscroll = () => {
	if(window.innerWidth >= 800){
		app.hide = 'opacity: 0;'
	
		let scrol = window.pageYOffset;
		console.log(scrol)
		let opacity = 'opacity: 1 !important'
		//Таймер 
		let sleep = (ms)=>{
				return new Promise((resolve) =>{
					setTimeout(()=>{
						resolve()
					}, ms)
			})
	}
	
		let offMove = function(){
			
			app.threeAnimation = false;
		}
		let four_text = ()=>{
			app.fourText = 'animation: round_items 1s ease-out forwards;'
		}
		app.number = scrol;
		if(  scrol >= 408){
			app.hide = opacity;
		} 
		if(scrol >= 1377 && counter == 0){
			counter++
			app.screen_three = true;
			app.threeAnimation = true;
			if(counter > 0){
				setTimeout(offMove, 1000)
			}
		}
		if(scrol >= 2158.96655273437 ){
			app.four_items = 'animation: four_items 2s ease forwards;'
			setTimeout(four_text, 2000)
		}
		if(scrol >= 4287){
			app.seven_screen = 'animation: wind 2s ease forwards;'
		}
		if(scrol >= 5492){
			app.eth_text = opacity
			sleep(1000).then(()=>{
				app.pencil = true
			})
			sleep(2000).then(()=>{
				app.eight1 = 'animation: eightOne 1s  forwards; opacity: 1 !important;'
			})
			sleep(3000).then(()=>{
				app.eight2 = 'animation: eightOne 1s  forwards; opacity: 1 !important;'
			})
		}
		if(scrol >= 6512){
			app.wind = opacity
		}
	}
}




// let burger = document.querySelectorAll('.mobilNav')

// burger[0].addEventListener('click', ()=>{
// 	app.burger = true;
// 	console.log(223443)
// })








const app = new Vue({
	el: '#app',
	data: {
		number: 0,
		hide: null,
		check: true,
		check_click: true,
		screen_three: false,
		threeAnimation: false,
		four_items: ''	,
		fourText: '',
		seven_screen: '',
		eth_text: '',
		pencil: false,
		D3: '',
		eight1: '',
		eight2:'',
		wind: '',
		object: [
			"img/subj/shkaf.png"
		],
		burger: null
	},
	methods: {
		changeWind(number){
			action(number);
			console.log(23);
		},
		change_chek(option){
			if(option == 'left'){
				this.check = false;
				this.check_click = false;
			}else{
				this.check= true;
				this.check_click = true;
			}
			
		},
		changeBackground(number){
			switch (number){
				case 0:
					this.object[0] = "img/subj/Mask_Group.png"
					alert(2345)
					
					break;
				case 1:
					console.log('asd')
					break;
			}
			return this.object
		},
		cons(){
			app.burger = true
			console.log(1234)
		}
	}
})

console.log(234)



$('.subject').slick({
	infinite: true,
    slidesToShow: 2,
	slidesToScroll: 2,
	dots: true,
    rows: 2
});




$('.slader').slick({
	infinite: true,
	centerMode: true,
	  slidesToShow: 3,
	  slidesToScroll: 2,
	  dots: true,
});








