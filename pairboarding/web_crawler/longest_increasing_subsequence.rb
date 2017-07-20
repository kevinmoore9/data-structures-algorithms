# def longest_sub(arr)
#   sequences = []
#   prev = arr[0]
#   lowest = arr[0]
#   arr.each do |num|
#     if sequences.empty?
#       sequences << [num]
#       next
#     end
#
#     if num > prev
#       sequences.each do |sequence|
#         sequence << num if sequence[-1] < num
#       end
#     else
#       sequences << [num]
#     end
#   end
#   longest = []
#   sequences.each do |seq|
#     seq.length > longest.length ? longest = seq : nil
#   end
#
#   longest
# end
require 'io/console'

arr = IO.readlines("data.rtf")
# ar = f.readlines
arr = arr.map { |line| line.chomp.to_i }


def longest_sub(arr)
  sequences = []
  lowest = arr[0]

  arr.each do |num|
    if sequences.empty?
      sequences << [num]
      next
    end

    if num < lowest
      lowest = num
      sequences << [num]
    elsif num > lowest
      sequences.each do |seq|
        seq << num if seq[-1] < num
      end
    end
  end

  longest = []
  sequences.each do |seq|
    seq.length > longest.length ? longest = seq : nil
  end

  longest.length
end
p longest_sub(arr)
