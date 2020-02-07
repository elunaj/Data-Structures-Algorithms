const numbers = [6, 5, 3, 1, 8, 7, 2, 4];
const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const test = [5, 4, 3, 6, 1];


const insertionSort = (nums) => {
  
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    let temp = nums[i];
    
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j+1] = temp;
  }
  return nums;
}

console.log(insertionSort(numbers2));

/*
i = 1,
j = 0

*/ 