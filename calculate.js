function calcDiscount() {
	var percentage = document.getElementById("discount").value;
	
	percentage *= 0.01;
	percentage = 1 - percentage;
	
	console.log(percentage);

	var itemList = document.getElementById("itemList");
	
	var itemArray = itemList.value.split(", ");
	
	var sum = 0;
	
	itemArray.forEach(x);
	
	function x(item) {
		sum += Number(item);
	}
	
	var total = sum * percentage;
	
	var results = document.getElementById("results");
	
	if (Number.isNaN(total)) {
		results.innerHTML = "<h3>Error: Please make sure that information was entered in the correct format.</h3>";
	}
	else {
		results.innerHTML = "<h3>Item Total:</h3>" + total;
	}
}

document.getElementById("itemListSubmit").addEventListener("click", calcDiscount, false);
