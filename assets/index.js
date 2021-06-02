let action = function(number){
	window.scrollTo(0, number)

}

window.onscroll = () => {
	console.log(window.pageYOffset)
	app.number = window.pageYOffset;
	if( window.pageYOffset >= 408)
		app.hide = 'opacity: 1;'
}





const app = new Vue({
	el: '#app',
	data: {
		number: 23,
		hide: 'opacity: 0;',
		check: true,
		check_click: true
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
			
		}
	}
})