var method = A_SalesOrderItemEntityBuilder.prototype;

function A_SalesOrderItemEntityBuilder() {

}

method.SalesOrder = function(SalesOrder) {
	this.SalesOrder = SalesOrder;
	return this;
};

method.SalesOrderItem = function(SalesOrderItem) {
	this.SalesOrderItem = SalesOrderItem;
	return this;
};

method.HigherLevelItem = function(HigherLevelItem) {
	this.HigherLevelItem = HigherLevelItem;
	return this;
};

method.SalesOrderItemCategory = function(SalesOrderItemCategory) {
	this.SalesOrderItemCategory = SalesOrderItemCategory;
	return this;
};

method.SalesOrderItemText = function(SalesOrderItemText) {
	this.SalesOrderItemText = SalesOrderItemText;
	return this;
};

method.PurchaseOrderByCustomer = function(PurchaseOrderByCustomer) {
	this.PurchaseOrderByCustomer = PurchaseOrderByCustomer;
	return this;
};

method.Material = function(Material) {
	this.Material = Material;
	return this;
};

method.MaterialByCustomer = function(MaterialByCustomer) {
	this.MaterialByCustomer = MaterialByCustomer;
	return this;
};

method.PricingDate = function(PricingDate) {
	this.PricingDate = PricingDate;
	return this;
};

method.RequestedQuantity = function(RequestedQuantity) {
	this.RequestedQuantity = RequestedQuantity;
	return this;
};

method.RequestedQuantityUnit = function(RequestedQuantityUnit) {
	this.RequestedQuantityUnit = RequestedQuantityUnit;
	return this;
};

method.ItemGrossWeight = function(ItemGrossWeight) {
	this.ItemGrossWeight = ItemGrossWeight;
	return this;
};

method.ItemNetWeight = function(ItemNetWeight) {
	this.ItemNetWeight = ItemNetWeight;
	return this;
};

method.ItemWeightUnit = function(ItemWeightUnit) {
	this.ItemWeightUnit = ItemWeightUnit;
	return this;
};

method.ItemVolume = function(ItemVolume) {
	this.ItemVolume = ItemVolume;
	return this;
};

method.ItemVolumeUnit = function(ItemVolumeUnit) {
	this.ItemVolumeUnit = ItemVolumeUnit;
	return this;
};

method.TransactionCurrency = function(TransactionCurrency) {
	this.TransactionCurrency = TransactionCurrency;
	return this;
};

method.NetAmount = function(NetAmount) {
	this.NetAmount = NetAmount;
	return this;
};

method.MaterialGroup = function(MaterialGroup) {
	this.MaterialGroup = MaterialGroup;
	return this;
};

method.MaterialPricingGroup = function(MaterialPricingGroup) {
	this.MaterialPricingGroup = MaterialPricingGroup;
	return this;
};

method.Batch = function(Batch) {
	this.Batch = Batch;
	return this;
};

method.ProductionPlant = function(ProductionPlant) {
	this.ProductionPlant = ProductionPlant;
	return this;
};

method.StorageLocation = function(StorageLocation) {
	this.StorageLocation = StorageLocation;
	return this;
};

method.DeliveryGroup = function(DeliveryGroup) {
	this.DeliveryGroup = DeliveryGroup;
	return this;
};

method.ShippingPoint = function(ShippingPoint) {
	this.ShippingPoint = ShippingPoint;
	return this;
};

method.ShippingType = function(ShippingType) {
	this.ShippingType = ShippingType;
	return this;
};

method.DeliveryPriority = function(DeliveryPriority) {
	this.DeliveryPriority = DeliveryPriority;
	return this;
};

method.IncotermsClassification = function(IncotermsClassification) {
	this.IncotermsClassification = IncotermsClassification;
	return this;
};

method.IncotermsTransferLocation = function(IncotermsTransferLocation) {
	this.IncotermsTransferLocation = IncotermsTransferLocation;
	return this;
};

method.IncotermsLocation1 = function(IncotermsLocation1) {
	this.IncotermsLocation1 = IncotermsLocation1;
	return this;
};

method.IncotermsLocation2 = function(IncotermsLocation2) {
	this.IncotermsLocation2 = IncotermsLocation2;
	return this;
};

method.CustomerPaymentTerms = function(CustomerPaymentTerms) {
	this.CustomerPaymentTerms = CustomerPaymentTerms;
	return this;
};

method.SalesDocumentRjcnReason = function(SalesDocumentRjcnReason) {
	this.SalesDocumentRjcnReason = SalesDocumentRjcnReason;
	return this;
};

