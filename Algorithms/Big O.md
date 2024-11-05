# Big O -> As your input grows, how fast does computation or memory grow

### O(n) (Linear growth)

```
Function sum_char_codes(n: string): number {
    let sum=0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i)
    }

    return sum
}
```

### O(n²) (quadratic growth)

```
Function sum_char_codes(n: string): number {
    let sum=0;
    for (let i = 0; i < n.length; ++i) {
        for (let j = 0; j < n.length; ++j){
            sum += n.charCodeAt(i)
        }
    }

    return sum
}
```

### O(n³) (cubic growth)

```
Function sum_char_codes(n: string): number {
    let sum=0;
    for (let i = 0; i < n.length; ++i) {
        for (let j = 0; j < n.length; ++j){
            for (let k = 0; k < n.length; ++k){
                sum += n.charCodeAt(i)
            }
        }
    }

    return sum
}
```

### O(log n) (logarithmic)

```
function binarySearch(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    }
    
    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
```

### O(n log n) (quasilinear)

```
function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
```
