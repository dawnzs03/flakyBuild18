package cn.tuyucheng.taketoday.jar;

import org.junit.Assert;
import org.junit.jupiter.api.Test;

public class JarAppUnitTest {

	@Test
	public void findClassTest() {
		Assert.assertTrue(JarApp.findObjectMapperClass().endsWith("jackson-databind-2.13.3.jar"));
	}
}
