// Problem: https://leetcode.com/problems/minimum-cost-to-convert-string-i/description/
// Solution: https://leetcode.com/problems/minimum-cost-to-convert-string-i/submissions/1900991354/

// Intuition -> This is a graph problem where each character is a node and the cost to convert one character
// to another is the weight of the edge between those two nodes. We can use the Floyd-Warshall algorithm to
// find the minimum cost to convert any character to any other character.
// Floyd-Warshall algorithm works here because we have a small fixed number of nodes (26 characters).
// Using Dijkstra's or Bellman-Ford would be overkill and less efficient.
// Then we can simply sum up the costs to convert each character in the string to the target character.
// If any character cannot be converted to the target character, we return -1.
// Time Complexity: O(N + V^3) where N is the length of the source/target strings and V is the number of vertices (26).
// Space Complexity: O(V^2) for the adjacency matrix.

const minimumCost = (source, target, original, changed, cost) => {

    const floydWarshall = (adjMatrix, original, changed, cost) => {

        for (let i = 0; i < original.length; i++) {

            let s = original[i].charCodeAt(0) - 'a'.charCodeAt(0);
            let t = changed[i].charCodeAt(0) - 'a'.charCodeAt(0);

            adjMatrix[s][t] = Math.min(adjMatrix[s][t], cost[i]);

        }

        for (let k = 0; k < 26; k++) {
            for (let i = 0; i < 26; i++) {
                for (let j = 0; j < 26; j++) {
                    adjMatrix[i][j] = Math.min(adjMatrix[i][j], adjMatrix[i][k] + adjMatrix[k][j]);
                }
            }
        }

    }

    const adjMatrix = Array.from({ length: 26 }, () => Array(26).fill(Infinity));

    floydWarshall(adjMatrix, original, changed, cost);

    let result = 0;

    for (let i = 0; i < source.length; i++) {

        if (source[i] === target[i]) continue;

        const sIdx = source[i].charCodeAt(0) - 'a'.charCodeAt(0);
        const tIdx = target[i].charCodeAt(0) - 'a'.charCodeAt(0);


        if (adjMatrix[sIdx][tIdx] === Infinity) {
            return -1;
        }

        result += adjMatrix[sIdx][tIdx];
    }

    return result;

}

const tests = [
    {
        source: "abcd",
        target: "acbe",
        original: ["a","b","c","c","e","d"],
        changed: ["b","c","b","e","b","e"],
        cost: [2,5,5,1,2,20]
    },
    {
        source: "aaaa",
        target: "bbbb",
        original: ["a","c"],
        changed: ["c","b"],
        cost: [1,2]
    },
    {
        source: "abcd",
        target: "abce",
        original: ["a"],
        changed: ["e"],
        cost: [1000]
    },
]

tests.forEach(({ source, target, original, changed, cost }) => {
    console.log(minimumCost(source, target, original, changed, cost));
});