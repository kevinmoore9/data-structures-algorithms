def k_smallest(arr, k)
  return arr if k > arr.length

  pivot = partition(arr)
  p pivot
  if k == pivot
    arr[0..k]
  elsif k == pivot + 1
    arr[0...k]
  elsif k > pivot + 1
    k_smallest(arr[pivot + 1..-1], k - pivot) + arr[0...pivot]
  else # k < pivot
    k_smallest(arr[0...pivot], k)
  end

end

def partition(arr)
  pivot, r = 0, arr.length - 1
  while pivot < r
    if arr[pivot + 1] <= arr[pivot]
      arr[pivot + 1], arr[pivot] = arr[pivot], arr[pivot + 1]
      pivot += 1
    else
      arr[pivot + 1], arr[r] = arr[r], arr[pivot + 1]
      r -= 1
    end
  end
  pivot
end

p k_smallest([4, 7, 3, 2, 12, 34, 9, 1], 4)
