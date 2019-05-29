var response = require("http/v4/response");
var A_SalesOrder = require("sap-s4-hana-cloud/SalesOrder/A_SalesOrder");

var salesOrderClient = A_SalesOrder.getClient({
	host: "https://sandbox.api.sap.com/s4hanacloud",
	headers: [{
		name: "apikey",
		value: "FdBtU945pdvZY4NtrZAj2Cf8l7mEQKaS"
	}]
});

var data = salesOrderClient.list(A_SalesOrder.queryBuilder()
	.select(
		A_SalesOrder.SALES_ORDER,
		A_SalesOrder.SALES_ORDER_TYPE,
		A_SalesOrder.SALES_DOC_APPROVAL_STATUS,
		A_SalesOrder.CREATION_DATE,
		A_SalesOrder.CREATED_BY_USER
	)
	.filter(
		A_SalesOrder.TRANSACTION_CURRENCY.eq("EUR")
		.and(A_SalesOrder.INCOTERMS_TRANSFER_LOCATION.eq("Walldorf"))
	)
	.top(20)
	.format("json")
	.build()
);

response.println(JSON.stringify(data));