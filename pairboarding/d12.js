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

// O(log(n))
function findCommonAncestor(root, nodeA, nodeB) {
  var currentNode = root;
  while true {
    if (currentNode == nodeA || currentNode == nodeB) {
      // one is the descendent of the other.
      return currentNode;
    }

    // is one of the nodes on the left, and the other on the right?
    var bothOnRight = ((currentNode.value < nodeA.value) &&
      (currentNode.value < nodeB.value));
    var bothOnLeft = ((currentNode.value > nodeA.value) &&
      (currentNode.value > nodeB.value));
    var onSameSide = bothOnRight || bothOnLeft;

    if (!onSameSide) {
      // the two nodes are on different sides.
      return currentNode;
    }

    currentNode = bothOnRight ? currentNode.right : currentNode.left;
  }
}
