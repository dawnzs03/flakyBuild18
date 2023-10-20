package cn.tuyucheng.taketoday.java10.collections.conversion;

import com.google.common.collect.Lists;
import com.google.common.collect.Sets;
import org.apache.commons.collections4.CollectionUtils;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class ListSetConversionUnitTest {

	// Set -> List; List -> Set

	@Test
	final void givenUsingCoreJava_whenSetConvertedToList_thenCorrect() {
		final Set<Integer> sourceSet = Sets.newHashSet(0, 1, 2, 3, 4, 5);
		final List<Integer> targetList = new ArrayList<>(sourceSet);
	}

	@Test
	final void givenUsingCoreJava_whenListConvertedToSet_thenCorrect() {
		final List<Integer> sourceList = Lists.newArrayList(0, 1, 2, 3, 4, 5);
		final Set<Integer> targetSet = new HashSet<>(sourceList);
	}

	@Test
	void givenUsingJava10_whenSetConvertedToList_thenCorrect() {
		final Set<Integer> sourceSet = Sets.newHashSet(0, 1, 2, 3, 4, 5);
		final List<Integer> targetList = List.copyOf(sourceSet);
	}

	@Test
	void givenUsingJava10_whenListConvertedToSet_thenCorrect() {
		final List<Integer> sourceList = Lists.newArrayList(0, 1, 2, 3, 4, 5);
		final Set<Integer> targetSet = Set.copyOf(sourceList);
	}

	@Test
	final void givenUsingGuava_whenSetConvertedToList_thenCorrect() {
		final Set<Integer> sourceSet = Sets.newHashSet(0, 1, 2, 3, 4, 5);
		final List<Integer> targetList = Lists.newArrayList(sourceSet);
	}

	@Test
	final void givenUsingGuava_whenListConvertedToSet_thenCorrect() {
		final List<Integer> sourceList = Lists.newArrayList(0, 1, 2, 3, 4, 5);
		final Set<Integer> targetSet = Sets.newHashSet(sourceList);
	}

	@Test
	final void givenUsingCommonsCollections_whenListConvertedToSet_thenCorrect() {
		final List<Integer> sourceList = Lists.newArrayList(0, 1, 2, 3, 4, 5);

		final Set<Integer> targetSet = new HashSet<>(6);
		CollectionUtils.addAll(targetSet, sourceList);
	}

	@Test
	final void givenUsingCommonsCollections_whenSetConvertedToList_thenCorrect() {
		final Set<Integer> sourceSet = Sets.newHashSet(0, 1, 2, 3, 4, 5);

		final List<Integer> targetList = new ArrayList<>(6);
		CollectionUtils.addAll(targetList, sourceSet);
	}
}