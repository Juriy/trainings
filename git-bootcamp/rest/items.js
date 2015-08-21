
function Items() {
	this._items = {

	};
}

var _p = Items.prototype;

_p.add = function(kind, item) {

};

_p.remove = function(kind, id) {

};

_p.update = function(kind, id, item) {

};

_p.get = function(kind, id) {
	if (!this._items.kind) {

	}
};

_p.list = function(kind) {
	if (!this._kindExists(kind)) {
		return [];
	}

	for (var id in kind) {
		
	}
};

_p._createKind = function(kind) {
	if (!this._kindExists(kind)) {
		this._items[kind] = {};
	}
};

_p._kindExists = function(kind) {
	return !!this._items[kind];
};