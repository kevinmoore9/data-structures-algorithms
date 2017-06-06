class ComputerPlayer
  attr_reader :name

  def iniaialize
    @name = "SuperComputer"
  end

  def move(game, symbol)
    winning_move(game, symbol) ||
      block_winning_move(game, symbol) ||
      random_move(game)
  end

  private



  def winning_move(game, symbol)
    game.board.available_moves.each do |move|
      dup_board = game.board.dup
      dup_board[move] = symbol
      return move if dup_board.winner == symbol

    end
    nil
  end

  def random_move(game)
    game.board.available_moves.sample
  end

  def block_winning_move(game, symbol)
    symbol = (symbol == :x ? :o : :x)
    winning_move(game, symbol)
  end
end
