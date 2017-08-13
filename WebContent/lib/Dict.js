//------------------------------------------------------------------------------------------
function Dict() {
	this.m_val = {};
	this.m_obj = {};
}

Dict.unique_id = 0;

//------------------------------------------------------------------------------------------
Dict.prototype.setup = function() {
}
		
//------------------------------------------------------------------------------------------
Dict.prototype.cleanup = function() {
}

//------------------------------------------------------------------------------------------
Dict.prototype.exists = function(__key) {
	return this.m_val[this.hash(__key)] != undefined;
}

//------------------------------------------------------------------------------------------
Dict.prototype.get = function(__key) {
	return this.m_val[this.hash(__key)];
}
	
//------------------------------------------------------------------------------------------
Dict.prototype.set = function(__key, __value) {
	var __hash = this.hash(__key);
			
	this.m_val[__hash] = __value;
	this.m_obj[__hash] = __key;
}
		
//------------------------------------------------------------------------------------------
Dict.prototype.remove = function(__key) {
	var __hash = this.hash(__key);
			
	if (this.m_val[__hash] != undefined) {
		delete this.m_val[__hash];
		delete this.m_obj[__hash]
	}
}
		
//------------------------------------------------------------------------------------------
Dict.prototype.length = function () {
	return this.m_val.length;
}

//------------------------------------------------------------------------------------------
Dict.prototype.forEach = function(__callback) {
	var __key;
		
	for (__key in this.m_val) {
		__callback (this.m_obj[__key]);
	}
}
		
//------------------------------------------------------------------------------------------
Dict.prototype.hash = function (__key) {
	var __hash = typeof __key + " ";
			
	if (__key instanceof Object) {
		if (__key.__hash__ == undefined) {
			__key.__hash__ = Dict.unique_id++;
		}
				
		__hash += __key.__hash__;
	}
	else
	{
		__hash += __key.toString ();
	}

	return __hash;
}
	