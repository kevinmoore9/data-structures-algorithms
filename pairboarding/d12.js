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


function isBalanced (node) {
  return isBalancedNode(node).isBalanced;
}

function isBalancedNode (node) {
  if (!node) {
    return {isBalanced: true, depth: -1};
  }

  let left = isBalancedNode(node.left);
  let right = isBalancedNode(node.right);

  if (left.isBalanced && right.isBalanced &&
        Math.abs(left.depth - right.depth) <= 1) {
    return {isBalanced: true, depth: Math.max(right.depth, left.depth) + 1};
  } else {
    return {isBalanced: false, depth: 0};
  }
}

// 12B

function isBST(node, min = null, max = null) {
  if node === null return true;
  if ((min && (min > node.value)) || (max & (max < node.value))) {
    return false;
  }
  return (isBST(node.left, min, node.vale) && isBST(node.right, node.value, max))
}
