var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var A_SlsOrdPaymentPlanItemDetailsEntityBuilder = require("sap-s4-hana-cloud/SalesOrder/Builders/A_SlsOrdPaymentPlanItemDetailsEntityBuilder");

exports.SALES_ORDER = "SalesOrder";
exports.PAYMENT_PLAN_ITEM = "PaymentPlanItem";
exports.PAYMENT_PLAN = "PaymentPlan";
exports.ELECTRONIC_PAYMENT_TYPE = "ElectronicPaymentType";
exports.ELECTRONIC_PAYMENT = "ElectronicPayment";
exports.E_PAYT_VALIDITY_START_DATE = "EPaytValidityStartDate";
exports.E_PAYT_VALIDITY_END_DATE = "EPaytValidityEndDate";
exports.ELECTRONIC_PAYMENT_HOLDER_NAME = "ElectronicPaymentHolderName";
exports.AUTHORIZED_AMOUNT_IN_AUTHZN_CRCY = "AuthorizedAmountInAuthznCrcy";
exports.AUTHORIZATION_CURRENCY = "AuthorizationCurrency";
exports.AUTHORIZATION_BY_DIGITAL_PAYT_SRVC = "AuthorizationByDigitalPaytSrvc";
exports.AUTHORIZATION_BY_ACQUIRER = "AuthorizationByAcquirer";
exports.AUTHORIZATION_DATE = "AuthorizationDate";
exports.AUTHORIZATION_TIME = "AuthorizationTime";
exports.AUTHORIZATION_STATUS_NAME = "AuthorizationStatusName";
exports.E_PAYT_BY_DIGITAL_PAYMENT_SRVC = "EPaytByDigitalPaymentSrvc";
exports.ELECTRONIC_PAYMENT_CALL_STATUS = "ElectronicPaymentCallStatus";
exports.E_PAYT_AUTHORIZATION_RESULT = "EPaytAuthorizationResult";
exports.E_PAYT_TO_BE_AUTHORIZED_AMOUNT = "EPaytToBeAuthorizedAmount";
exports.E_PAYT_AUTHORIZATION_IS_EXPIRED = "EPaytAuthorizationIsExpired";
exports.E_PAYT_AMOUNT_IS_CHANGED = "EPaytAmountIsChanged";
exports.PREAUTHORIZATION_IS_REQUESTED = "PreauthorizationIsRequested";
exports.PAYMENT_SERVICE_PROVIDER = "PaymentServiceProvider";
exports.PAYMENT_BY_PAYMENT_SERVICE_PRVDR = "PaymentByPaymentServicePrvdr";
exports.TRANSACTION_BY_PAYT_SRVC_PRVDR = "TransactionByPaytSrvcPrvdr";
exports.MERCHANT_BY_CLEARING_HOUSE = "MerchantByClearingHouse";
exports.MAXIMUM_TO_BE_AUTHORIZED_AMOUNT = "MaximumToBeAuthorizedAmount";
exports.PAYT_PLN_FOR_AUTHORIZATION_ITEM = "PaytPlnForAuthorizationItem";
exports.PAYT_PLN_ITM_FOR_AUTHORIZATION_ITEM = "PaytPlnItmForAuthorizationItem";
exports.TO__SALES_ORDER = "to_SalesOrder";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new A_SlsOrdPaymentPlanItemDetailsEntityBuilder();
};

exports.getClient = function(configurations) {
	return new A_SlsOrdPaymentPlanItemDetailsClient(configurations);
};

function A_SlsOrdPaymentPlanItemDetailsClient (configurations) {

	var API_PATH = "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SlsOrdPaymentPlanItemDetails";

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
