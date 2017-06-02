def rand7
  while true
    # construct a random number (0...5**2)
    # (0, 5, 10, 15, 20) + (0, 1, 2, 3, 4)
    num = 5 * rand5 + rand5
    return (num % 7) if num < 21

    # we reject 21, 22, 23, 24; we'll choose another number in that
    # case.
  end
end
