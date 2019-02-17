function plusMinus(arr) {
    var positives = 0;
    var negatives = 0;
    var zeros = 0;
    for (var i = 0; i < arr.length; i++) { 
        arr[i] == 0 ? zeros++ : (arr[i] > 0 ? positives++ : negatives++);
    }
    console.log((zeros / arr.length).toPrecision(6));
    console.log((positives / arr.length).toPrecision(6));
    console.log((negatives / arr.length).toPrecision(6));

}

plusMinus([1, 0, 0, 2, -0, 0]);