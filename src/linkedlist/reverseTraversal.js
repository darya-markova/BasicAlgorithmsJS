/**
 * @param {LinkedList} linkedList - связанный список
 * @param {traversalCallback} callback - функция-обработчик конкретного узла
 */
export default function reverseTraversalRecursive(node, callback) {
  if (node) {
    reverseTraversalRecursive(node.next, callback);
    callback(node.value);
  }
}

export default function reverseTraversal(linkedList, callback) {
  reverseTraversalRecursive(linkedList.head, callback);  
}