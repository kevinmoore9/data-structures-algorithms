def stock_max(prices)
  profit = 0
  max_so_far = 0
  (prices.length - 1).downto(0) do |i|
    if prices[i] > max_so_far
      max_so_far = prices[i]
    end

    profit += (max_so_far - prices[i]) if prices[i] < max_so_far
  end

  profit
end
