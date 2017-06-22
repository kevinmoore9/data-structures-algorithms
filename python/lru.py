class ListNode:
    def __init__(self, key, val):
        self.key = key
        self.val = val
        self.prev = None
        self.next = None

class DoublyLinkedList:
    def __init__(self):
        self.head = ListNode(None, None)
        self.tail = ListNode(None, None)
        self.head.prev = self.tail
        self.head.next = None
        self.tail.prev = None
        self.tail.next = self.head

class LRUCache:
    def __init__(self, capacity):
        self.node_hash = {}
        self.list = DoublyLinkedList()
        self.count = 0
        self.capacity = capacity

    def get(self, key):
        if key in self.node_hash:
            self.put(key, self.node_hash[key].val)
            return self.node_hash[key].val
        else:
            return -1

    def put(self, key, value):
        if key in self.node_hash:
            node = self.node_hash[key]
            n_prev = node.prev
            n_next = node.next
            n_prev.next = n_next
            n_next.prev = n_prev
            self.count = self.count - 1
        else:
            node = ListNode(key, value)
            self.node_hash[key] = node

            if self.count == self.capacity:
                del self.node_hash[self.list.tail.next.key]
                self.list.tail.next = self.list.tail.next.next
                self.list.tail.next.prev = self.list.tail
                self.count = self.count - 1

        self.node_hash[key] = node
        node.val = value

        self.list.head.prev.next = node
        node.prev = self.list.head.prev
        self.list.head.prev = node
        node.next = self.list.head
        self.count = self.count + 1
        node.val
