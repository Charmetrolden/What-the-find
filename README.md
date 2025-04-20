What The Find
You are looking through an object graph for an object that satisfies a given predicate The graph could look like this:

A - B - C
        |
      |   |
     CA   CB


You don't know these objects. So a function getChildren that will return the next potential object(s) in the graph chain is provided. You're supposed to implement the following static method FindWherewhere the first node, satisfying the predicate, will be returned.


Example
One possible usage of the function could be as follows, but not limited to:

class Node {
    int Value
    List<Node> Children
}

nodeB = new Node( value = 1, children = null)
nodeC = new Node( value = 2, children = null)
nodeA = new Node( value = 0, children = [nodeB, nodeC])

Node result = FindWhere(x => x.Value == 1, x => x.getChildren())

The above method call would result in:

result = nodeB 

Solution
Implement your solution in the FindWhere method. If you see // YOUR SOLUTION GOES HERE, you've found the right place 🙂

What you'll be evaluated on
You'll be evaluated on your ability to solve this problem and how you solve it.
