require_relative 'graph'
require_relative 'priority_map'

# O(|V| + |E|*log(|V|)).
def dijkstra2(source)
  path = {}
  possible = PriorityMap.new do |data1, data2|
    data1[:cost] <=> data2[:cost]
  end
  possible[source] = { cost: 0, last_edge: nil }

  until possible.empty?
    vertex, data = possible.extract
    path[vertex] = data

    update_possible(vertex, path, possible)
  end

  path
end

def update_possible(vertex, path, possible)
  path_to_vertex_cost = path[vertex][:cost]

  vertex.out_edges.each do |e|
    to_vertex = e.to_vertex

    next if path.has_key?(to_vertex)

    extended_path_cost = path_to_vertex_cost + e.cost
    next if possible.has_key?(to_vertex) &&
            possible[to_vertex][:cost] <= extended_path_cost


    possible[to_vertex] = {
      cost: extended_path_cost,
      last_edge: e
    }
  end
end
