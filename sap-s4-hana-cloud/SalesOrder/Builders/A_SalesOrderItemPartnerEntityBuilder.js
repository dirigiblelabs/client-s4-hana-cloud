var method = A_SalesOrderItemPartnerEntityBuilder.prototype;

function A_SalesOrderItemPartnerEntityBuilder() {

}

method.SalesOrder = function(SalesOrder) {
	this.SalesOrder = SalesOrder;
	return this;
};

method.SalesOrderItem = function(SalesOrderItem) {
	this.SalesOrderItem = SalesOrderItem;
	return this;
};

method.PartnerFunction = function(PartnerFunction) {
	this.PartnerFunction = PartnerFunction;
	return this;
};

method.Customer = function(Customer) {
	this.Customer = Customer;
	return this;
};

method.Supplier = function(Supplier) {
	this.Supplier = Supplier;
	return this;
};

method.Personnel = function(Personnel) {
	this.Personnel = Personnel;
	return this;
};

method.ContactPerson = function(ContactPerson) {
	this.ContactPerson = ContactPerson;
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
		PartnerFunction: this.PartnerFunction,
		Customer: this.Customer,
		Supplier: this.Supplier,
		Personnel: this.Personnel,
		ContactPerson: this.ContactPerson,
		to_SalesOrder: this.to_SalesOrder,
		to_SalesOrderItem: this.to_SalesOrderItem
	};
};

module.exports = A_SalesOrderItemPartnerEntityBuilder;
