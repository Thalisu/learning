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