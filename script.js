var myElement = document.getElementById('target-canvas');

var resultsElement = document.getElementById('results');

var tearTolerance = 20;

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);

mc.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }) );

//tie in the handler that will be called
mc.on("panstart", pointPlace);

mc.on("panend", fletchPlace);

function handleDrag(ev){
	
	console.log(ev);
	
}

function pointPlace(ev) {
	// Place the point of the arrow.
	// myElement.textContent = "Placed point.";
}

function fletchPlace(ev) {
	// Place the fletch end/tail of the arrow.
	
	// myElement.textContent = "Placed fletch";
	
	console.log("Paper Tune Complete. Calculating Results");
	
	if(ev.deltaY > tearTolerance || ev.deltaY < -tearTolerance) {
		// console.log("Have a Vert component");
		if(ev.deltaX > tearTolerance || ev.deltaX < -tearTolerance) {
			console.log("Have a Combination tear");
			if(ev.deltaY > 10) {
				resultsElement.textContent = 'Results: Combination tear - Resolve vertical tear first. Move nocking point up or move rest down.';
			} else if(ev.deltaY < -10) {
				resultsElement.textContent = 'Results: Combination tear - Resolve vertical tear first. Move nocking point down, or move rest up.';
			}
			// resultsElement.textContent = 'Results: Combination tear - Resolve vertical tear first.';
			} else {
				console.log("Pure vert tear");
				
				if(ev.deltaY > 10) {
					resultsElement.textContent = 'Results: Vertical tear. Move nocking point up or move rest down.';
				} else if(ev.deltaY < -10) {
					resultsElement.textContent = 'Results: Vertical tear. Move nocking point down, or move rest up.';
				}
				// resultsElement.textContent = 'Results: Vertical tear.'
			}
		} else if(ev.deltaX > tearTolerance || ev.deltaX < -tearTolerance) {
			console.log("Pure horizontal tear");
			// This section needs knowledge of the archer!
			if(ev.deltaX > 10) {
				
				resultsElement.textContent = 'Results: Horizontal tear. Move rest position.';
			} else if(ev.deltaX < -10) {
				resultsElement.textContent = 'Results: Horizontal tear. Move rest position.';
			}
			// resultsElement.textContent = 'Results: Horizontal tear.'
		}
	

	
	
	
}