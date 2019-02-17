function staircase(n) {
    for (var i = 0; i < n; i++) { 
        for (var j = n-1; j > n - i; j--) {
			if(i){
				process.stdout.write("#");
			}else{
				process.stdout.write(" ");
			}
		} 
		process.stdout.write("\n");		
	}
}

function staircase2(n) {
    var line = Array(n + 1).fill('*');
    line[n] = '\n';
    for (var i = n - 1; i >= 0; i--) {
        line[i] = '#';
        process.stdout.write(line.join());
    }
}

staircase2(4);

line = ['','#','#','#','\n']

	0 1 2 3 
 0        #   
 1      # #
 2
 3