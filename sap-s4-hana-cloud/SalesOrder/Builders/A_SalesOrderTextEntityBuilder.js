var method = A_SalesOrderTextEntityBuilder.prototype;

function A_SalesOrderTextEntityBuilder() {

}

method.SalesOrder = function(SalesOrder) {
	this.SalesOrder = SalesOrder;
	return this;
};

method.Language = function(Language) {
	this.Language = Language;
	return this;
};

method.LongTextID = function(LongTextID) {
	this.LongTextID = LongTextID;
	return this;
};

method.LongText = function(LongText) {
	this.LongText = LongText;
	return this;
};

method.to_SalesOrder = function(to_SalesOrder) {
	this.to_SalesOrder = to_SalesOrder;
	return this;
};

method.build = function() {
	return {
		SalesOrder: this.SalesOrder,
		Language: this.Language,
		LongTextID: this.LongTextID,
		LongText: this.LongText,
		to_SalesOrder: this.to_SalesOrder
	};
};

module.exports = A_SalesOrderTextEntityBuilder;
