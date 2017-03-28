// Arrays must be of equal size


function getMedian(arr1, arr2) {
  let m1 = median(arr1);
  let m2 = median(arr2);

  if (arr1.length) {
    if (arr1.length === 1) {
      return (m1 + m2) / 2;
    } else if (arr1.length === 2) {
      return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2;
    }
  } else {
    return -1;
  }

  if (m1 === m2) {
    return m1;
  } else if (m1 < m2) {
    if (arr1.length % 2 === 0) {
      return getMedian(arr1.slice(arr1.length / 2), arr2.slice(0, arr2.length / 2));
    } else {
      return getMedian(arr1.slice(Math.floor(arr1.length / 2) + 1), arr2.slice(0, Math.floor(arr2.length / 2)));
    }
  } else {
    if (arr1.length % 2 === 0) {
      return getMedian(arr2.slice(arr1.length / 2), arr1.slice(0, arr2.length / 2));
    } else {
      return getMedian(arr2.slice(Math.floor(arr1.length / 2) + 1), arr1.slice(0, Math.floor(arr2.length / 2)));
    }
  }
}

function median(arr) {    // Time: O(1)
  if (arr.length) {
    let mid = Math.floor(arr.length / 2);
    let med;
    if (arr.length % 2 === 1) {
      med = arr[mid];
    } else {
      med = (arr[mid] + arr[mid - 1]) / 2 ;
    }
    return med;
  }
  return null;
}

console.log(getMedian([1,2,3,6], [4,6,8,10]));
