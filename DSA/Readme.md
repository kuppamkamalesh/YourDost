# 🧮 Second Largest Unique Number Finder (Python)

## 📝 Problem Statement

Given an array of integers, return the **second largest unique number** in the array.  
If it doesn’t exist, return `-1`.

---

## 💡 Example

**Example 1:**  
Input: `[3, 5, 2, 5, 6, 6, 1]`  
Output: `5`

**Example 2:**  
Input: `[7, 7, 7]`  
Output: `-1`

**Example 3:**  
Input: `[10, 9, 8, 8]`  
Output: `9`

**Example 4:**  
Input: `[1]`  
Output: `-1`

**Example 5:**  
Input: `[2, 3, 4, 5, 6, 7, 44, 44, 4, 55, 55, 666, 777, 777]`  
Output: `666`

---

## 🧠 Approach

1. Convert the list to a **set** to remove duplicates.
2. If there are fewer than two unique numbers, return `-1`.
3. Use two variables (`first` and `second`) to track the largest and second largest numbers while iterating once through the set.
4. Return the value of `second` at the end.

This ensures a **single-pass O(n)** solution without sorting.

---

## 🧩 Code Implementation

```python
def find_second_largest(nums):
    # Edge case: if list is empty or has fewer than 2 numbers
    if not nums or len(nums) < 2:
        return -1

    # Remove duplicates
    unique_nums = set(nums)
    if len(unique_nums) < 2:
        return -1

    # Initialize two tracking variables
    first = second = float('-inf')

    # Traverse the unique numbers once
    for num in unique_nums:
        if num > first:
            second = first
            first = num
        elif num > second:
            second = num

    return second


# --- User Input Section ---
print("Enter numbers separated by spaces:")
nums = list(map(int, input().split()))

result = find_second_largest(nums)
print("Second largest unique number:", result)
```

---

## 🧪 Explanation of Edge Cases

| Case | Input                                                  | Explanation                           | Output |
| ---- | ------------------------------------------------------ | ------------------------------------- | ------ |
| 1    | `[3, 5, 2, 5, 6, 6, 1]`                                | `6` is largest, `5` is second largest | `5`    |
| 2    | `[7, 7, 7]`                                            | Only one unique number                | `-1`   |
| 3    | `[10, 9, 8, 8]`                                        | `10` is largest, `9` is second        | `9`    |
| 4    | `[1]`                                                  | Not enough numbers                    | `-1`   |
| 5    | `[2, 3, 4, 5, 6, 7, 44, 44, 4, 55, 55, 666, 777, 777]` | `777` is largest, `666` is second     | `666`  |

---

## ⚙️ Complexity Analysis

- **Time Complexity:** `O(n)` — Each number is processed once.
- **Space Complexity:** `O(n)` — Due to storing unique elements in a set.

---

## 🧾 Sample Input/Output

**Input-1:**

```
2 3 4 5 6 7 44 44 4 55 55 666 777 777
```

**Output:**

```
Second largest unique number: 666
```

**Input-2:**

```
7 7 7
```

**Output:**

```
Second largest unique number: -1
```
**Input-3:**

```
2 3 4 5 6 7 5 6
```

**Output:**

```
Second largest unique number: 6
```

---

**Author:** Kamalesh  
**Language:** Python 
**Complexity:** O(n) time | O(n) space  
