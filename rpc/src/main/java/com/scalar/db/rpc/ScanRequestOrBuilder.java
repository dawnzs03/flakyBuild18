// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: scalardb.proto

package com.scalar.db.rpc;

public interface ScanRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:rpc.ScanRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.rpc.Scan scan = 1;</code>
   * @return Whether the scan field is set.
   */
  boolean hasScan();
  /**
   * <code>.rpc.Scan scan = 1;</code>
   * @return The scan.
   */
  com.scalar.db.rpc.Scan getScan();
  /**
   * <code>.rpc.Scan scan = 1;</code>
   */
  com.scalar.db.rpc.ScanOrBuilder getScanOrBuilder();

  /**
   * <code>optional int32 fetch_count = 2;</code>
   * @return Whether the fetchCount field is set.
   */
  boolean hasFetchCount();
  /**
   * <code>optional int32 fetch_count = 2;</code>
   * @return The fetchCount.
   */
  int getFetchCount();
}
