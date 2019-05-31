var method = A_SlsOrdPaymentPlanItemDetailsEntityBuilder.prototype;

function A_SlsOrdPaymentPlanItemDetailsEntityBuilder() {

}

method.SalesOrder = function(SalesOrder) {
	this.SalesOrder = SalesOrder;
	return this;
};

method.PaymentPlanItem = function(PaymentPlanItem) {
	this.PaymentPlanItem = PaymentPlanItem;
	return this;
};

method.PaymentPlan = function(PaymentPlan) {
	this.PaymentPlan = PaymentPlan;
	return this;
};

method.ElectronicPaymentType = function(ElectronicPaymentType) {
	this.ElectronicPaymentType = ElectronicPaymentType;
	return this;
};

method.ElectronicPayment = function(ElectronicPayment) {
	this.ElectronicPayment = ElectronicPayment;
	return this;
};

method.EPaytValidityStartDate = function(EPaytValidityStartDate) {
	this.EPaytValidityStartDate = EPaytValidityStartDate;
	return this;
};

method.EPaytValidityEndDate = function(EPaytValidityEndDate) {
	this.EPaytValidityEndDate = EPaytValidityEndDate;
	return this;
};

method.ElectronicPaymentHolderName = function(ElectronicPaymentHolderName) {
	this.ElectronicPaymentHolderName = ElectronicPaymentHolderName;
	return this;
};

method.AuthorizedAmountInAuthznCrcy = function(AuthorizedAmountInAuthznCrcy) {
	this.AuthorizedAmountInAuthznCrcy = AuthorizedAmountInAuthznCrcy;
	return this;
};

method.AuthorizationCurrency = function(AuthorizationCurrency) {
	this.AuthorizationCurrency = AuthorizationCurrency;
	return this;
};

method.AuthorizationByDigitalPaytSrvc = function(AuthorizationByDigitalPaytSrvc) {
	this.AuthorizationByDigitalPaytSrvc = AuthorizationByDigitalPaytSrvc;
	return this;
};

method.AuthorizationByAcquirer = function(AuthorizationByAcquirer) {
	this.AuthorizationByAcquirer = AuthorizationByAcquirer;
	return this;
};

method.AuthorizationDate = function(AuthorizationDate) {
	this.AuthorizationDate = AuthorizationDate;
	return this;
};

method.AuthorizationTime = function(AuthorizationTime) {
	this.AuthorizationTime = AuthorizationTime;
	return this;
};

method.AuthorizationStatusName = function(AuthorizationStatusName) {
	this.AuthorizationStatusName = AuthorizationStatusName;
	return this;
};

method.EPaytByDigitalPaymentSrvc = function(EPaytByDigitalPaymentSrvc) {
	this.EPaytByDigitalPaymentSrvc = EPaytByDigitalPaymentSrvc;
	return this;
};

method.ElectronicPaymentCallStatus = function(ElectronicPaymentCallStatus) {
	this.ElectronicPaymentCallStatus = ElectronicPaymentCallStatus;
	return this;
};

method.EPaytAuthorizationResult = function(EPaytAuthorizationResult) {
	this.EPaytAuthorizationResult = EPaytAuthorizationResult;
	return this;
};

method.EPaytToBeAuthorizedAmount = function(EPaytToBeAuthorizedAmount) {
	this.EPaytToBeAuthorizedAmount = EPaytToBeAuthorizedAmount;
	return this;
};

method.EPaytAuthorizationIsExpired = function(EPaytAuthorizationIsExpired) {
	this.EPaytAuthorizationIsExpired = EPaytAuthorizationIsExpired;
	return this;
};

method.EPaytAmountIsChanged = function(EPaytAmountIsChanged) {
	this.EPaytAmountIsChanged = EPaytAmountIsChanged;
	return this;
};

method.PreauthorizationIsRequested = function(PreauthorizationIsRequested) {
	this.PreauthorizationIsRequested = PreauthorizationIsRequested;
	return this;
};

