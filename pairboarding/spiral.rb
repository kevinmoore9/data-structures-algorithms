
# print numbers up to n^2 from matrix in spiral

def matrix(n)
  matrix = []
  0.upto(n - 1) do |i|
    row = []
    1.upto(n) do |j|
      row << 5 * i + j
    end
    matrix << row
  end
  matrix
end

def spiral_matrix(n)
  matrix = matrix(n)
  row, col = 0, 0
  last_row, last_col = n - 1, n - 1


  while col <= last_col && row <= last_row
    col.upto(last_col) do |i|
      print "#{matrix[row][i]} "
    end
    row += 1

    row.upto(last_row) do |i|
      print "#{matrix[i][last_col]} "
    end
    last_col -= 1

    last_col.downto(col) do |i|
      print "#{matrix[last_row][i]} "
    end
    last_row -= 1

    last_row.downto(row) do |i|
      print "#{matrix[i][col]} "
    end
    col += 1
  end
  puts ""
end

def spiral(n)
  row, col = 0, 0
  last_row, last_col = n - 1, n - 1

  while row <= last_row && col <= last_col

    col.upto(last_col) do |i|
      print "#{row * 5 + i + 1} "
    end
    row += 1

    row.upto(last_row) do |i|
      print "#{i * 5 + last_col + 1} "
    end
    last_col -= 1

    last_col.downto(col) do |i|
      print "#{last_row * 5 + i + 1} "
    end
    last_row -= 1

    last_row.downto(row) do |i|
      print "#{i * 5 + col + 1} "
    end

    col += 1
  end
  puts ""
end
spiral_matrix(5)
spiral(5)


# [1  2  3  4  5]
# [6  7  8  9  10]
# [11 12 13 14 15]
# [16 17 18 19 20]
# [21 22 23 24 25]
#
# 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6,
# 7, 8, 9, 14, 19, 18, 17, 12, 13
