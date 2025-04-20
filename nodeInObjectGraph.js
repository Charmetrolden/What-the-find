import java.util.*;
import java.util.function.Predicate;
import java.util.function.Function;

public class Extensions {
/**
Find any node in an object graph that satisfy a given predicate and return it.
@param root The root node.
@param predicate The given condition to satisfy.
@param getChildren Child selector.
@param <T> Type of object.
@return Node satisfying the condition, else null.*/

public static <T> T findWhere(T root, Predicate<T> predicate, Function<T, Iterable<T>> getChildren) {
//do a depthFirstSearch
    return depthFirstSearch(root, predicate, getChildren);}

    // depthFirstSearch method
    private static <T> T depthFirstSearch(T node, Predicate<T> predicate, Function<T, Iterable<T>> getChildren) {
        if (node != null && predicate.test(node)) {
            return node;
        }

        //Get children of the current node
        Iterable<T> children = getChildren.apply(node);

        // Search through children
        if (children != null) {
            for (T child : children) {
                T result = depthFirstSearch(child, predicate, getChildren);
                if (result != null) {
                    return result;
                }
            }
        }

        // return null if no node found
        return null;
     }
}
