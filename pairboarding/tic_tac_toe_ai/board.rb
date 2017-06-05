require 'byebug'

class Board
  attr_reader :rows

  def initialize
    @rows = Array.new(3) { Array.new(3) }
  end

  def [](pos)
    row, col = pos

    @rows[row][col]
  end

  def []=(pos, mark)
    raise "Mark already there" unless self[pos].nil?
    row, col = pos

    @rows[row][col] = mark
  end

  def columns
    cols = []
    0.upto(2) do |i|
      col = []
      0.upto(2) do |j|
        pos = [j, i]
        col << self[pos]
      end
      cols << col
    end
    cols
  end

  def diagonals
    up = [[0, 0], [1, 1], [2, 2]]
    down = [[2, 0], [1, 1], [0, 2]]

    [up, down].map do |diag|
      diag.map { |pos| self[pos] }
    end
  end

  def next_mark
    num_marks(:x) > num_marks(:o) ? :o : :x
  end

  def num_marks(symbol)
    count = 0

    @rows.each do |row|
      row.each do |mark|
        count += 1 if mark == symbol
      end
    end
    count
  end

  def available_moves
    moves = []
    @rows.each_with_index do |row, row_idx|
      row.each do |mark, col_idx|
        moves << [row_idx, col_idx] unless mark
      end
    end
    moves
  end

  def winner
    (rows + diagonals + columns).each do |triple|
      return :x if triple == [:x, :x, :x]
      return :o if triple == [:o, :o, :o]
    end

    nil
  end

  def tied?
    return false if !winner.nil?

    @rows.all?(&:all?)
  end

  def over?
    !winner.nil? || tied?
  end

end
