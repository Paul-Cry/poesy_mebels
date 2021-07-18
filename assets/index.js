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

let counter = 0;
//Таймер 
let sleep = (ms)=>{
	return new Promise((resolve) =>{
		setTimeout(()=>{
			resolve()
		}, ms)
	})}


window.onscroll = () => {
	let scrol = window.pageYOffset;
		
		app.numberScroll = scrol
		let offMove = function(){
			
			app.threeAnimation = false;
		}
		let four_text = ()=>{
			app.fourText = 'animation: round_items 1s ease-out forwards;'
		}
		app.number = scrol;
		if(window.innerWidth > 1024){
			if(  scrol >= app.positionPage[1]/2){
				app.hide = opacity;
			} 
			if(scrol >= app.positionPage[2]/1.3 && counter == 0){
				counter++
				app.screen_three = true;
				app.threeAnimation = true;
				if(counter > 0){
					setTimeout(offMove, 1000)
				}
			}
			if(scrol >= app.positionPage[3]/1.2 ){
				app.four_items = 'animation: four_items 2s ease forwards; opacity: 1 !important;' 
				setTimeout(four_text, 2000)
			}
			if(scrol >= app.positionPage[5]/1.04){
				app.seven_screen = 'animation: wind 2s ease forwards;'
			}
			if(scrol >= app.positionPage[7]/1.059){
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
			if(scrol >= app.positionPage[8]/1.025){
				app.wind = opacity
			}
		}else{
			app.hide = opacity;
			// app.screen_three = false;
			app.threeAnimation = true;
			if(counter > 0){
				setTimeout(offMove, 1000)
			}
			
			
			app.seven_screen = 'animation: wind 2s ease forwards;'
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
			app.wind = opacity
		}
}
		
	


	let activateGallery = () =>{
		$('.gallery').slick({
			infinite: true,
			centerMode: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			cssEase: 'linear'
		  });
	}



	
	


	


var componentA =  {
	name: 'component-a',
	data: function(){
		return {
			popupGall: false,
			popupExit: false,
		}
	},
	template: `
	<div class="popup" v-if='popupGall'>
			<div class="block__exit">
				<div class="popup__exit" :class='{"showExit": popupExit}'  @click='showPopuExit()' >
					<div></div>
					<div></div>
				</div>
			</div>
			
			<div class="gallery">
				<div class="gallery__block"><img src="./img/ourWork/IMG__2897.JPG.jpg" alt=""></div>
				<div class="gallery__block"><img src="./img/ourWork/image (18).jpg" alt=""></div>
				<div class="gallery__block"><img src="./img/ourWork/IMG_20100101_053224.jpg" alt=""></div>
				<div class="gallery__block"><img src="./img/ourWork/IMG_20100101_053307.jpg" alt=""></div>
				<div class="gallery__block"><img src="./img/ourWork/IMG_20170118_194611.jpg" alt=""></div>
				<div class="gallery__block"><img src="./img/ourWork/IMG__2841.JPG.jpg" alt=""></div>
				<div class="gallery__block"><img src="./img/ourWork/garderobnye5.jpg" alt=""></div>
				<div class="gallery__block"><img src="./img/ourWork/шк4.jpg" alt=""></div>
			</div>
		</div>
	`,
	mounted() {
		document.addEventListener('galler-event', ()=>{
			this.showPopuExit(1)
		})

		let openGallery = ()=>{
			let opentGallery = new Event('galler-event')
			document.dispatchEvent(opentGallery)
		}
		if(window.innerWidth <= 480){
			document.querySelector('.four_items').style.display = 'none'
		}else{
			document.querySelector('.four_items_mobil').style.display = 'none'
			}
		let pictureComponent = document.getElementsByClassName('picture');
		for(let element of pictureComponent){
			element.addEventListener('click', ()=>{
				openGallery()
			})
		}
	},
	methods: {
		showPopuExit(flag){
			if(flag){
				this.popupGall = true;
				document.body.style = 'overflow: hidden !important;'
				setTimeout(()=>{
					activateGallery()
					document.querySelector('.gallery').style.opacity = 1;
				}, 10)
			}else{
				this.popupGall = false;
				document.body.style = 'overflow: visible!important;'
				setTimeout(()=>{
					activateGallery()
				}, 10)
			}
			
			
		}
	}
}





var app = new Vue({
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
		navButton: "1",
		tegPopup: componentA,
		object: [
			"img/subj/shkaf.png"
		],
		picture: document.getElementsByClassName('picture'),
		burger: null,
		pages: document.getElementsByClassName('screen'),
		positionPage: [],
		screel: window.scrollY
	},
	components:{
        'component-a': componentA
    },
	mounted(){
		// Создаётся массив с координатами каждого окна 
		for( let element of this.pages){
			let y = element.getBoundingClientRect().top + window.scrollY;
			this.positionPage.push(y);
		}
		this.positionPage.push('40000')
		
	},
	created () {
		window.addEventListener('scroll', this.onScroll);	
	},
	
	methods: {
		smoothScrollTo(endX, endY, duration) {
			let startX = window.scrollX || window.pageXOffset,
				startY = window.scrollY || window.pageYOffset,
				distanceX = endX - startX,
				distanceY = endY - startY,
				startTime = new Date().getTime();
			let easeInOutQuart = function(time, from, distance, duration) {
			  if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
			  return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
			};
			let timer = window.setInterval(function() {
			  let time = new Date().getTime() - startTime,
				  newX = easeInOutQuart(time, startX, distanceX, duration),
				  newY = easeInOutQuart(time, startY, distanceY, duration);
			  if (time >= duration) {
				window.clearInterval(timer);
			  }
			  window.scrollTo(newX, newY);
			}, 1000 / 60);
		  },

		changeWind(pages){
			let pagesNumber = Number(pages) -1
			let scrollYW = this.positionPage[pagesNumber] + 50;
			this.navButton = pages;
			this.smoothScrollTo(0, scrollYW, 1000)
			
		},
		onScroll(){
			this.positionPage.forEach( (element, i)=>{
				if(window.scrollY > element && window.scrollY <  this.positionPage[i+1]){
					this.navButton = i+1;
				}
			})
			
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
				
				
				if(number == i){
					app.navButton[i] = true
				}else{
					app.navButton[i] = false 
				}
			}
		}
	}
})










var sliderSubject = ()=> {
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
}

$(window).on('load', function() {
	app.screen_three = true;
	sleep(1000).then(()=>{
		sliderSubject()
		sleep(500).then(()=>{
			$('.subject').slick('refresh');
		})
	})
})


	



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
		},{
			breakpoint: 850,
			settings: {
				slidesToShow: 2,
			}
		}
	]
});



// $('.subject').slick({
// 	infinite: true,
// 	centerMode: true,
//     slidesToShow: 2,
// 	slidesToScroll: 2,
// 	dots: true,
//     rows: 2,
// 	responsive: [
// 		{
// 			breakpoint: 437,
// 			settings: {
// 				rows: 1,
// 				slidesToShow: 1,
// 				slidesToScroll: 1,
// 			}
// 		}
// 	]
// });



















