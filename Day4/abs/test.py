array=[12,3,4,1,7]

def sumArray(array):
    return sum(sorted(array)[1:-1])

print(sumArray([]))