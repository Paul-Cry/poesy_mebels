let action = function(number){
	window.scrollTo(0, number)
}

let hiddenBody = ()=>{
	document.body.style = 'overflow: hidden !important; '
}

let showBody = ()=>{
	document.body.style = 'overflow-x: hidden !important; '
}

let opacity = 'opacity: 1 !important'

let showWindJs = ()=>{
	app.wind = opacity
}

let counter = 0

window.onscroll = () => {
	if(window.innerWidth >= 800){
	
	
		let scrol = window.pageYOffset;
		// console.log(scrol)
		app.numberScroll = scrol
		app.navAcive(scrol)
		
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
			app.four_items = 'animation: four_items 2s ease forwards; opacity: 1 !important;' 
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











const app = new Vue({
	el: '#app',
	data: {
		numberScroll: '',
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
		exit: null,
		navButton: [],
		object: [
			"img/subj/shkaf.png"
		],
		burger: null
	},
	mounted(){
		this.navButton[0] = true;
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
			hiddenBody()
			setTimeout(()=>{
				this.exit = true
			},500)
		},
		exitPass(){
			this.burger = null
			this.exit = null
			showBody()
		
		},
		showWind(){
			showWindJs()
		},
		serchNav(number){
			for(let i = 0; i<= 9; i++){
				// console.log(number)
				
				if(number == i){
					app.navButton[i] = true
				}else{
					app.navButton[i] = false 
				}
			}
		},
		navAcive(number){
				if(number >= 0 && number <= 864){
					this.serchNav(0)
				}else if(number >= 864 && number <=1767.6){
					this.serchNav(1)
				}else if(number >= 1767.6 && number <= 2551){
					this.serchNav(2)
				}else if(number >= 2551 && number <= 3264){
					this.serchNav(3)
				}else if(number >= 3260 && number <= 4266){
					this.serchNav(4)
				}else if(number >= 4266 && number <= 4711.25 ){
					this.serchNav(5)
				}else if(number >= 4711 && number <= 5626 ){
					this.serchNav(6)
				}else if(number >= 5627 && number <= 6491.25 ){
					this.serchNav(7)
				}else if(number >= 6491 && number <= 7406 ){
					this.serchNav(8)
				}else if(number >= 7406 && number <= 7852 ){
					this.serchNav(9)
				}			

		}
	}
})






// if(window.innerWidth >= 800){
	$('.subject').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: true,
		rows: 2,
		responsive: [
			{
				breakpoint: 437,
				settings: {
					centerPadding: '140px',
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true,
					rows: 2,
					
				}
			}
		]
	});
// }



$('.jobs_slider').slick({
    dots: true,
	
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});

$('.slader').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 2,
	  dots: true,
	  responsive: [
		{
			breakpoint: 460,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				
			}
		}
	]
});






$('.subject').slick({
	infinite: true,
	centerMode: true,
    slidesToShow: 2,
	slidesToScroll: 2,
	dots: true,
    rows: 2,
	responsive: [
		{
			breakpoint: 437,
			settings: {
				rows: 1,
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
	]
});
















