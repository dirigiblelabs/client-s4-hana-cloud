var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var A_SalesOrderItemEntityBuilder = require("sap-s4-hana-cloud/SalesOrder/Builders/A_SalesOrderItemEntityBuilder");

exports.SALES_ORDER = "SalesOrder";
exports.SALES_ORDER_ITEM = "SalesOrderItem";
exports.HIGHER_LEVEL_ITEM = "HigherLevelItem";
exports.SALES_ORDER_ITEM_CATEGORY = "SalesOrderItemCategory";
exports.SALES_ORDER_ITEM_TEXT = "SalesOrderItemText";
exports.PURCHASE_ORDER_BY_CUSTOMER = "PurchaseOrderByCustomer";
exports.MATERIAL = "Material";
exports.MATERIAL_BY_CUSTOMER = "MaterialByCustomer";
exports.PRICING_DATE = "PricingDate";
exports.REQUESTED_QUANTITY = "RequestedQuantity";
exports.REQUESTED_QUANTITY_UNIT = "RequestedQuantityUnit";
exports.ITEM_GROSS_WEIGHT = "ItemGrossWeight";
exports.ITEM_NET_WEIGHT = "ItemNetWeight";
exports.ITEM_WEIGHT_UNIT = "ItemWeightUnit";
exports.ITEM_VOLUME = "ItemVolume";
exports.ITEM_VOLUME_UNIT = "ItemVolumeUnit";
exports.TRANSACTION_CURRENCY = "TransactionCurrency";
exports.NET_AMOUNT = "NetAmount";
exports.MATERIAL_GROUP = "MaterialGroup";
exports.MATERIAL_PRICING_GROUP = "MaterialPricingGroup";
exports.BATCH = "Batch";
exports.PRODUCTION_PLANT = "ProductionPlant";
exports.STORAGE_LOCATION = "StorageLocation";
exports.DELIVERY_GROUP = "DeliveryGroup";
exports.SHIPPING_POINT = "ShippingPoint";
exports.SHIPPING_TYPE = "ShippingType";
exports.DELIVERY_PRIORITY = "DeliveryPriority";
exports.INCOTERMS_CLASSIFICATION = "IncotermsClassification";
exports.INCOTERMS_TRANSFER_LOCATION = "IncotermsTransferLocation";
exports.INCOTERMS_LOCATION1 = "IncotermsLocation1";
exports.INCOTERMS_LOCATION2 = "IncotermsLocation2";
exports.CUSTOMER_PAYMENT_TERMS = "CustomerPaymentTerms";
exports.SALES_DOCUMENT_RJCN_REASON = "SalesDocumentRjcnReason";
exports.ITEM_BILLING_BLOCK_REASON = "ItemBillingBlockReason";
exports.W_B_S_ELEMENT = "WBSElement";
exports.PROFIT_CENTER = "ProfitCenter";
exports.REFERENCE_S_D_DOCUMENT = "ReferenceSDDocument";
exports.REFERENCE_S_D_DOCUMENT_ITEM = "ReferenceSDDocumentItem";
exports.S_D_PROCESS_STATUS = "SDProcessStatus";
exports.DELIVERY_STATUS = "DeliveryStatus";
exports.ORDER_RELATED_BILLING_STATUS = "OrderRelatedBillingStatus";
exports.TO__PARTNER = "to_Partner";
exports.TO__PRICING_ELEMENT = "to_PricingElement";
exports.TO__SALES_ORDER = "to_SalesOrder";
exports.TO__SCHEDULE_LINE = "to_ScheduleLine";
exports.TO__TEXT = "to_Text";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new A_SalesOrderItemEntityBuilder();
};

exports.getClient = function(configurations) {
	return new A_SalesOrderItemClient(configurations);
};

function A_SalesOrderItemClient (configurations) {

	var API_PATH = "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrderItem";

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
