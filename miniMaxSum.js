function miniMaxSum(arr) {
	var min = arr[0];
	var max = arr[0];
	var minCount = 1;
	var maxCount = 1;
	
	for(var i = 1;i < arr.length; i++){
		if(arr[i] < min){
			min = arr[i];
			minCount = 1;
			console.log("min " +min);
		}else if(arr[i] == min){
			minCount++;
			console.log("minCount "+minCount);
		}

		if(arr[i] > max){
			max = arr[i];
			maxCount = 1;
			console.log("max "+max);
		}else if(arr[i] == max){
		    maxCount++;
			console.log("maxCount "+maxCount);
		}
	}
	
	console.log("Min:"+min+" Max:"+max+" minCount:"+minCount+" MaxCount:"+maxCount);
		
	var minSum = 0;
	var maxSum = 0;
	var maxSumCount = 0;
	var minSumCount = 0;
	for(var i = 0; i < arr.length; i++){
		
		if(arr[i] != max){
			minSum += arr[i];
		}
		
		if(arr[i] != min){
			maxSum += arr[i];
		}
	
	}

	minSum += (max * (maxCount - 1));
	maxSum += (min * (minCount - 1));
	
	console.log("minSum "+ minSum);
	console.log("maxSum "+ maxSum);	
}


miniMaxSum([1,4,5,6,1]);