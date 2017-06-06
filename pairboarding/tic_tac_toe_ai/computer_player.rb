class ComputerPlayer
  attr_reader :name


  def iniaialize
    @name = "SuperComputer"
  end

  def move(game, symbol)
      random_move(game)
  end

  private

  def random_move(game)
    game.board.available_moves.sample
  end
end
