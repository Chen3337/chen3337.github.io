python = 'welcome to my understanding of python world'
print(python + 'everything is from 3wschool')
"""
converter
    int() change to number
    float() change to demail
    complex() change to imaginary number
    str() change to string
    type() to know type of varaible
    bool() returns true or false 
    list() change into a list array
"""
"""
operaters
    ** is power example 2 ** 4 = 2*2*2*2
    // is division and then only return the whole number
    & is to bit wise something to find out even or odds like x%2
    == equal to
    != not equal to
    >= greater than or equal to
    <= less than or equal to
    expression1 and expression2 both true return true one is false return false
    expression1 or expression2 if one true return true both false return fasle
    not(expression1 and expression2) reverse the result T become F, F become T
    x is y return true if x and y are the same thing
    x is not y return true if x is not y
    x in y return true if x is found in y or represent in y
    x not in y return true if x is not found in y
############# bit operations
    x << y Returns x with the bits shifted to the left by y places (and new bits on the right-hand-side are zeros). This is the same as multiplying x by 2**y. example 12 << 2    12(00001100) move to left 2 spaces = (00110000) which is 48
    x >> y Returns x with the bits shifted to the right by y places. This is the same as //'ing x by 2**y. example 12 >> 2    12(00001100) move to right 2 spaces = (00000011) which is 3
    x & y Does a "bitwise and". Each bit of the output is 1 if the corresponding bit of x AND of y is 1, otherwise it's 0. example 12 in bit(0000110'0') 13 in bit(0000110'1') 12 & 13 = 12(00001100) because not similar bit becomes 0.
    x | y Does a "bitwise or". Each bit of the output is 0 if the corresponding bit of x AND of y is 0, otherwise it's 1. example 12 in bit(0000110'0') 13 in bit(0000110'1') 12 | 13 = 13(00001101) because it will be 1 whenever similar spot have a 1
    ~ x Returns the complement of x - the number you get by switching each 1 for a 0 and each 0 for a 1. This is the same as -x - 1. example 12 in bit(00001100) after ~ become (11110011)
    x ^ y Does a "bitwise exclusive or". Each bit of the output is the same as the corresponding bit in x if that bit in y is 0, and it's the complement of the bit in x if that bit in y is 1. Just remember about that infinite series of 1 bits in a negative number, and these should all make sense. example 12(00001100) ^ 13(00001101) the only difference is 1 so answer is (00000001)
"""
"""
boolean
    expression a == a or a > b etc will return bool
    bool(x) x will be false only if it is 0 or empty like {} [] "" not even a space
    isinstance(x, int) check if x is a int yes = true no = false
"""
"""
import random
    random.randrange(1,10)
"""
"""
Strings (a is a string)
    x + 'to add strings'
    many line qoutes use three double quotation mark or single qoutation mark
    [x] to get character at x= number like an array
    [2:5] to get caracter from 2 to 5 or negitive [-5:-2] to count from the end of string
    len(a) to get length of string
    a.strip() is like trim() in js take space of both end of string
    a.lower() change string to lower case
    a.upper() change string to upper case
    a.replace("H", "J") replace H with J in string
    a.split("x") break into substrings whenever there is "x" and x will be gone ['string1', string2]
    x = "ain" in a returns true or flase if there is 'ain' inside string it can be 'not in' instead of 'in'
    print(a.format(x)) format insert number into string where string need a placeholder example "hello my age is {}" may take my placeholder with a comma format(x, y, z) "hello {} my {0 (means x first)} is {}" number inside brakets for order
    \ backslash before character that is not allow inside a string \' single quote \" double quote \n New Line \r Carriage Return \t Tab	\b Backspace
    #################### build in python string method
    capitalize()	Converts the first character to upper case
    casefold()	Converts string into lower case
    center()	Returns a centered string
    count()	Returns the number of times a specified value occurs in a string
    encode()	Returns an encoded version of the string
    endswith()	Returns true if the string ends with the specified value
    expandtabs()	Sets the tab size of the string
    find()	Searches the string for a specified value and returns the position of where it was found
    format()	Formats specified values in a string
    format_map()	Formats specified values in a string
    index()	Searches the string for a specified value and returns the position of where it was found
    isalnum()	Returns True if all characters in the string are alphanumeric
    isalpha()	Returns True if all characters in the string are in the alphabet
    isdecimal()	Returns True if all characters in the string are decimals
    isdigit()	Returns True if all characters in the string are digits
    isidentifier()	Returns True if the string is an identifier
    islower()	Returns True if all characters in the string are lower case
    isnumeric()	Returns True if all characters in the string are numeric
    isprintable()	Returns True if all characters in the string are printable
    isspace()	Returns True if all characters in the string are whitespaces
    istitle()	Returns True if the string follows the rules of a title
    isupper()	Returns True if all characters in the string are upper case
    join()	Joins the elements of an iterable to the end of the string
    ljust()	Returns a left justified version of the string
    lower()	Converts a string into lower case
    lstrip()	Returns a left trim version of the string
    maketrans()	Returns a translation table to be used in translations
    partition()	Returns a tuple where the string is parted into three parts
    replace()	Returns a string where a specified value is replaced with a specified value
    rfind()	Searches the string for a specified value and returns the last position of where it was found
    rindex()	Searches the string for a specified value and returns the last position of where it was found
    rjust()	Returns a right justified version of the string
    rpartition()	Returns a tuple where the string is parted into three parts
    rsplit()	Splits the string at the specified separator, and returns a list
    rstrip()	Returns a right trim version of the string
    split()	Splits the string at the specified separator, and returns a list
    splitlines()	Splits the string at line breaks and returns a list
    startswith()	Returns true if the string starts with the specified value
    strip()	Returns a trimmed version of the string
    swapcase()	Swaps cases, lower case becomes upper case and vice versa
    title()	Converts the first character of each word to upper case
    translate()	Returns a translated string
    upper()	Converts a string into upper case
    zfill()	Fills the string with a specified number of 0 values at the beginning
"""
"""
'Arrays' data variables ####### can import for JS array or else use list
#List is a collection which is ordered and changeable. Allows duplicate members.
    array=['item1', 'item2'] index 0 and 1 to get item example array[0]
    Negitive number for below means count from the end last one is index -1
    array[2:5] to get item index 2 to 5 includ index 2 item not includ index 5 item
    array[:3] means item index 0 to index 3
    array[2:] meas item index 2 to the end of array
    array[0] = 'somethingelse' to change the array value
    for x in array:
    print(x)        loopthough an list array
    len(array) list lenght
    array.append("orange") to add a new item
    array.insert(0, "orange") insert into an array 0 is the index and 'orange' is the item
    array.remove("banana") to remove an item
    array.pop(x) remove the x index or nothing will remove the last item
    del array[0] to delete an array at a index
    del array to delete the whole array which will equal to undefine or unknown
    array.clear() will empty the array which is []
    array2 = array.copy() or array2 = list(array)  to make a new copy of the list else array will affect array2
    array3 = array1 + array2 to join two array
    array1.extend(array2) to add array2 into array1
    array = list(("apple", "banana", "cherry")) another way to make a list. result array equal ['apple','banana','cherry']
    array.sort() order the list (abc order)
    array.reverse() opposit order
    x = array.count("item1") count how many times item1 appear in the array
    index(x) return the index of x value first appear in array
#Tuple is a collection which is ordered and unchangeable. Allows duplicate members.
    tuple = ("apple", "banana", "cherry") tuple is create using ()
    thistuple = ("apple",) one item needs a comma
    tuple[0] to get 'apple' tuple[-1] is the last item
    tuple[2:5] to ge index two though five not include five items
    thistuple[-4:-1] -1 is not included. index count from the end last one have a index of -1
    list = list(tuple) to change tuple into a list to change a value
    len(tuple) length of tuple
    del tuple can delete this whole tuple
    tuple1 + tuple2 to add two tuple which is acceptable
    tuple = tuple(("apple", "banana", "cherry")) another way to make a tuple
    index(x) return the index of x value first appear in tuple
    count(x) return how many times x value appear in tuple
#Set is a collection which is unordered and unindexed. No duplicate members.
    set = {"apple", "banana", "cherry"} to create a new set
    for x in set:
    print(x)         this is the way to access the value since there is not index
    x in set to know if x is a value in set (return a bool)
    set.add("item") to add to a set
    set.update(['item1', 'item2', 'item3']) to add many items 
    len(set) length of a set
    set.remove("banana") to remove a item from set (error if dont exist)
    set.discard("banana") to remove a item from set (no error if dont exist)
    x = set.pop() no index so dont know which item removed. x is the removed value
    set.clear() empty the set {}
    del set will delete it completly
    set3 = set1.union(set2) combine into a third set will exclude any duplicate items
    set1.update(set2) insert into set1 will exclude any duplicate items
    set = set(("apple", "banana", "cherry")) to create a new set
    copy() a copy of the set with no affect to old set
    z = x.difference(y) z is what item not in y but is in x
    x.difference_update(y) remove items that is in y and x then update the x
    x.intersection(y) return items that is in set x and set y
    x.intersection_update(y) update x with the items that is in set x and set y
    z = x.isdisjoint(y) Return True if no items in set x is present in set y
    z = x.issubset(y) Return True if all items set x are present in set y
    z = x.issuperset(y) Return True if all items set y are present in set x
    z = x.symmetric_difference(y) Return a set that contains all items from both sets, except items that are present in both sets
    x.symmetric_difference_update(y) remove all items that is in both sets and add other items in y to x
#Dictionary is a collection which is unordered, changeable and indexed. No duplicate members.
    thisdict = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
    }    to create a dictionary
    x = thisdict["model"] to get 'Mustang' value
    x = thisdict.get("model") to get 'Mustang' value
    thisdict["year"] = 2018 to change the year value
    for x in thisdict:
    print(x)              this will return all key words like year modle brand
    for x in thisdict:
    print(thisdict[x])   this will return all values of thisdict like Ford Mustange and 1964
    for x, y in thisdict.items():
    print(x, y)           this will return both key words and values in thisdict
    for x in thisdict.values():
    print(x)              this will return all values of thisdict like Ford Mustange and 1964
    if "model" in thisdict: 
        print('exist')       this will check if 'model' one of thisdict key word
    len(thisdict)   return number of items in thisdict 'model': 'mustang' is count as one item
    thisdict["color"] = "red" add a new item to thisdict
    thisdict.pop("model") to remove 'model' from thisdict
    thisdict.popitem() before 3.7 version random item removed after last inserted item removed
    del thisdict["model"] this will delete the key word 'model' item
    del thisdict will delete the thisdict completly
    thisdict.clear() this will clear the dict {}
    mydict = thisdict.copy() to make a new dict copy
    mydict = dict(thisdict) make a new dict copy
    myfamily = {
    "child1" : {
        "name" : "Emil",
        "year" : 2004
    },
    "child2" : {
        "name" : "Tobias",
        "year" : 2007
    },
    "child3" : {
        "name" : "Linus",
        "year" : 2011
    }
    }             dict can contain many more dict
    thisdict = dict(brand="Ford", model="Mustang", year=1964) to create a dict have to use equal sign instead of colon
    thisdict = dict.fromkeys(x, y)   x is the key and y is the value for all keys  x = ('key1', 'key2', 'key3') 
    x = thisdict.setdefault("color", "White")      if there is no key 'color' x will equal 'White' if there is 'color' key x will be whatever the value is
    thisdict.update({"color": "White"}) will insert into the dict
"""
"""
if else statements
    example:
    if b > a:
        print("b is greater than a")
    elif a == b:
        print("a and b are equal")
    else:
        print("a is greater than b")

    if a > b: print("a is greater than b") there is only one line statement can be on the same line as the if statement
    print("A") if a > b else print("B")  if else on the same line if both only have one line statement
    print("A") if a > b else print("=") if a == b else print("B") three condition one line statement
    if a > b and c > a:
        print("Both conditions are True")
    if a > b or a > c:
        print("At least one of the conditions is True") one of the expression have to be true
    if x > 10:
        print("Above ten,")
        if x > 20:
            print("and also above 20!") if statement inside if statement call nested if
    if b > a:
    pass       if statement cant be empty so can choose pass for this situation
"""
"""
while loops
    example :
    i = 1
    while i < 6:
        print(i)
        i += 1
    else:
        print("i is no longer less than 6") while loop can have a else after the while is not true


    if i == 3:
        break         can stop a loop even if it is true or not over
    if i == 3:
        continue      will end this round and start next rount inside a loop
"""
"""
for loops
    #list
    fruits = ["apple", "banana", "cherry"]
    for x in fruits:
        print(x)
    #string
    for x in "banana":
        print(x)
    #numbers in range
    for x in range(6): or range(0,6)
        print(x)                   output 0 1 2 3 4 5
    for x in range(1, 20, 2): this range means start at 1 count by 2 up to 20 not include 20
        print(x)                   output 1 3 5 7 9 11 13 15 17 19
    break      can stop the for loop when a if statement is reached etc
    continue    used if certain x dont to do the rest of the statements go to the next value
    else:     after the for loop when loop is finished do else
    for x in something:
        for y in somethingelse:
            print(x, y)           every x item will loop though the y one
    pass  used when there is nothing to do in the loop for some reason
"""
"""
functions
    example
        def my_function(fname, lname):               1
            print(fname + " " + lname)
        my_function("Emil", "Refsnes")   this is similar to JS can add argument in () 
    def my_function(*kids):   use a * if you dont know how many arguments there is. it would be store as tuple     2
    def my_function(child3, child2, child1):                                                         3
        print("The youngest child is " + child3)
    my_function(child1 = "Emil", child2 = "Tobias", child3 = "Linus") you can make key with the value you want accordingly
    def my_function(**kid):                                                      4
        print("His last name is " + kid["lname"])
    my_function(fname = "Tobias", lname = "Refsnes")  use two ** to make it a dictionary need key and value
    def my_function(country = "Norway"):    set a default value to country so if no argument send county will be norway          5
    return x     use inside a function it will return the x value             6
    pass can be use if for some reason function do nothing                        7
    def tri_recursion(k):       can be any function name                         8
        if(k > 0):
            result = k + tri_recursion(k - 1)
            print(result)
        else:
            result = 0
        return result
    print("\n\nRecursion Example Results")
    tri_recursion(6)                          this is kinda hard to understand but it if k = 2 then first round result is 2 + tri(1)  then tri(1) = 1 because tri(0) in tri(1) is return 0    tri(1) = 1 put back to the function k = 2, 2 + 1 so is tri(2) = 3
"""
"""
Lambda
    example
        x = lambda a, b, c : a + b + c
        print(x(5, 6, 2))     acts like a function send in argument 5,6,2 then runs the expression 5+6+2
    why use
        def myfunc(n):
            return lambda a : a * n
        mydoubler = myfunc(2)     this would be lambda a : a * 2
        mytripler = myfunc(3)      this would be lambda a : a * 3
        print(mydoubler(11))      this would be lambda 11 : 11 * 2
        print(mytripler(11))       this would be lambda 11 : 11 * 3
"""
"""
class and object 
    class Person:                           this is a class
        def __init__(self, name, age):      __init__ is automactically call when new class created 
            self.name = name                self can be rename to anything else but it means this. in JS have to be in first preameter
            self.age = age
        def something(self):                you can have other functions inside a class
            print('whatever')
        p1 = Person("John", 36)             p1 is a object
        print(p1.name)
        print(p1.age)

        p1.age = 30  this is a way to update or change value in a object
        del p1.age   to delete a value in a object
        del p1      delete the object completly
        pass    put pass inside a class if it have to be empty for some reason
### parent class and child class
        class Person:                                       normal class
            def __init__(self, fname, lname):
                self.firstname = fname
                self.lastname = lname
            def printname(self):
                print(self.firstname, self.lastname)

        class Student(Person):                                  student extends person
            def __init__(self, fname, lname):                   if there is no init it will use person s init function
                Person.__init__(self, fname, lname)             have a init but want to use parents init also
                ##super().__init__(fname, lname)              you can use this also is the same thing just dont need self
              def welcome(self):                               to add methods to class
                print("Welcome", self.firstname, self.lastname, "to the class of", self.graduationyear)

        x = Student("Mike", "Olsen")
        x.printname()
"""
"""
Iterator
    #string
        mystr = "banana"        
        myit = iter(mystr)      my understanding: myit = {word: 'banana', numberon:0}
        print(next(myit))       and next(myit)    return the word at character numberon  and then numberon plus one. so every next(myit) returns the next character
        for x in mystr:   same as above print each letter
            print(x)
    EXAMPLE FOR TUPLE
    mytuple = ("apple", "banana", "cherry")
    for x in mytuple:
        print(x)            print each index at a time
    #numbers
        class MyNumbers:
            def __iter__(self):             this sets the a value
                self.a = 1
                return self
            def __next__(self):
                if self.a <= 20:
                    x = self.a
                    self.a += 1
                    return x
                else:
                    raise StopIteration    after self.a is 20 next for loop will reach this stopiteration to stop the loop
        myclass = MyNumbers()
        myiter = iter(myclass)
        for x in myiter:                        this is how iter change and get each value in class
            print(x)
"""
"""
variable scope
    x = 300   global scope
    def myfunc():
        x = 200     local scope: this x is only used inside myfunc()
        print(x)
    myfunc()
    print(x)   this value is still 300 not effected
    def myfunc():
        global x     this will make the local variable into a global variable
        x = 300
"""
"""
Module
    #create modules
        def greeting(name):    save functions or variables in another .py file like mymodule.py
            print("Hello, " + name)
    #use modules (above is done)
        import mymodule (this is the .py file name)
        import mymodule as module   this is to rename the module variable for this file
        mymodule.greeting('hello')   to use the function that is saved
        from mymodule import person1    this is to import only a function or variable from mymodule
        x = dir(platform)    this will list names of all functions and variables
        print(x)   return ['DEV_NULL', '_UNIXCONFDIR', 'WIN32_CLIENT_RELEASES', 'ect']
"""
"""
import datetime
    x = datetime.datetime.now()
    print(x)                            get the time right now
    x = datetime.datetime(2020, 5, 17)  this is the simplest datetime created you can add more like timezone hour, minute, seconds etc is optional.
    print(x.strftime("%B"))            this is the formate you want the data to return in
        ##All formates:
        %a	Weekday, short version                  	Wed	
        %A	Weekday, full version	                    Wednesday	
        %w	Weekday as a number 0-6, 0 is Sunday	    3	
        %d	Day of month 01-31	                        31	
        %b	Month name, short version	                Dec	
        %B	Month name, full version	                December	
        %m	Month as a number 01-12	                    12	
        %y	Year, short version, without century	    18	
        %Y	Year, full version	                        2018	
        %H	Hour 00-23	                                17	
        %I	Hour 00-12	                                05	
        %p	AM/PM	                                    PM	
        %M	Minute 00-59	                            41	
        %S	Second 00-59	                            08	
        %f	Microsecond 000000-999999	                548513	
        %z	UTC offset	                                +0100	
        %Z	Timezone	                                CST	
        %j	Day number of year 001-366	                365	
        %U	Week number of year, Sunday as the first day of week, 00-53	52	
        %W	Week number of year, Monday as the first day of week, 00-53	52	
        %c	Local version of date and time	Mon Dec 31 17:41:00 2018	
        %x	Local version of date	                    12/31/18	
        %X	Local version of time	                    17:41:00	
        %%	A % character	                            %
"""
"""
import json
    #Json to python
        x =  '{ "name":"John", "age":30, "city":"New York"}' this is a Json string
        y = json.loads(x) parse x into python by using loads
        print(y["age"])  the result is a Python dictionary
    #python to Json
        # a Python object (dict):
        x = {
        "name": "John",
        "age": 30,
        "city": "New York"
        }
        y = json.dumps(x)  convert into JSON by using dumps
        print(y) the result is a JSON string
    #Examples
        print(json.dumps({"name": "John", "age": 30}))
        print(json.dumps(["apple", "bananas"]))
        print(json.dumps(("apple", "bananas")))
        print(json.dumps("hello"))
        print(json.dumps(42))
        print(json.dumps(31.76))
        print(json.dumps(True))
        print(json.dumps(False))
        print(json.dumps(None))
    # easy to read
        json.dumps(x, indent=4) indent=4 make it easy to read
        print(json.dumps(x, indent=4, sort_keys=True))     sort it by keys in alphabetically
        json.dumps(x, indent=4, separators=(". ", " = ")) Use the separators parameter to change the default separator. not going to use but have it here anyways
"""
"""
import re
    examples
        #findall	Returns a list containing all matches
            txt = "The rain in Spain"
            x = re.findall("ai", txt)    it will return how many times 'ai' is in string x = ["ai", "ai"]
        #search	Returns a Match object if there is a match anywhere in the string
            txt = "The rain in Spain"
            x = re.search("^The.*Spain$", txt) start with The and end with Spain. x = true or false
        #split	Returns a list where the string has been split at each match
            txt = "The rain in Spain"
            x = re.split("\s", txt)      split whenever there is a space    x = ['The', 'rain', 'in', 'Spain']
            x = re.split("\s", txt, 1)   split only the first time          x = ['The', 'rain in Spain']
        #sub	Replaces one or many matches with a string
            txt = "The rain in Spain"
            x = re.sub("\s", "9", txt)    repace every space with a 9     x = "The9rain9in9Spain"
            x = re.sub("\s", "9", txt, 2)    repace first two space with a 9     x = "The9rain9in Spain"
    #Searching signs
        []	A set of characters	"[a-m]"	
        \	Signals a special sequence (can also be used to escape special characters)	"\d"	
        .	Any character (except newline character)	"he..o"	
        ^	Starts with	"^hello"	
        $	Ends with	"world$"	
        *	Zero or more occurrences	"aix*"	
        +	One or more occurrences	"aix+"	
        {}	Exactly the specified number of occurrences	"al{2}"	
        |	Either or	"falls|stays"	
        ()	Capture and group	 
    #Special seaching 
        \A	Returns a match if the specified characters are at the beginning of the string                                  	"\AThe"	
        \b	Returns a match where the specified characters are at the beginning or at the end of a word               begaining r"\bain"
        (the "r" in the beginning is making sure that the string is being treated as a "raw string")        	         ending r"ain\b"	   
        \B	Returns a match where the specified characters are present, but NOT at the beginning (or at the end) of a word      r"\Bain"
        (the "r" in the beginning is making sure that the string is being treated as a "raw string")	                        r"ain\B"
        \d	Returns a match where the string contains digits (numbers from 0-9)	                                                "\d"	         example
        \D	Returns a match where the string DOES NOT contain digits	                                                        "\D"	         x = re.findall("\d", txt)
        \s	Returns a match where the string contains a white space character	                                                "\s"	
        \S	Returns a match where the string DOES NOT contain a white space character	                                        "\S"	
        \w	Returns a match where the string contains any word characters (characters from a to Z, digits from 0-9, and the underscore _ character)	"\w"	
        \W	Returns a match where the string DOES NOT contain any word characters	                                            "\W"	
        \Z	Returns a match if the specified characters are at the end of the string	                                        "Spain\Z"
    #Sets seach
        [arn]	Returns a match where one of the specified characters (a, r, or n) are present	
        [a-n]	Returns a match for any lower case character, alphabetically between a and n	
        [^arn]	Returns a match for any character EXCEPT a, r, and n	
        [0123]	Returns a match where any of the specified digits (0, 1, 2, or 3) are present	
        [0-9]	Returns a match for any digit between 0 and 9	
        [0-5][0-9]	Returns a match for any two-digit numbers from 00 and 59	
        [a-zA-Z]	Returns a match for any character alphabetically between a and z, lower case OR upper case	
        [+]	In sets, +, *, ., |, (), $,{} has no special meaning, so [+] means: return a match for any + character in the string
"""
"""
Installed PIP (similar to npm)
    # add packages in command line UI
         pip install camelcase
    # delete packages
         pip uninstall camelcase
    # all installed packages
        pip list
"""
"""
Try and Except
    end here!
"""