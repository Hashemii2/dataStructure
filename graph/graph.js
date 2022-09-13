//undirected gragh

class Graph {
  constructor() {
    this.nodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    if (!this.adjacentList[node]) {
      this.adjacentList[node] = [];
      this.nodes++;
    }
  }

  addEdges(node1, node2) {
    if (!this.adjacentList[node1] || !this.adjacentList[node2]) return;

    if (!this.adjacentList[node1].includes(node2)) {
      this.adjacentList[node1].push(node2);
    }

    if (!this.adjacentList[node2].includes(node1)) {
      this.adjacentList[node2].push(node1);
    }
  }

  removeEdges(node1, node2) {
    if (!this.adjacentList[node1] || !this.adjacentList[node2]) return;

    let indexofNode1 = this.adjacentList[node2].indexOf(node1);
    let indexofNode2 = this.adjacentList[node1].indexOf(node2);

    this.adjacentList[node1].splice(indexofNode2, 1);
    this.adjacentList[node2].splice(indexofNode1, 1);
  }

  removeVertex(node) {
    for (let key in this.adjacentList) {
      if (this.adjacentList[key].includes(node)) {
        let index = this.adjacentList[key].indexOf(node);
        this.adjacentList[key].splice(index, 1);
      }
    }
    delete this.adjacentList[node];
  }
}

const graph = new Graph();

graph.addVertex('1');
graph.addVertex('2');
graph.addVertex('3');
graph.addVertex('4');
graph.addVertex('4');

graph.addEdges('1', '3');
graph.addEdges('1', '4');
graph.addEdges('6', '4');
graph.addEdges('2', '4');
graph.addEdges('3', '2');
graph.addEdges('3', '2');

// graph.removeEdges('3', '2');

graph.removeVertex('4');
console.log(graph);
