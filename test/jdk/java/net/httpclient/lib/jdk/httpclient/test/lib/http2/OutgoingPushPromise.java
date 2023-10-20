/*
 * Copyright (c) 2016, 2023, Oracle and/or its affiliates. All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.
 *
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version
 * 2 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * Please contact Oracle, 500 Oracle Parkway, Redwood Shores, CA 94065 USA
 * or visit www.oracle.com if you need additional information or have any
 * questions.
 */

package jdk.httpclient.test.lib.http2;

import java.io.InputStream;
import java.net.URI;
import java.net.http.HttpHeaders;
import java.util.List;

import jdk.internal.net.http.frame.ContinuationFrame;
import jdk.internal.net.http.frame.Http2Frame;

// will be converted to a PushPromiseFrame in the writeLoop
// a thread is then created to produce the DataFrames from the InputStream
public class OutgoingPushPromise extends Http2Frame {
    final HttpHeaders headers;
    final URI uri;
    final InputStream is;
    final int parentStream; // not the pushed streamid
    private final List<Http2Frame> continuations;

    public OutgoingPushPromise(int parentStream,
                               URI uri,
                               HttpHeaders headers,
                               InputStream is) {
        this(parentStream, uri, headers, is, List.of());
    }

    public OutgoingPushPromise(int parentStream,
                               URI uri,
                               HttpHeaders headers,
                               InputStream is,
                               List<ContinuationFrame> continuations) {
        super(0,0);
        this.uri = uri;
        this.headers = headers;
        this.is = is;
        this.parentStream = parentStream;
        this.continuations = List.copyOf(continuations);
    }

    public List<Http2Frame> getContinuations() {
        return continuations;
    }
}
