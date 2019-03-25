// If we sprint quickly down the trail and the landmark runner jogs slowly, we will eventually "lap" (catch up to) the landmark runner!

// But what if there isn't a loop?

// Then we (the faster runner) will simply hit the end of the trail (or linked list).

function containsCycle(firstNode) {

    // Check if the linked list contains a cycle
    let slowRunner = firstNode;
    let fastRunner = firstNode;

    while (fastRunner && fastRunner.next) {
        slowRunner = slowRunner.next;
        fastRunner = fastRunner.next.next;
        if (slowRunner === fastRunner) {
            return true;
        }
    }
    return false;
}
