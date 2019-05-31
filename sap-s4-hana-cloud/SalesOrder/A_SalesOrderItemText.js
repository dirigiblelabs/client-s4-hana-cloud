var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var A_SalesOrderItemTextEntityBuilder = require("sap-s4-hana-cloud/SalesOrder/Builders/A_SalesOrderItemTextEntityBuilder");

exports.SALES_ORDER = "SalesOrder";
exports.SALES_ORDER_ITEM = "SalesOrderItem";
exports.LANGUAGE = "Language";
exports.LONG_TEXT_I_D = "LongTextID";
exports.LONG_TEXT = "LongText";
exports.TO__SALES_ORDER = "to_SalesOrder";
exports.TO__SALES_ORDER_ITEM = "to_SalesOrderItem";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new A_SalesOrderItemTextEntityBuilder();
};

exports.getClient = function(configurations) {
	return new A_SalesOrderItemTextClient(configurations);
};

function A_SalesOrderItemTextClient (configurations) {

	var API_PATH = "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrderItemText";

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
