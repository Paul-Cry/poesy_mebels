let action = function(number){
	window.scrollTo(0, number)

}

window.onscroll = () => {
	console.log(window.pageYOffset)
	app.number = window.pageYOffset;
}



const app = new Vue({
	el: '#app',
	data: {
		number: 23,
	},
	methods: {
		changeWind(number){
			action(number)
			console.log(23)
		}
	}
})