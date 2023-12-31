/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

package org.elasticsearch.xpack.esql.expression.function.scalar.math;

import com.carrotsearch.randomizedtesting.annotations.Name;
import com.carrotsearch.randomizedtesting.annotations.ParametersFactory;

import org.elasticsearch.xpack.ql.expression.Expression;
import org.elasticsearch.xpack.ql.tree.Source;
import org.elasticsearch.xpack.ql.type.DataTypes;
import org.hamcrest.Matcher;

import java.util.List;
import java.util.function.Supplier;

import static org.hamcrest.Matchers.equalTo;

public class IsNaNTests extends AbstractRationalUnaryPredicateTests {
    public IsNaNTests(@Name("TestCase") Supplier<TestCase> testCaseSupplier) {
        this.testCase = testCaseSupplier.get();
    }

    @ParametersFactory
    public static Iterable<Object[]> parameters() {
        return parameterSuppliersFromTypedData(
            List.of(
                new TestCaseSupplier("NaN", () -> makeTestCase(Double.NaN, true)),
                new TestCaseSupplier("positive Infinity", () -> makeTestCase(Double.POSITIVE_INFINITY, false)),
                new TestCaseSupplier("negative Infinity", () -> makeTestCase(Double.NEGATIVE_INFINITY, false)),
                new TestCaseSupplier("positive small double", () -> makeTestCase(randomDouble(), false)),
                new TestCaseSupplier("negative small double", () -> makeTestCase(-randomDouble(), false)),
                new TestCaseSupplier("positive large double", () -> makeTestCase(1 / randomDouble(), false)),
                new TestCaseSupplier("negative large double", () -> makeTestCase(-1 / randomDouble(), false))

            )
        );
    }

    private static TestCase makeTestCase(double val, boolean expected) {
        return new TestCase(
            List.of(new TypedData(val, DataTypes.DOUBLE, "arg")),
            "IsNaNEvaluator[val=Attribute[channel=0]]",
            DataTypes.BOOLEAN,
            equalTo(expected)
        );
    }

    @Override
    protected RationalUnaryPredicate build(Source source, Expression value) {
        return new IsNaN(source, value);
    }

    @Override
    protected Matcher<Object> resultMatcher(double d) {
        return equalTo(Double.isNaN(d));
    }

}
