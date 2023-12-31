/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

package org.elasticsearch.compute.lucene;

import org.apache.lucene.index.LeafReaderContext;
import org.apache.lucene.util.BytesRef;
import org.elasticsearch.common.Rounding;
import org.elasticsearch.index.fielddata.DocValueBits;
import org.elasticsearch.index.fielddata.SortedBinaryDocValues;
import org.elasticsearch.search.aggregations.support.AggregationContext;
import org.elasticsearch.search.aggregations.support.ValuesSource;

import java.io.IOException;
import java.util.function.Function;

public class UnsupportedValueSource extends ValuesSource {

    public static final String UNSUPPORTED_OUTPUT = "<unsupported>";
    private static final BytesRef result = new BytesRef(UNSUPPORTED_OUTPUT);
    private final ValuesSource originalSource;

    public UnsupportedValueSource(ValuesSource originalSource) {
        this.originalSource = originalSource;
    }

    @Override
    public SortedBinaryDocValues bytesValues(LeafReaderContext context) throws IOException {
        if (originalSource != null) {
            try {
                return originalSource.bytesValues(context);
            } catch (Exception e) {
                // ignore and fall back to UNSUPPORTED_OUTPUT
            }
        }
        return new SortedBinaryDocValues() {
            @Override
            public boolean advanceExact(int doc) throws IOException {
                return true;
            }

            @Override
            public int docValueCount() {
                return 1;
            }

            @Override
            public BytesRef nextValue() throws IOException {
                return result;
            }
        };
    }

    @Override
    public DocValueBits docsWithValue(LeafReaderContext context) throws IOException {
        throw new UnsupportedOperationException();
    }

    @Override
    protected Function<Rounding, Rounding.Prepared> roundingPreparer(AggregationContext context) throws IOException {
        throw new UnsupportedOperationException();
    }
}
