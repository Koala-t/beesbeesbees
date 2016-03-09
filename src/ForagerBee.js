var ForagerBee = function() {
	Bee.call(this);
	this.age = 10;
	this.job = "find pollen";
	this.canFly = true;
	this.treasureChest = [];
	this.forage = function() {
		this.treasureChest.push("Golden Pollen");
	}
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

