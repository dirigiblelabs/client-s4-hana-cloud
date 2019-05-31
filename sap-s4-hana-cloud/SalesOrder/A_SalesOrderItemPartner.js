var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var A_SalesOrderItemPartnerEntityBuilder = require("sap-s4-hana-cloud/SalesOrder/Builders/A_SalesOrderItemPartnerEntityBuilder");

exports.SALES_ORDER = "SalesOrder";
exports.SALES_ORDER_ITEM = "SalesOrderItem";
exports.PARTNER_FUNCTION = "PartnerFunction";
exports.CUSTOMER = "Customer";
exports.SUPPLIER = "Supplier";
exports.PERSONNEL = "Personnel";
exports.CONTACT_PERSON = "ContactPerson";
exports.TO__SALES_ORDER = "to_SalesOrder";
exports.TO__SALES_ORDER_ITEM = "to_SalesOrderItem";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new A_SalesOrderItemPartnerEntityBuilder();
};

exports.getClient = function(configurations) {
	return new A_SalesOrderItemPartnerClient(configurations);
};

function A_SalesOrderItemPartnerClient (configurations) {

	var API_PATH = "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrderItemPartner";

	this.client = new Client(configurations, API_PATH);

	this.list = function(queryParameters) {
		return this.client.list(queryParameters);
	};

	this.get = function(id, queryParameters) {
		return this.client.get(getId(id), queryParameters);
	};

	this.create = function(entity, queryParameters) {
		return this.client.create(entity, queryParameters);
	};

	this.update = function(id, entity, queryParameters) {
		return this.client.update(getId(id), entity, queryParameters);
	};

	this.delete = function(id, queryParameters) {
		return this.client.delete(getId(id), queryParameters);
	};
}

function getId(id) {
	return "('" + id + "')";
}
