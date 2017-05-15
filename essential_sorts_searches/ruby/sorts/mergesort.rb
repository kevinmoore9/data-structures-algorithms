
def mergesort(arr)
  return arr if arr.length <= 1

  mid = arr.length / 2
  left = arr.take(mid)
  right = arr.drop(mid)

  merge(mergesort(left), mergesort(right))
end

def merge(left, right)
  merged = []
  i, j = 0, 0

  while i < left.length && j < right.length
    if left[i] < right[j]
      merged << left[i]
      i += 1
    else
      merged << right[j]
      j += 1
    end
  end

  merged + left.drop(i) + right.drop(j)
end

p mergesort([1,4,6,3,7,3])
