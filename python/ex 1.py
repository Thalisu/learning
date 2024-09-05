def calc_delta(a: int, b: int, c: int):
    return b**2 - 4 * a * c


def bhaskara(a: int, b: int, c: int):
    DELTA = calc_delta(a, b, c)

    if DELTA < 0:
        return "Delta Negativo"

    DELTA_SQUARE_ROOT = DELTA ** 0.5

    DIVIDER = 2 * a

    X1 = round((- b + DELTA_SQUARE_ROOT) / DIVIDER, 2)
    X2 = round((- b - DELTA_SQUARE_ROOT) / DIVIDER, 2)
    return f'x1={X1}, x2={X2}'


print(bhaskara(7, 3, 4))

print(bhaskara(1, 5, 2))

print(bhaskara(3, 10, 2))
