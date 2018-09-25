function popUp () {
	return confirm ('Tu trouves ce site inintéressant ? Tu en as assez vu ?')w;
}

setTimeout (function() {
	console.log('10 seconds elapsed');
	if (popUp() === true) {
		window.open ("https://www.youtube.com/watch?v=dQw4w9WgXcQ)",'nom_fenetre',)
	}
}, 10000);