method.ItemBillingBlockReason = function(ItemBillingBlockReason) {
	this.ItemBillingBlockReason = ItemBillingBlockReason;
	return this;
};

method.WBSElement = function(WBSElement) {
	this.WBSElement = WBSElement;
	return this;
};

method.ProfitCenter = function(ProfitCenter) {
	this.ProfitCenter = ProfitCenter;
	return this;
};

method.ReferenceSDDocument = function(ReferenceSDDocument) {
	this.ReferenceSDDocument = ReferenceSDDocument;
	return this;
};

method.ReferenceSDDocumentItem = function(ReferenceSDDocumentItem) {
	this.ReferenceSDDocumentItem = ReferenceSDDocumentItem;
	return this;
};

method.SDProcessStatus = function(SDProcessStatus) {
	this.SDProcessStatus = SDProcessStatus;
	return this;
};

method.DeliveryStatus = function(DeliveryStatus) {
	this.DeliveryStatus = DeliveryStatus;
	return this;
};

method.OrderRelatedBillingStatus = function(OrderRelatedBillingStatus) {
	this.OrderRelatedBillingStatus = OrderRelatedBillingStatus;
	return this;
};

method.to_Partner = function(to_Partner) {
	this.to_Partner = to_Partner;
	return this;
};

method.to_PricingElement = function(to_PricingElement) {
	this.to_PricingElement = to_PricingElement;
	return this;
};

method.to_SalesOrder = function(to_SalesOrder) {
	this.to_SalesOrder = to_SalesOrder;
	return this;
};

method.to_ScheduleLine = function(to_ScheduleLine) {
	this.to_ScheduleLine = to_ScheduleLine;
	return this;
};

method.to_Text = function(to_Text) {
	this.to_Text = to_Text;
	return this;
};

method.build = function() {
	return {
		SalesOrder: this.SalesOrder,
		SalesOrderItem: this.SalesOrderItem,
		HigherLevelItem: this.HigherLevelItem,
		SalesOrderItemCategory: this.SalesOrderItemCategory,
		SalesOrderItemText: this.SalesOrderItemText,
		PurchaseOrderByCustomer: this.PurchaseOrderByCustomer,
		Material: this.Material,
		MaterialByCustomer: this.MaterialByCustomer,
		PricingDate: this.PricingDate,
		RequestedQuantity: this.RequestedQuantity,
		RequestedQuantityUnit: this.RequestedQuantityUnit,
		ItemGrossWeight: this.ItemGrossWeight,
		ItemNetWeight: this.ItemNetWeight,
		ItemWeightUnit: this.ItemWeightUnit,
		ItemVolume: this.ItemVolume,
		ItemVolumeUnit: this.ItemVolumeUnit,
		TransactionCurrency: this.TransactionCurrency,
		NetAmount: this.NetAmount,
		MaterialGroup: this.MaterialGroup,
		MaterialPricingGroup: this.MaterialPricingGroup,
		Batch: this.Batch,
		ProductionPlant: this.ProductionPlant,
		StorageLocation: this.StorageLocation,
		DeliveryGroup: this.DeliveryGroup,
		ShippingPoint: this.ShippingPoint,
		ShippingType: this.ShippingType,
		DeliveryPriority: this.DeliveryPriority,
		IncotermsClassification: this.IncotermsClassification,
		IncotermsTransferLocation: this.IncotermsTransferLocation,
		IncotermsLocation1: this.IncotermsLocation1,
		IncotermsLocation2: this.IncotermsLocation2,
		CustomerPaymentTerms: this.CustomerPaymentTerms,
		SalesDocumentRjcnReason: this.SalesDocumentRjcnReason,
		ItemBillingBlockReason: this.ItemBillingBlockReason,
		WBSElement: this.WBSElement,
		ProfitCenter: this.ProfitCenter,
		ReferenceSDDocument: this.ReferenceSDDocument,
		ReferenceSDDocumentItem: this.ReferenceSDDocumentItem,
		SDProcessStatus: this.SDProcessStatus,
		DeliveryStatus: this.DeliveryStatus,
		OrderRelatedBillingStatus: this.OrderRelatedBillingStatus,
		to_Partner: this.to_Partner,
		to_PricingElement: this.to_PricingElement,
		to_SalesOrder: this.to_SalesOrder,
		to_ScheduleLine: this.to_ScheduleLine,
		to_Text: this.to_Text
	};
};

module.exports = A_SalesOrderItemEntityBuilder;
