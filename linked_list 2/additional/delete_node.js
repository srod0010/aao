// Delete a node from a singly-linked list, ↴ given only a variable pointing to that node.
function deleteNode(nodeToDelete) {

    // Delete the input node from the linked list
    nodeToDelete.value = nodeToDelete.next.value;
    nodeToDelete.next = nodeToDelete.next.next;

}