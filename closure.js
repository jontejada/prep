//broken
for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}

//fixed
for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', (function(i){
  	return function() {
  		console.log(i);
  	};
  })(i));
  document.body.appendChild(btn);
}









function addButtons(numButtons) {
  for (var i = 0; i < numButtons; i++) {
    var button = document.createElement('input');
    button.type = 'button';
    button.value = 'Button ' + (i + 1);
    
    button.onclick = function(i){ //IIFE
    	return function() {
      		alert('Button ' + (i + 1) + ' clicked');
    	};
    }(i); 

    document.body.appendChild(button);
    document.body.appendChild(document.createElement('br'));
  }
}

window.onload = function() { addButtons(5); };











