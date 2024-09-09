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
