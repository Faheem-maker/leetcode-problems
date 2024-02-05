def foobar(n):
    """
    Display:
    foobar - if n is divisible by both 3 and 5
    foo - if n is divisible by 3
    bar - if n is divisible by 5
    n - otherwise
    """
    if n % 5 == 0 and n % 3 == 0:
        print("foobar")
    elif n % 3 == 0:
        print("foo")
    elif n % 5 == 0:
        print("bar")
    else:
        print(str(n))
    
def foobar2(n):
    """
    Merges the 2nd and 3rd condition to reduce "2 lines" of code!
    """
    result = ''
    if n % 3 == 0:
        result = "foo"
    if n % 5 == 0:
        result += "bar"
    elif n % 3 != 0:
        result = str(n)
    print(result)

def foobar_range(n):
    """
    Prints a whole range of "foobars" till n (inclusive)
    """
    for i in range(1, n + 1):
        if i % 5 == 0 and i % 3 == 0:
            print("foobar")
        elif i % 3 == 0:
            print("foo")
        elif i % 5 == 0:
            print("bar")
        else:
            print(str(i))


foobar_range(15)