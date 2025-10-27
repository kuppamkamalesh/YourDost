def find_second_largest(nums):
    if not nums or len(nums) < 2:
        return -1
    
    unique_nums = set(nums)
    if len(unique_nums) < 2:
        return -1

    first = second = float('-inf')
    for num in unique_nums:
        if num > first:
            second = first
            first = num
        elif num > second:
            second = num
    
    return second


# ---- Main Program ----
print("Enter numbers separated by spaces:")
nums = list(map(int, input().split()))

result = find_second_largest(nums)
print("Second largest unique number:", result)
