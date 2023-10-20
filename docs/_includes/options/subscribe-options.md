| Option | Long Version     | Explanation                                                                                                                                                                                                                           | Default |
|--------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| `-t`   | `--topic`        | The MQTT topic the client will subscribe to.                                                                                                                                                                                          |         |
| `-q`   | `--qos`          | Define the quality of service level. If only one QoS is specified it will be used for all topics.<br> You can define a specific QoS level for every topic. The corresponding QoS levels will be matched in order to the given topics. | `0`     |
| `-of`  | `--outputToFile` | Append the received publish messages to a file. Creates the file if it does not exist.                                                                                                                                                |         |
| `-b64` | `--base64`       | Whether the received publish messages will be base64 encoded.                                                                                                                                                                         | `false` |
| `-J`   | `--jsonOutput`   | Print the received publishes in pretty JSON format.                                                                                                                                                                                   | `false` |
| `-T`   | `--showTopics`   | Prepend the specific topic name to the received publish.                                                                                                                                                                              | `false` |
| `-up`  | `--userProperty` | A user property of the subscribe message.                                                                                                                                                                                             |         |