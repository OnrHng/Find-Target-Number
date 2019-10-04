function add(arr , target){
	let result = [];
	const num1 = arr.map(item => arr.includes(target-item));
		if (num1){
			return result.concat(num1 , target-num1 )
		}
		else {
			return "Unfortunaly there isnt answer";
		}
	}
add([3,4,5,6,10] , 16);
