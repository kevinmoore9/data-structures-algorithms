def quicksort(arr)
  return arr if arr.length <= 1

  pivot = arr.pop
  left, right = [], []
  arr.each do |el|
    left << el if el < pivot
    right << el if el >= pivot
  end

  quicksort(left) + [pivot] + quicksort(right)
end

p quicksort([53,3,5,2,434,24,54])
