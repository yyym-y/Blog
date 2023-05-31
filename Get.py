import os
path1 = "blogContent/blog"
path2 = "blogContent/solution"
add1 = "blogContent/blog/"
add2 = "blogContent/solution/"
a = os.listdir(path1)
b = os.listdir(path2)
for i in range(len(a)):
    a[i] = add1 + a[i]
for i in range(len(b)):
    b[i] = add2 + b[i]
A = str(a)
B = str(b)
finalA, finalB = "", "",
for i in A:
    finalA += i
    if i == ',':
        finalA += "\n"
for i in B:
    finalB += i
    if i == ',':
        finalB += "\n"

print(finalA)
print("\n\n")
print(finalB)