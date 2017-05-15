class TreeNode
  attr_accessor :val, :left, :right

  def initialize(val)
    @val = val
    @left = nil
    @right = nil
  end
end

def max_depth(root)
  return 0 if root.nil?
  return 1 if root.left.nil? && root.right.nil?

  max_left = root.left ? max_depth(root.left) : 0
  max_right = root.right ? max_depth(root.right) : 0

  [max_left, max_right].max + 1
end

a = TreeNode.new(1)
b = TreeNode.new(2)
a.left = b
c = TreeNode.new(3)
b.right = c

p max_depth(a)
