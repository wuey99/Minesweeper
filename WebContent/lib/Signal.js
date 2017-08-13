//------------------------------------------------------------------------------------------
function Signal() {
	this.listeners = new Dict();
	this.parent = null;
}

//------------------------------------------------------------------------------------------
Signal.prototype.setup = function() {
}

//------------------------------------------------------------------------------------------
Signal.prototype.cleanup = function() {
}

//------------------------------------------------------------------------------------------
Signal.prototype.addListener = function(listener) {
	this.listeners.put(listener, 0);
},

//------------------------------------------------------------------------------------------
Signal.prototype.fireSignal = function() {
	switch (arguments.length) {
		case 0:
			this.listeners.forEach (
				function(listener) {
					listener();
				}
			);
					
			break;
					
		case 1:
			this.listeners.forEach (
				function(listener) {
					listener(arguments[0]);
				}
			);
					
			break;
					
		default:
			this.listeners.forEach (
				function(listener) {
					listener(arguments);
				}
			);
			
			break;
	}
}
		
//------------------------------------------------------------------------------------------
Signal.prototype.removeListener = function(listener) {
	if (this.listeners.exists(listener)) {
		this.listeners.remove(listener);
	}
}

//------------------------------------------------------------------------------------------
Signal.removeAllListeners = function() {
	this.listeners.forEach (
		function(listener) {
			this.listeners.remove(listener);
		}.bind(this)
	);
}
;