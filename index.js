function bubbleSort(array) {
  for (let i =0; i < array.length; i++) {//n
    for (let j = 0; j < array.length; j++) {//n

        if (  array[j] > array[j + 1] ){
         let temp = array[j]
          array[j] = array[j+1]
          array[j+1] = temp
        }
    }
  }//n*log(n)
  return array
}
console.log(bubbleSort([5,3,1,4,6]))
console.log([5,3,1,4,6,88])


var arr = [2,1]
let i=0,j=0
         let temp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = temp
          console.log(arr)