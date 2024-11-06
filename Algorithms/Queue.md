# Queue

#### Queue is simply a FIFO(First in, First out) structure

    (a) -> (b) -> (c) -> (d)
     |                    |
     H                    T

Where when we wish to insert (e) for exemple it goes to the back of the line, our (d) will point to (e) and our T(tail) will point at (e)

And when the first in the queue go out we just point H to the next and return the node (a) value