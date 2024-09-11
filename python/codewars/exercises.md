# 8 Kyu

## Convert a string to an array

### Solution

```
def string_to_array(s):
    return s.split() if s else [""]
```

## Sum The Strings

### Solution

```
def sum_str(a, b):
    return str(int(a or "0") + int(b or "0"))
```

## Returning Strings

### Solution

```
def greet(name):
    return f'Hello, {name} how are you doing today?'
```

## Remove an exclamation mark from the end of string

### Solution

```
def remove(s):
    return s[:-1] if s and s[-1] == "!" else s
```

## Reversed Words

### Solution

```
def reverse_words(s):
    return " ".join(s.split()[::-1])
```

## String repeat

### Solution

```
def repeat_str(repeat, string):
    return string * repeat
```

# 7 Kyu

## String Merge!

### Solution

```
def string_merge(string1, string2, letter):
    return f'{string1.split(letter, 1)[0]}{letter}{string2.split(letter, 1)[1]}'
```

## String ends with?

### Solution

```
def solution(text, ending):
    return text[-len(ending):] == ending
```

## Strings starts with?

### Solution

```
def starts_with(st, prefix):
    return st.startswith(prefix)
```

## String Drills: Quotable

### Solution

```
def quotable(name, quote):
    return f'{name} said: "{quote}"'
```

## Substituting Variables Into Strings: Padded Numbers

### Solution

```
def solution(value):
    return f'Value is {"0" * - (len(str(value)) - 5)}{value}'
```

## Interactive Dictionary

```
class Dictionary():
    my_dict = []
    def __init__(self):
        pass

    def newentry(self, word, definition):
        new_entry = (word, definition)
        self.my_dict.append(new_entry)

    def look(self, key):
        definition = next((definition for word, definition in self.my_dict if word == key), f"Can't find entry for {key}")
        return definition
```

# 6 Kyu

## Simple Substitution Cipher Helper

```
class Cipher(object):
    def __init__(self, map1, map2):
        self.map1 = map1
        self.map2 = map2

    def encode(self, s):
        encoded = []
        for char in s:
            if char in self.map1:
                index = self.map1.find(char)
                encoded.append(self.map2[index])
            else:
                encoded.append(char)

        return ''.join(encoded)

    def decode(self, s):
        decoded = []
        for char in s:
            if char in self.map2:
                index = self.map2.find(char)
                decoded.append(self.map1[index])
            else:
                decoded.append(char)

        return ''.join(decoded)
```
