// обход в ширину

const initiatedCallback = {
  enterNode: function(node) {},
  leaveNode: function(node) {

  }
};

export function breadthFirstSearch(rootNode, callbacks) {
  const nodeQueue = []; 

  nodeQueue.push(rootNode);

  while(nodeQueue.length) {
    const currentNode = nodeQueue.shift();

    // обрабатываем вот этот узел callbacks.enterNode(currentNode);
    if (currentNode.left) {
      nodeQueue.push(currentNode.left);
    }

    if (currentNode.right) {
      nodeQueue.push(currentNode.right);
    }

    // callbacks.leaveNode(currentNode)
  }
}