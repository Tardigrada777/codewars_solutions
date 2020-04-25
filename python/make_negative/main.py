def make_negative( number ):
    return number if number < 0 else -number


# better solution
def make_negative2( number ):
    return -abs(number)