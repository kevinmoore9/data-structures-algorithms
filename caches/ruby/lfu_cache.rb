class LFUCache
  def initialize(capacity)
    attr_accessor :capacity, :queue, :hash
    @capacity = capacity
    @hash = {}
    @queue = PriorityQueue.new
  end

  def put(key, value)
    if hash[key]
      # remove hash[key] from heap
    else
      if @queue.length == capacity
        # remove least priority from queue
      end
    end
    ## update hash[key]: value to be current val
    ## increment frequency
    # insert new node by freq
  end

  def get(key)
    if hash[key]
      hash[key][0]
    else
      -1
    end
  end

end

class PriorityQueue
  attr_accessor :store
  def initialize
    @store = []
  end

  def peek
    @store[0]
  end

  def pop
    @store[0], @store[-1] = @store[-1], @store[0]
    min = @store.pop

    bubble_down(0)
    min
  end

  # def insert(key, value)
  # end

  def <<(element)
    @store << element
    bubble_up(@store.length - 1)
  end

  private

  def bubble_up(child_idx)
    parent_idx = child_idx / 2

    return if child_idx <= 1
    return if @elements[parent_idx] >= @elements[child_idx]

    @store[parent_idx], @store[child_idx] = @store[child_idx], @store[parent_idx]
    bubble_up(parent_idx)
  end

  def bubble_down(parent_idx)
    child_idx = (parent_idx * 2) + 1
    return if child_idx > @elements.length - 1
  end
end
