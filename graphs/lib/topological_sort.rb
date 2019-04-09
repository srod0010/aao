require_relative 'graph'

# Kahn's
# O(|V| + |E|).
def topological_sort(vertices)
  results = []
  queue = []

  vertices.each do |vertex|
    if vertex.in_edges.empty?
        queue << vertex
    end
  end

  until queue.empty?
    current_node = queue.pop
    current_node.out_edges.each do |node|
        node.destroy!
    end
  end
end

# Tarjans

# def topological_sort(vertices)
  
# end

# def dfs!(vertex, explored, ordering)
  
# end
