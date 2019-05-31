var method = A_SalesOrderScheduleLineEntityBuilder.prototype;

function A_SalesOrderScheduleLineEntityBuilder() {

}

method.SalesOrder = function(SalesOrder) {
	this.SalesOrder = SalesOrder;
	return this;
};

method.SalesOrderItem = function(SalesOrderItem) {
	this.SalesOrderItem = SalesOrderItem;
	return this;
};

method.ScheduleLine = function(ScheduleLine) {
	this.ScheduleLine = ScheduleLine;
	return this;
};

method.RequestedDeliveryDate = function(RequestedDeliveryDate) {
	this.RequestedDeliveryDate = RequestedDeliveryDate;
	return this;
};

method.ConfirmedDeliveryDate = function(ConfirmedDeliveryDate) {
	this.ConfirmedDeliveryDate = ConfirmedDeliveryDate;
	return this;
};

method.OrderQuantityUnit = function(OrderQuantityUnit) {
	this.OrderQuantityUnit = OrderQuantityUnit;
	return this;
};

method.ScheduleLineOrderQuantity = function(ScheduleLineOrderQuantity) {
	this.ScheduleLineOrderQuantity = ScheduleLineOrderQuantity;
	return this;
};

method.ConfdOrderQtyByMatlAvailCheck = function(ConfdOrderQtyByMatlAvailCheck) {
	this.ConfdOrderQtyByMatlAvailCheck = ConfdOrderQtyByMatlAvailCheck;
	return this;
};

method.DeliveredQtyInOrderQtyUnit = function(DeliveredQtyInOrderQtyUnit) {
	this.DeliveredQtyInOrderQtyUnit = DeliveredQtyInOrderQtyUnit;
	return this;
};

method.OpenConfdDelivQtyInOrdQtyUnit = function(OpenConfdDelivQtyInOrdQtyUnit) {
	this.OpenConfdDelivQtyInOrdQtyUnit = OpenConfdDelivQtyInOrdQtyUnit;
	return this;
};

method.CorrectedQtyInOrderQtyUnit = function(CorrectedQtyInOrderQtyUnit) {
	this.CorrectedQtyInOrderQtyUnit = CorrectedQtyInOrderQtyUnit;
	return this;
};

method.DelivBlockReasonForSchedLine = function(DelivBlockReasonForSchedLine) {
	this.DelivBlockReasonForSchedLine = DelivBlockReasonForSchedLine;
	return this;
};

method.build = function() {
	return {
		SalesOrder: this.SalesOrder,
		SalesOrderItem: this.SalesOrderItem,
		ScheduleLine: this.ScheduleLine,
		RequestedDeliveryDate: this.RequestedDeliveryDate,
		ConfirmedDeliveryDate: this.ConfirmedDeliveryDate,
		OrderQuantityUnit: this.OrderQuantityUnit,
		ScheduleLineOrderQuantity: this.ScheduleLineOrderQuantity,
		ConfdOrderQtyByMatlAvailCheck: this.ConfdOrderQtyByMatlAvailCheck,
		DeliveredQtyInOrderQtyUnit: this.DeliveredQtyInOrderQtyUnit,
		OpenConfdDelivQtyInOrdQtyUnit: this.OpenConfdDelivQtyInOrdQtyUnit,
		CorrectedQtyInOrderQtyUnit: this.CorrectedQtyInOrderQtyUnit,
		DelivBlockReasonForSchedLine: this.DelivBlockReasonForSchedLine
	};
};

module.exports = A_SalesOrderScheduleLineEntityBuilder;
