var method = A_SalesOrderItemPrElementEntityBuilder.prototype;

function A_SalesOrderItemPrElementEntityBuilder() {

}

method.SalesOrder = function(SalesOrder) {
	this.SalesOrder = SalesOrder;
	return this;
};

method.SalesOrderItem = function(SalesOrderItem) {
	this.SalesOrderItem = SalesOrderItem;
	return this;
};

method.PricingProcedureStep = function(PricingProcedureStep) {
	this.PricingProcedureStep = PricingProcedureStep;
	return this;
};

method.PricingProcedureCounter = function(PricingProcedureCounter) {
	this.PricingProcedureCounter = PricingProcedureCounter;
	return this;
};

method.ConditionType = function(ConditionType) {
	this.ConditionType = ConditionType;
	return this;
};

method.PricingDateTime = function(PricingDateTime) {
	this.PricingDateTime = PricingDateTime;
	return this;
};

method.ConditionCalculationType = function(ConditionCalculationType) {
	this.ConditionCalculationType = ConditionCalculationType;
	return this;
};

method.ConditionBaseValue = function(ConditionBaseValue) {
	this.ConditionBaseValue = ConditionBaseValue;
	return this;
};

method.ConditionRateValue = function(ConditionRateValue) {
	this.ConditionRateValue = ConditionRateValue;
	return this;
};

method.ConditionCurrency = function(ConditionCurrency) {
	this.ConditionCurrency = ConditionCurrency;
	return this;
};

method.ConditionQuantity = function(ConditionQuantity) {
	this.ConditionQuantity = ConditionQuantity;
	return this;
};

method.ConditionQuantityUnit = function(ConditionQuantityUnit) {
	this.ConditionQuantityUnit = ConditionQuantityUnit;
	return this;
};

method.ConditionCategory = function(ConditionCategory) {
	this.ConditionCategory = ConditionCategory;
	return this;
};

method.ConditionIsForStatistics = function(ConditionIsForStatistics) {
	this.ConditionIsForStatistics = ConditionIsForStatistics;
	return this;
};

method.PricingScaleType = function(PricingScaleType) {
	this.PricingScaleType = PricingScaleType;
	return this;
};

method.IsRelevantForAccrual = function(IsRelevantForAccrual) {
	this.IsRelevantForAccrual = IsRelevantForAccrual;
	return this;
};

method.CndnIsRelevantForInvoiceList = function(CndnIsRelevantForInvoiceList) {
	this.CndnIsRelevantForInvoiceList = CndnIsRelevantForInvoiceList;
	return this;
};

method.ConditionOrigin = function(ConditionOrigin) {
	this.ConditionOrigin = ConditionOrigin;
	return this;
};

method.IsGroupCondition = function(IsGroupCondition) {
	this.IsGroupCondition = IsGroupCondition;
	return this;
};

method.ConditionRecord = function(ConditionRecord) {
	this.ConditionRecord = ConditionRecord;
	return this;
};

method.ConditionSequentialNumber = function(ConditionSequentialNumber) {
	this.ConditionSequentialNumber = ConditionSequentialNumber;
	return this;
};

method.TaxCode = function(TaxCode) {
	this.TaxCode = TaxCode;
	return this;
};

method.WithholdingTaxCode = function(WithholdingTaxCode) {
	this.WithholdingTaxCode = WithholdingTaxCode;
	return this;
};

method.CndnRoundingOffDiffAmount = function(CndnRoundingOffDiffAmount) {
	this.CndnRoundingOffDiffAmount = CndnRoundingOffDiffAmount;
	return this;
};

method.ConditionAmount = function(ConditionAmount) {
	this.ConditionAmount = ConditionAmount;
	return this;
};

method.TransactionCurrency = function(TransactionCurrency) {
	this.TransactionCurrency = TransactionCurrency;
	return this;
};

method.ConditionControl = function(ConditionControl) {
	this.ConditionControl = ConditionControl;
	return this;
};

method.ConditionInactiveReason = function(ConditionInactiveReason) {
	this.ConditionInactiveReason = ConditionInactiveReason;
	return this;
};

method.ConditionClass = function(ConditionClass) {
	this.ConditionClass = ConditionClass;
	return this;
};

method.PrcgProcedureCounterForHeader = function(PrcgProcedureCounterForHeader) {
	this.PrcgProcedureCounterForHeader = PrcgProcedureCounterForHeader;
	return this;
};

method.FactorForConditionBasisValue = function(FactorForConditionBasisValue) {
	this.FactorForConditionBasisValue = FactorForConditionBasisValue;
	return this;
};

