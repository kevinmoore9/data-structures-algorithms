function TreeNode(value) {
  this.parent = null;
  this.children = [];
  this.value = value;
}

TreeNode.prototype.setParent = function(newParent) {
  if (this.parent) {
    const idx = this.parent.children.indexOf(this);
    this.parent.children.splice(idx,1);
  }
  this.parent = newParent;
  this.parent.children.push(this);
};

TreeNode.prototype.addChild = function(child) {
  this.children.push(child);
};

TreeNode.prototype.removeChild = function(child) {
  const idx = this.children.indexOf(child);
  this.children.splice(idx, 1);
};

module.exports = TreeNode;
