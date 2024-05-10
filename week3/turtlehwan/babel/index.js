const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;

const code = `let a = 5;`;

// 코드를 AST로 변환
const ast = parser.parse(code);

// AST를 출력
console.log(JSON.stringify(ast, null, 2));

// AST를 순회
traverse(ast, {
  enter(path) {
    // 각 노드에 대한 정보를 출력
    console.log("Node:", path.node.type);
  },
});

// AST를 다시 코드로 변환
const output = generate(ast, {}, code);
console.log("Generated code:", output.code);
