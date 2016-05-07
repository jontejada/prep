var prizes = ['u','h','f'];
for (var btmNum = 0; btmNum < prizes.length; btmNum++) {
	document.getElementById('btn-' + btmNum).onclick = function(froz) {
			return function() {
				alert(prizes[btmNum]);
			};
		}(btmNum);
}