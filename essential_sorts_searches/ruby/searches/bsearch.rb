def bsearch(arr, target)
  midx = arr.length / 2
  mid = arr[midx]
  return midx if mid == target

  return nil if arr.length <= 1



  left = arr.take(midx)
  right = arr.drop(midx)

  if target < mid
    bsearch(left, target)
  else
    bsearch(right, target) + midx
  end

end
