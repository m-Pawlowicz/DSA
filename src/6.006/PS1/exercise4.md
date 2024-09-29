Jen drives her ice cream truck to her local elementary school at recess. All the kids rush to line up
in front of her truck. Jen is overwhelmed with the number of students (there are 2n of them), so
she calls up her associate, Berry, to bring his ice cream truck to help her out. Berry soon arrives
and parks at the other end of the line of students. He offers to sell to the last student in line, but the
other students revolt in protest: “The last student was last! This is unfair!”
The students decide that the fairest way to remedy the situation would be to have the back half of
the line (the n kids furthest from Jen) reverse their order and queue up at Berry’s truck, so that the
last kid in the original line becomes the last kid in Berry’s line, with the (n+1)st kid in the original
line becoming Berry’s first customer.

Given a linked list containing the names of the 2n kids, in order of the original line
formed in front of Jen’s truck (where the first node contains the name of the first kid in
line), describe an O(n)-time algorithm to modify the linked list to reverse the order of
the last half of the list. Your algorithm should not make any new linked list nodes or
instantiate any new non-constant-sized data structures during its operation.
