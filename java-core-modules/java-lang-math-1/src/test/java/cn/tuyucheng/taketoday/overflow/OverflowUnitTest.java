package cn.tuyucheng.taketoday.overflow;

import org.junit.Test;

import static org.junit.Assert.assertTrue;

public class OverflowUnitTest {

	@Test
	public void positive_and_negative_zero_are_not_always_equal() {

		double a = +0f;
		double b = -0f;

		assertTrue(a == b);

		assertTrue(1 / a == Double.POSITIVE_INFINITY);
		assertTrue(1 / b == Double.NEGATIVE_INFINITY);

		assertTrue(1 / a != 1 / b);
	}
}
