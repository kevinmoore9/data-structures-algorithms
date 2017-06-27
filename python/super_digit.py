def super_digit(num):
    digit = 0
    while num > 0:
        digit += num % 10
        num //= 10

    if digit < 10:
        return digit
    else:
        return super_digit(digit)

num = int("861568688536788" * 100000)
print(super_digit(num))
