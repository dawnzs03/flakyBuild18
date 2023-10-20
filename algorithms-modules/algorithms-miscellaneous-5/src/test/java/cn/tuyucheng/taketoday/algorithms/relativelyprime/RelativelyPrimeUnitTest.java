package cn.tuyucheng.taketoday.algorithms.relativelyprime;

import org.junit.jupiter.api.Test;

import static cn.tuyucheng.taketoday.algorithms.relativelyprime.RelativelyPrime.bigIntegerRelativelyPrime;
import static cn.tuyucheng.taketoday.algorithms.relativelyprime.RelativelyPrime.iterativeRelativelyPrime;
import static cn.tuyucheng.taketoday.algorithms.relativelyprime.RelativelyPrime.recursiveRelativelyPrime;
import static org.assertj.core.api.Assertions.assertThat;

class RelativelyPrimeUnitTest {

   @Test
   void givenNonRelativelyPrimeNumbers_whenCheckingIteratively_shouldReturnFalse() {

      boolean result = iterativeRelativelyPrime(45, 35);
      assertThat(result).isFalse();
   }

   @Test
   void givenRelativelyPrimeNumbers_whenCheckingIteratively_shouldReturnTrue() {

      boolean result = iterativeRelativelyPrime(500, 501);
      assertThat(result).isTrue();
   }

   @Test
   void givenNonRelativelyPrimeNumbers_whenCheckingRecursively_shouldReturnFalse() {

      boolean result = recursiveRelativelyPrime(45, 35);
      assertThat(result).isFalse();
   }

   @Test
   void givenRelativelyPrimeNumbers_whenCheckingRecursively_shouldReturnTrue() {

      boolean result = recursiveRelativelyPrime(500, 501);
      assertThat(result).isTrue();
   }

   @Test
   void givenNonRelativelyPrimeNumbers_whenCheckingUsingBigIntegers_shouldReturnFalse() {

      boolean result = bigIntegerRelativelyPrime(45, 35);
      assertThat(result).isFalse();
   }

   @Test
   void givenRelativelyPrimeNumbers_whenCheckingBigIntegers_shouldReturnTrue() {

      boolean result = bigIntegerRelativelyPrime(500, 501);
      assertThat(result).isTrue();
   }
}
