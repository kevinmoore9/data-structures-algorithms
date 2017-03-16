const TreeNode = require('./treeNode');

function dfs(node, targetValue) {
  console.log(node.value);
  if (targetValue === node.value) return node;
  let result = null;
  node.children.forEach(child => {
    // console.log(child.value);
    result = dfs(child, targetValue);
    if (result) return result;
  });
  if (result) return result;
  return null;

}

let a = new TreeNode("A");
let b = new TreeNode("B");
let c = new TreeNode("C");
let d = new TreeNode("D");
let e = new TreeNode("E");
let f = new TreeNode("F");
let g = new TreeNode("G");
let h = new TreeNode("H");


a.addChild(b);
a.addChild(c);

b.addChild(d);
b.addChild(e);

c.addChild(f);
c.addChild(g);

console.log(dfs(a, "G"));
