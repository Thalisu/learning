def corresponding_parenthesis(text: str):
    opening_parenthesis: list[str] = []
    closing_parenthesis: list[str] = []

    for character in text:
        if character == '(':
            opening_parenthesis.append(character)
        elif character == ')':
            closing_parenthesis.append(character)

    MISSING_PARENTHESIS = len(opening_parenthesis) - len(closing_parenthesis)

    if MISSING_PARENTHESIS < 0:
        return ")" * abs(MISSING_PARENTHESIS)
    elif MISSING_PARENTHESIS > 0:
        return "(" * MISSING_PARENTHESIS
    return ""


print(corresponding_parenthesis("()()"))

print(corresponding_parenthesis("()))"))

print(corresponding_parenthesis(")))((((("))


def remove_more_than_two_repetitions(text: str):
    repetitions = 0
    newText = ""
    for character in text:
        if character == newText[-1] if newText else None:
            repetitions += 1
        else:
            repetitions = 1
        if repetitions <= 2:
            newText += character
    return newText


TEXT = "Ollloco meuuuu, taaa peegaando fogoo biiiiichooo"
print(remove_more_than_two_repetitions(TEXT))
