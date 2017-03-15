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
  child.setParent(this);
};

TreeNode.prototype.removeChild = function(child) {
  child.parent = null;
  const idx = this.children.indexOf(child);
  this.children.splice(idx, 1);
};

module.exports = TreeNode;

// let a = new TreeNode('A');
// let b = new TreeNode('B');
// let c = new TreeNode('C');

// a.setParent(b);
// a.addChild(c);
// // a.removeChild(c);
// console.log(c);
