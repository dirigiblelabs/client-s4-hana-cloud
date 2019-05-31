var method = A_SalesOrderItemTextEntityBuilder.prototype;

function A_SalesOrderItemTextEntityBuilder() {

}

method.SalesOrder = function(SalesOrder) {
	this.SalesOrder = SalesOrder;
	return this;
};

method.SalesOrderItem = function(SalesOrderItem) {
	this.SalesOrderItem = SalesOrderItem;
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

method.to_SalesOrderItem = function(to_SalesOrderItem) {
	this.to_SalesOrderItem = to_SalesOrderItem;
	return this;
};

method.build = function() {
	return {
		SalesOrder: this.SalesOrder,
		SalesOrderItem: this.SalesOrderItem,
		Language: this.Language,
		LongTextID: this.LongTextID,
		LongText: this.LongText,
		to_SalesOrder: this.to_SalesOrder,
		to_SalesOrderItem: this.to_SalesOrderItem
	};
};

module.exports = A_SalesOrderItemTextEntityBuilder;
