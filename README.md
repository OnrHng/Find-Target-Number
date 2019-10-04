# Find-Target-Number
 find two different numbers in the array that, when added together, give the target number.

Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

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

or this way 

      function add(arr , target){
          let result = [];
          for (let item of arr){
              const num1 = target - item;
              if (arr.includes(num1)) {
                  return result.concat(num1 , item);
              }
          };
      }
      const result = add([3,4,5,6,10] , 16);
      console.log(result)
      
Best
