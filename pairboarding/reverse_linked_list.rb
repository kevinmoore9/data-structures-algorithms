require 'byebug'

class ListNode
  attr_accessor :val, :next

  def initialize(val)
    @val = val
    @next = nil
  end
end


def reverse_list(head)
  node = head
  next_node = node.next
  next_next_node = node.next.next

  while next_next_node
    next_node.next = node

    node = next_node
    next_node = next_next_node
    next_next_node = next_next_node.next
  end
  next_node.next = node
  head.next = nil

  next_node
end



head = ListNode.new(1)
node = head
(2..5).each do |i|
  a = ListNode.new(i)
  node.next = a
  node = node.next
end

node = head
while node
  p node.val
  node = node.next
end
puts "\n"

new_head = reverse_list(head)
node = new_head
while node
  p node.val
  node = node.next
end
