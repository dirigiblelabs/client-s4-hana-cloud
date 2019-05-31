var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var A_SalesOrderItemPrElementEntityBuilder = require("sap-s4-hana-cloud/SalesOrder/Builders/A_SalesOrderItemPrElementEntityBuilder");

exports.SALES_ORDER = "SalesOrder";
exports.SALES_ORDER_ITEM = "SalesOrderItem";
exports.PRICING_PROCEDURE_STEP = "PricingProcedureStep";
exports.PRICING_PROCEDURE_COUNTER = "PricingProcedureCounter";
exports.CONDITION_TYPE = "ConditionType";
exports.PRICING_DATE_TIME = "PricingDateTime";
exports.CONDITION_CALCULATION_TYPE = "ConditionCalculationType";
exports.CONDITION_BASE_VALUE = "ConditionBaseValue";
exports.CONDITION_RATE_VALUE = "ConditionRateValue";
exports.CONDITION_CURRENCY = "ConditionCurrency";
exports.CONDITION_QUANTITY = "ConditionQuantity";
exports.CONDITION_QUANTITY_UNIT = "ConditionQuantityUnit";
exports.CONDITION_CATEGORY = "ConditionCategory";
exports.CONDITION_IS_FOR_STATISTICS = "ConditionIsForStatistics";
exports.PRICING_SCALE_TYPE = "PricingScaleType";
exports.IS_RELEVANT_FOR_ACCRUAL = "IsRelevantForAccrual";
exports.CNDN_IS_RELEVANT_FOR_INVOICE_LIST = "CndnIsRelevantForInvoiceList";
exports.CONDITION_ORIGIN = "ConditionOrigin";
exports.IS_GROUP_CONDITION = "IsGroupCondition";
exports.CONDITION_RECORD = "ConditionRecord";
exports.CONDITION_SEQUENTIAL_NUMBER = "ConditionSequentialNumber";
exports.TAX_CODE = "TaxCode";
exports.WITHHOLDING_TAX_CODE = "WithholdingTaxCode";
exports.CNDN_ROUNDING_OFF_DIFF_AMOUNT = "CndnRoundingOffDiffAmount";
exports.CONDITION_AMOUNT = "ConditionAmount";
exports.TRANSACTION_CURRENCY = "TransactionCurrency";
exports.CONDITION_CONTROL = "ConditionControl";
exports.CONDITION_INACTIVE_REASON = "ConditionInactiveReason";
exports.CONDITION_CLASS = "ConditionClass";
exports.PRCG_PROCEDURE_COUNTER_FOR_HEADER = "PrcgProcedureCounterForHeader";
exports.FACTOR_FOR_CONDITION_BASIS_VALUE = "FactorForConditionBasisValue";
exports.STRUCTURE_CONDITION = "StructureCondition";
exports.PERIOD_FACTOR_FOR_CNDN_BASIS_VALUE = "PeriodFactorForCndnBasisValue";
exports.PRICING_SCALE_BASIS = "PricingScaleBasis";
exports.CONDITION_SCALE_BASIS_VALUE = "ConditionScaleBasisValue";
exports.CONDITION_SCALE_BASIS_UNIT = "ConditionScaleBasisUnit";
exports.CONDITION_SCALE_BASIS_CURRENCY = "ConditionScaleBasisCurrency";
exports.CNDN_IS_RELEVANT_FOR_INTCO_BILLING = "CndnIsRelevantForIntcoBilling";
exports.CONDITION_IS_MANUALLY_CHANGED = "ConditionIsManuallyChanged";
exports.CONDITION_IS_FOR_CONFIGURATION = "ConditionIsForConfiguration";
exports.VARIANT_CONDITION = "VariantCondition";
exports.TO__SALES_ORDER = "to_SalesOrder";
exports.TO__SALES_ORDER_ITEM = "to_SalesOrderItem";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new A_SalesOrderItemPrElementEntityBuilder();
};

exports.getClient = function(configurations) {
	return new A_SalesOrderItemPrElementClient(configurations);
};

function A_SalesOrderItemPrElementClient (configurations) {

	var API_PATH = "/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrderItemPrElement";

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
