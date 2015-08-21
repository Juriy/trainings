function NeoMenu() {
	
}

NeoMenu.prototype.getFunc = function() {
	return this.showCompanyDropdown;
}

NeoMenu.prototype.showCompanyDropdown = {
	waitReady: function() {
		console.log('Waiting ready');
	}
}

NeoMenu.prototype.SwitchCompany = function() {
    var that = this;
    var callMe = function() {
    	that.showCompanyDropdown.waitReady();
    }
}

var menu = new NeoMenu();
var f =menu.SwitchCompany();