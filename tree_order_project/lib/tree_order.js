function inOrderArray(root) {
    if (!root) return [];
    let left = inOrderArray(root.left);
    let right = inOrderArray(root.right);
    return left.concat([root.val]).concat(right);

}

function postOrderArray(root) {
    if (!root) return [];
    let left = postOrderArray(root.left);
    let right = postOrderArray(root.right);
    return left.concat(right).concat(root.val);
}


module.exports = {
    inOrderArray,
    postOrderArray
};