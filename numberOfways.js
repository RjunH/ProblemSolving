function num_ways(n){
	if(n == 0 || n==1){
		return 1;
	}
	
	var num = [];
	num[0] = 1;
	num[1] = 1;
	for(var i = 2; i <= n; i++){
		num[i] = num[i-1] + num[i-2];
	}
	return num[n];
}

var noWays = num_ways(6);
console.log(noWays);