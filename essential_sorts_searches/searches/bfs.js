const TreeNode = require('./treeNode');

function bfs(node, targetValue) {
  if (node.value === targetValue) return node;

  let nodes = [node];
  while (nodes.length > 0) {
    let [currentNode] = nodes.splice(0,1);
    console.log(currentNode.value);
    if (currentNode.value === targetValue) return currentNode;

    currentNode.children.forEach(child => {
      nodes.push(child);
    });
  }
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

console.log(bfs(a,"G"));
