#!/usr/bin/python3
def max_integer(my_list=[]):
    if len(my_list) == 0:
        return "None"
    a = my_list[0]
    for c in my_list:
        if c > a:
            a = c
    return a
