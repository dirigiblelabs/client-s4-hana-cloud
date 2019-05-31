var method = A_SalesOrderHeaderPartnerEntityBuilder.prototype;

function A_SalesOrderHeaderPartnerEntityBuilder() {

}

method.SalesOrder = function(SalesOrder) {
	this.SalesOrder = SalesOrder;
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

method.build = function() {
	return {
		SalesOrder: this.SalesOrder,
		PartnerFunction: this.PartnerFunction,
		Customer: this.Customer,
		Supplier: this.Supplier,
		Personnel: this.Personnel,
		ContactPerson: this.ContactPerson,
		to_SalesOrder: this.to_SalesOrder
	};
};

module.exports = A_SalesOrderHeaderPartnerEntityBuilder;
