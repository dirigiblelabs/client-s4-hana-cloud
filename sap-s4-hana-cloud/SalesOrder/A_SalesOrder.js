var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var A_SalesOrderEntityBuilder = require("sap-s4-hana-cloud/SalesOrder/Builders/A_SalesOrderEntityBuilder");

exports.SALES_ORDER = "SalesOrder";
exports.SALES_ORDER_TYPE = "SalesOrderType";
exports.SALES_ORGANIZATION = "SalesOrganization";
exports.DISTRIBUTION_CHANNEL = "DistributionChannel";
exports.ORGANIZATION_DIVISION = "OrganizationDivision";
exports.SALES_GROUP = "SalesGroup";
exports.SALES_OFFICE = "SalesOffice";
exports.SALES_DISTRICT = "SalesDistrict";
exports.SOLD_TO_PARTY = "SoldToParty";
exports.CREATION_DATE = "CreationDate";
exports.CREATED_BY_USER = "CreatedByUser";
exports.LAST_CHANGE_DATE = "LastChangeDate";
exports.LAST_CHANGE_DATE_TIME = "LastChangeDateTime";
exports.PURCHASE_ORDER_BY_CUSTOMER = "PurchaseOrderByCustomer";
exports.CUSTOMER_PURCHASE_ORDER_TYPE = "CustomerPurchaseOrderType";
exports.CUSTOMER_PURCHASE_ORDER_DATE = "CustomerPurchaseOrderDate";
exports.SALES_ORDER_DATE = "SalesOrderDate";
exports.TOTAL_NET_AMOUNT = "TotalNetAmount";
exports.TRANSACTION_CURRENCY = "TransactionCurrency";
exports.S_D_DOCUMENT_REASON = "SDDocumentReason";
exports.PRICING_DATE = "PricingDate";
exports.REQUESTED_DELIVERY_DATE = "RequestedDeliveryDate";
exports.SHIPPING_CONDITION = "ShippingCondition";
exports.COMPLETE_DELIVERY_IS_DEFINED = "CompleteDeliveryIsDefined";
exports.SHIPPING_TYPE = "ShippingType";
exports.HEADER_BILLING_BLOCK_REASON = "HeaderBillingBlockReason";
exports.DELIVERY_BLOCK_REASON = "DeliveryBlockReason";
exports.INCOTERMS_CLASSIFICATION = "IncotermsClassification";
exports.INCOTERMS_TRANSFER_LOCATION = "IncotermsTransferLocation";
exports.INCOTERMS_LOCATION1 = "IncotermsLocation1";
exports.INCOTERMS_LOCATION2 = "IncotermsLocation2";
exports.INCOTERMS_VERSION = "IncotermsVersion";
exports.CUSTOMER_PAYMENT_TERMS = "CustomerPaymentTerms";
exports.PAYMENT_METHOD = "PaymentMethod";
exports.ASSIGNMENT_REFERENCE = "AssignmentReference";
exports.REFERENCE_S_D_DOCUMENT = "ReferenceSDDocument";
exports.REFERENCE_S_D_DOCUMENT_CATEGORY = "ReferenceSDDocumentCategory";
exports.CUSTOMER_TAX_CLASSIFICATION1 = "CustomerTaxClassification1";
exports.TAX_DEPARTURE_COUNTRY = "TaxDepartureCountry";
exports.V_A_T_REGISTRATION_COUNTRY = "VATRegistrationCountry";
exports.SALES_ORDER_APPROVAL_REASON = "SalesOrderApprovalReason";
exports.SALES_DOC_APPROVAL_STATUS = "SalesDocApprovalStatus";
exports.OVERALL_S_D_PROCESS_STATUS = "OverallSDProcessStatus";
exports.TOTAL_CREDIT_CHECK_STATUS = "TotalCreditCheckStatus";
exports.OVERALL_TOTAL_DELIVERY_STATUS = "OverallTotalDeliveryStatus";
exports.OVERALL_S_D_DOCUMENT_REJECTION_STS = "OverallSDDocumentRejectionSts";
exports.TO__ITEM = "to_Item";
exports.TO__PARTNER = "to_Partner";
exports.TO__PAYMENT_PLAN_ITEM_DETAILS = "to_PaymentPlanItemDetails";
exports.TO__PRICING_ELEMENT = "to_PricingElement";
exports.TO__TEXT = "to_Text";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new A_SalesOrderEntityBuilder();
};

exports.getClient = function(configurations) {
	return new A_SalesOrderClient(configurations);
};

function A_SalesOrderClient (configurations) {

	var API_PATH = "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder";

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
