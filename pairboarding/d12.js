function nextLargest(node) {
  if (node.right) {
    return leftMostNode(node.right);
  }

  while (true) {
    let parentNode = node.parent;

    if (parentNode === null) {
      return null;
    } else if (parentNode.left == node) {
      return parentNode;
    } else {
      let node = parentNode;
    }
  }
}

function leftMostNode(node) {
  while (node.left !== null) {
    let node = node.left;
  }
  return node;
}
