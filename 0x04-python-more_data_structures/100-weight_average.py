#!/usr/bin/python3
def weight_average(my_list=[]):
    """function that returns the weighted average of all integers tuple"""
    if not isinstance(my_list, list):
        return
    ta1 = 0
    ta2 = 0
    for a in my_list:
        ta1 += a[1]
    for a in my_list:
        ta2 += (a[0] * a[1]) / ta1
    return ta2
