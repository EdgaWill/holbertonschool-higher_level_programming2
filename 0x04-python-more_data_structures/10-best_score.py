#!/usr/bin/python3
def best_score(a_dictionary):
    """function that returns a key with the biggest integer value"""
    if not isinstance(a_dictionary, dict) or not len(a_dictionary):
        return
    return sorted(a_dictionary.items(), key=lambda x: x[1], reverse=True)[0][0]
