def find_missing_number(array1, array2)
  array1.reduce(:+) - array2.reduce(:+)
end
