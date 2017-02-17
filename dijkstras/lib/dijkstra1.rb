require_relative 'graph'

# O(|V|**2 + |E|).
def dijkstra1(source)
  path = {}
  possible = {
    source => { cost: 0, last_edge: nil }
  }

  until possible.empty?
    v = select_path(possible)

    path[v] = possible[v]
    possible.delete(v)

    update_paths(v, path, possible)
  end

  path
end

def select_path(possible)
  v, _ = possible.min_by do |(_, data)|
    data[:cost]
  end

  v
end

def update_paths(v, path, possible)
  path_to_vertex_cost = path[v][:cost]

  v.out_edges.each do |e|
    to_vertex = e.to_vertex

    next if path.key?(to_vertex)

    extended_path_cost = path_to_vertex_cost + e.cost
    next if possible.key?(to_vertex) &&
            possible[to_vertex][:cost] <= extended_path_cost

    possible[to_vertex] = {
      cost: extended_path_cost,
      last_edge: e
    }
  end
end
