var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var A_SalesOrderScheduleLineEntityBuilder = require("sap-s4-hana-cloud/SalesOrder/Builders/A_SalesOrderScheduleLineEntityBuilder");

exports.SALES_ORDER = "SalesOrder";
exports.SALES_ORDER_ITEM = "SalesOrderItem";
exports.SCHEDULE_LINE = "ScheduleLine";
exports.REQUESTED_DELIVERY_DATE = "RequestedDeliveryDate";
exports.CONFIRMED_DELIVERY_DATE = "ConfirmedDeliveryDate";
exports.ORDER_QUANTITY_UNIT = "OrderQuantityUnit";
exports.SCHEDULE_LINE_ORDER_QUANTITY = "ScheduleLineOrderQuantity";
exports.CONFD_ORDER_QTY_BY_MATL_AVAIL_CHECK = "ConfdOrderQtyByMatlAvailCheck";
exports.DELIVERED_QTY_IN_ORDER_QTY_UNIT = "DeliveredQtyInOrderQtyUnit";
exports.OPEN_CONFD_DELIV_QTY_IN_ORD_QTY_UNIT = "OpenConfdDelivQtyInOrdQtyUnit";
exports.CORRECTED_QTY_IN_ORDER_QTY_UNIT = "CorrectedQtyInOrderQtyUnit";
exports.DELIV_BLOCK_REASON_FOR_SCHED_LINE = "DelivBlockReasonForSchedLine";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new A_SalesOrderScheduleLineEntityBuilder();
};

exports.getClient = function(configurations) {
	return new A_SalesOrderScheduleLineClient(configurations);
};

function A_SalesOrderScheduleLineClient (configurations) {

	var API_PATH = "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrderScheduleLine";

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
