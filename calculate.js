function calcDiscount() {
	var percentage = document.getElementById("discount").value;
	
	console.log(percentage);
	
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
	
	console.log(total);
	console.log(sum);
	console.log(percentage);
	
	var results = document.getElementById("results");
	
	results.innerHTML = "<p>Your item total is: </p>" + total;
}

document.getElementById("itemListSubmit").addEventListener("click", calcDiscount, false);