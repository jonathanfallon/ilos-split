# Ilos split

In this example application, we will use ilos to run several microservices in different environments:

- 1 vm → 1 handler
- 1 vm → several handlers
- 1 vm → several containers with their handlers

```
                         +-----------------+
                         |                 |
         +---------------+     kernel      +---------------+
         |               |                 |               |
         |               +--------+--------+               |
         |                        |                        |
         |                        |                        |
         |                        |                        |
         v                        v                        v

+-----------------+      +-----------------+      +-----------------+
|                 |      |                 |      |                 |
|   service_a     |      |   service_b     |      |   service_d     |
|   - action_a1   |      |   - action_b1   |      |   - action_d1   |
|                 |      |                 |      |   - action_d2   |
+-----------------+      +-----------------+      |                 |
                         |                 |      +-----------------+
                         |   service_c     |
                         |   - action_c1   |
                         |                 |
                         +-----------------+
```