method.PaymentServiceProvider = function(PaymentServiceProvider) {
	this.PaymentServiceProvider = PaymentServiceProvider;
	return this;
};

method.PaymentByPaymentServicePrvdr = function(PaymentByPaymentServicePrvdr) {
	this.PaymentByPaymentServicePrvdr = PaymentByPaymentServicePrvdr;
	return this;
};

method.TransactionByPaytSrvcPrvdr = function(TransactionByPaytSrvcPrvdr) {
	this.TransactionByPaytSrvcPrvdr = TransactionByPaytSrvcPrvdr;
	return this;
};

method.MerchantByClearingHouse = function(MerchantByClearingHouse) {
	this.MerchantByClearingHouse = MerchantByClearingHouse;
	return this;
};

method.MaximumToBeAuthorizedAmount = function(MaximumToBeAuthorizedAmount) {
	this.MaximumToBeAuthorizedAmount = MaximumToBeAuthorizedAmount;
	return this;
};

method.PaytPlnForAuthorizationItem = function(PaytPlnForAuthorizationItem) {
	this.PaytPlnForAuthorizationItem = PaytPlnForAuthorizationItem;
	return this;
};

method.PaytPlnItmForAuthorizationItem = function(PaytPlnItmForAuthorizationItem) {
	this.PaytPlnItmForAuthorizationItem = PaytPlnItmForAuthorizationItem;
	return this;
};

method.to_SalesOrder = function(to_SalesOrder) {
	this.to_SalesOrder = to_SalesOrder;
	return this;
};

method.build = function() {
	return {
		SalesOrder: this.SalesOrder,
		PaymentPlanItem: this.PaymentPlanItem,
		PaymentPlan: this.PaymentPlan,
		ElectronicPaymentType: this.ElectronicPaymentType,
		ElectronicPayment: this.ElectronicPayment,
		EPaytValidityStartDate: this.EPaytValidityStartDate,
		EPaytValidityEndDate: this.EPaytValidityEndDate,
		ElectronicPaymentHolderName: this.ElectronicPaymentHolderName,
		AuthorizedAmountInAuthznCrcy: this.AuthorizedAmountInAuthznCrcy,
		AuthorizationCurrency: this.AuthorizationCurrency,
		AuthorizationByDigitalPaytSrvc: this.AuthorizationByDigitalPaytSrvc,
		AuthorizationByAcquirer: this.AuthorizationByAcquirer,
		AuthorizationDate: this.AuthorizationDate,
		AuthorizationTime: this.AuthorizationTime,
		AuthorizationStatusName: this.AuthorizationStatusName,
		EPaytByDigitalPaymentSrvc: this.EPaytByDigitalPaymentSrvc,
		ElectronicPaymentCallStatus: this.ElectronicPaymentCallStatus,
		EPaytAuthorizationResult: this.EPaytAuthorizationResult,
		EPaytToBeAuthorizedAmount: this.EPaytToBeAuthorizedAmount,
		EPaytAuthorizationIsExpired: this.EPaytAuthorizationIsExpired,
		EPaytAmountIsChanged: this.EPaytAmountIsChanged,
		PreauthorizationIsRequested: this.PreauthorizationIsRequested,
		PaymentServiceProvider: this.PaymentServiceProvider,
		PaymentByPaymentServicePrvdr: this.PaymentByPaymentServicePrvdr,
		TransactionByPaytSrvcPrvdr: this.TransactionByPaytSrvcPrvdr,
		MerchantByClearingHouse: this.MerchantByClearingHouse,
		MaximumToBeAuthorizedAmount: this.MaximumToBeAuthorizedAmount,
		PaytPlnForAuthorizationItem: this.PaytPlnForAuthorizationItem,
		PaytPlnItmForAuthorizationItem: this.PaytPlnItmForAuthorizationItem,
		to_SalesOrder: this.to_SalesOrder
	};
};

module.exports = A_SlsOrdPaymentPlanItemDetailsEntityBuilder;
