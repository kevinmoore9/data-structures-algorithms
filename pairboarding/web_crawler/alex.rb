require 'io/console'

arr = IO.readlines("data.rtf")
# ar = f.readlines
arr = arr.map { |line| line.chomp.to_i }

class Trie
  attr_reader :head
  def initialize
    @head = Node.new(nil)
  end

  def add_value(val)
    current = @head
    if current.children.empty?
      current.children << Node.new(val)
    else
      while current
        next_child = current.children.select { |child| child.value < val }.first
        if next_child
          current.depth += 1
        else
          current.children << Node.new(val)
          current.children = current.children.sort_by(&:value)
        end
        current = next_child
      end
    end
  end
end

class Node
  attr_accessor :depth, :value, :children
  def initialize(value)
    @depth = 0
    @value = value
    @children = []
  end
end

def longest_subseq(array)
  cache = Trie.new
  array.each do |el|
    cache.add_value(el)
  end


  cache.head.depth
end

p longest_subseq(arr)