method.StructureCondition = function(StructureCondition) {
	this.StructureCondition = StructureCondition;
	return this;
};

method.PeriodFactorForCndnBasisValue = function(PeriodFactorForCndnBasisValue) {
	this.PeriodFactorForCndnBasisValue = PeriodFactorForCndnBasisValue;
	return this;
};

method.PricingScaleBasis = function(PricingScaleBasis) {
	this.PricingScaleBasis = PricingScaleBasis;
	return this;
};

method.ConditionScaleBasisValue = function(ConditionScaleBasisValue) {
	this.ConditionScaleBasisValue = ConditionScaleBasisValue;
	return this;
};

method.ConditionScaleBasisUnit = function(ConditionScaleBasisUnit) {
	this.ConditionScaleBasisUnit = ConditionScaleBasisUnit;
	return this;
};

method.ConditionScaleBasisCurrency = function(ConditionScaleBasisCurrency) {
	this.ConditionScaleBasisCurrency = ConditionScaleBasisCurrency;
	return this;
};

method.CndnIsRelevantForIntcoBilling = function(CndnIsRelevantForIntcoBilling) {
	this.CndnIsRelevantForIntcoBilling = CndnIsRelevantForIntcoBilling;
	return this;
};

method.ConditionIsManuallyChanged = function(ConditionIsManuallyChanged) {
	this.ConditionIsManuallyChanged = ConditionIsManuallyChanged;
	return this;
};

method.ConditionIsForConfiguration = function(ConditionIsForConfiguration) {
	this.ConditionIsForConfiguration = ConditionIsForConfiguration;
	return this;
};

method.VariantCondition = function(VariantCondition) {
	this.VariantCondition = VariantCondition;
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
		PricingProcedureStep: this.PricingProcedureStep,
		PricingProcedureCounter: this.PricingProcedureCounter,
		ConditionType: this.ConditionType,
		PricingDateTime: this.PricingDateTime,
		ConditionCalculationType: this.ConditionCalculationType,
		ConditionBaseValue: this.ConditionBaseValue,
		ConditionRateValue: this.ConditionRateValue,
		ConditionCurrency: this.ConditionCurrency,
		ConditionQuantity: this.ConditionQuantity,
		ConditionQuantityUnit: this.ConditionQuantityUnit,
		ConditionCategory: this.ConditionCategory,
		ConditionIsForStatistics: this.ConditionIsForStatistics,
		PricingScaleType: this.PricingScaleType,
		IsRelevantForAccrual: this.IsRelevantForAccrual,
		CndnIsRelevantForInvoiceList: this.CndnIsRelevantForInvoiceList,
		ConditionOrigin: this.ConditionOrigin,
		IsGroupCondition: this.IsGroupCondition,
		ConditionRecord: this.ConditionRecord,
		ConditionSequentialNumber: this.ConditionSequentialNumber,
		TaxCode: this.TaxCode,
		WithholdingTaxCode: this.WithholdingTaxCode,
		CndnRoundingOffDiffAmount: this.CndnRoundingOffDiffAmount,
		ConditionAmount: this.ConditionAmount,
		TransactionCurrency: this.TransactionCurrency,
		ConditionControl: this.ConditionControl,
		ConditionInactiveReason: this.ConditionInactiveReason,
		ConditionClass: this.ConditionClass,
		PrcgProcedureCounterForHeader: this.PrcgProcedureCounterForHeader,
		FactorForConditionBasisValue: this.FactorForConditionBasisValue,
		StructureCondition: this.StructureCondition,
		PeriodFactorForCndnBasisValue: this.PeriodFactorForCndnBasisValue,
		PricingScaleBasis: this.PricingScaleBasis,
		ConditionScaleBasisValue: this.ConditionScaleBasisValue,
		ConditionScaleBasisUnit: this.ConditionScaleBasisUnit,
		ConditionScaleBasisCurrency: this.ConditionScaleBasisCurrency,
		CndnIsRelevantForIntcoBilling: this.CndnIsRelevantForIntcoBilling,
		ConditionIsManuallyChanged: this.ConditionIsManuallyChanged,
		ConditionIsForConfiguration: this.ConditionIsForConfiguration,
		VariantCondition: this.VariantCondition,
		to_SalesOrder: this.to_SalesOrder,
		to_SalesOrderItem: this.to_SalesOrderItem
	};
};

module.exports = A_SalesOrderItemPrElementEntityBuilder;
