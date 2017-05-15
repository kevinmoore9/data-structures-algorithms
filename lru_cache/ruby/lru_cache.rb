require 'byebug'

class ListNode
    attr_accessor :val, :prev, :next, :key
    def initialize(key, val)
        @key = key
        @val = val
        @prev = nil
        @next = nil
    end
end

class DoublyLinkedList
    attr_accessor :head, :tail
    def initialize()
        @head = ListNode.new(nil, nil)
        @tail = ListNode.new(nil, nil)
        @head.prev, @head.next = @tail, nil
        @tail.prev, @tail.next = nil, @head
    end
end

class LRUCache
  attr_accessor :count, :hash, :list, :capacity
=begin
    :type capacity: Integer
=end
  def initialize(capacity)
    @hash = {}
    @list = DoublyLinkedList.new
    @count = 0
    @capacity = capacity
  end


=begin
    :type key: Integer
    :rtype: Integer
=end
  def get(key)
    if hash[key]
        self.put(key, hash[key].val)

        hash[key].val
    else
        -1
    end
  end


=begin
    :type key: Integer
    :type value: Integer
    :rtype: Void
=end
    def put(key, value)
      if hash[key]
        node = hash[key]
        n_prev = node.prev
        n_next = node.next
        n_prev.next = n_next
        n_next.prev = n_prev
        self.count -= 1
      else

        node = ListNode.new(key, value)
        hash[key] = node
        if self.count == capacity
          hash.delete(@list.tail.next.key)
          @list.tail.next = @list.tail.next.next
          @list.tail.next.prev = @list.tail
          self.count -= 1
        end

      end
      # node = ListNode.new(key, value)
      hash[key] = node
      node.val = value

      @list.head.prev.next = node
      node.prev = @list.head.prev
      @list.head.prev = node
      node.next = @list.head
      self.count += 1
      node.val
    end


end

obj = LRUCache.new(2)

obj.put(2, 1);
obj.put(2, 2);
p obj.get(2);
obj.put(3, 3);
# p obj.get(2);
p obj.hash.keys
