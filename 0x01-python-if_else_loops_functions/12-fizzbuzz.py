#!/usr/bin/python3
def fizzbuzz():
    for a in range(1, 101):
        if not(a % 5) and not(a % 3):
            print("FizzBuzz", end=" ")
        elif not(a % 5):
            print("Buzz", end=" ")
        elif not(a % 3):
            print("Fizz", end=" ")
        else:
            print(a, end=" ")
