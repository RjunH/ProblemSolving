function diagonalDifference(arr) {
    var arrLength = arr[0].length;
    var leftDiagonalSum = 0;
    var rightDiagonalSum = 0;
    for (var i = 0; i < arrLength; i++) { 
        for (var j = 0; j < arrLength; j++) { 
            if (i == j) { 
                leftDiagonalSum += arr[i][j];
				console.log("i:"+i+" j:"+j+" Sum: "+arr[i][j])
            }
        }
    }
	var j = 0;
    for (var i= arrLength-1; i >= 0; i--) {
		rightDiagonalSum += arr[i][j];
		console.log("i:"+i+" j:"+j+" Sum: "+arr[i][j])
		j++;
	}	

	console.log(Math.abs(leftDiagonalSum - rightDiagonalSum));
    return Math.abs(leftDiagonalSum - rightDiagonalSum);
	
}

diagonalDifference([[1,2,3],[4,5,6],[9,8,9]]);
    