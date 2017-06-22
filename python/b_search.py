a = [0, 3, 8, 14, 92, 233, 343]

num = int(input("Pick one"))

def b_search(nums, target):
    midx = len(nums) // 2
    mid = nums[midx]


    if mid == target:
        return midx
    if len(nums) < 2:
        return -1

    left = []
    right = []

    for el in nums:
        if el <= mid:
            left.append(el)
        else:
            right.append(el)

    if target < mid:
        return b_search(left, target)
    else:
        return b_search(right, target) + midx + 1


print(b_search(a, num))
