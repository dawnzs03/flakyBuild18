package cn.tuyucheng.taketoday.algorithms.balancedbinarytree;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class BalancedBinaryTreeUnitTest extends BinaryTreeDataProvider {

   @Test
   void givenBalancedTrees_whenCallingIsBalanced_ShouldReturnTrue() {
      for (Tree tree : balancedTrees()) {
         assertTrue(BalancedBinaryTree.isBalanced(tree), toString(tree) + " should be balanced");
      }
   }

   @Test
   void givenUnbalancedTrees_whenCallingIsBalanced_ShouldReturnFalse() {
      for (Tree tree : unbalancedTrees()) {
         assertFalse(BalancedBinaryTree.isBalanced(tree), toString(tree) + " should not be balanced");
      }
   }

   private String toString(Tree tree) {
      return tree != null ? tree.toString() : "null";
   }
}
