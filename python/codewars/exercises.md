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

