var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var todoListEl = document.getElementById("todoList");
var todoInputEl = document.getElementById("todoInput");
var API_URL = "http://localhost:8080/todos";
var fetchTodos = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(API_URL)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data];
        }
    });
}); };
// fetch(API_URL)
//   .then((response) => response.json())
//   .then((data) => renderTodo(data));
//   // document onLoad eventListener
document.addEventListener("DOMContentLoaded", function () { return __awaiter(_this, void 0, void 0, function () {
    var todos;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchTodos()];
            case 1:
                todos = _a.sent();
                renderTodo(todos);
                return [2 /*return*/];
        }
    });
}); });
var updateTodo = function (todoId, originalTitle) { return __awaiter(_this, void 0, void 0, function () {
    var todoItem, itemInputEl;
    var _this = this;
    return __generator(this, function (_a) {
        todoItem = document.querySelector("#todo-".concat(todoId));
        itemInputEl = document.createElement("input");
        itemInputEl.type = "text";
        itemInputEl.value = originalTitle;
        itemInputEl.addEventListener("keyup", function (event) { return __awaiter(_this, void 0, void 0, function () {
            var updatedTitle, newTodos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(event.key === "Enter")) return [3 /*break*/, 3];
                        updatedTitle = itemInputEl.value.trim();
                        if (!updatedTitle) return [3 /*break*/, 3];
                        return [4 /*yield*/, fetch(API_URL + "/" + todoId, {
                                method: "PUT",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({ title: updatedTitle }),
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, fetchTodos()];
                    case 2:
                        newTodos = _a.sent();
                        renderTodo(newTodos);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        todoItem.innerHTML = "";
        todoItem.appendChild(itemInputEl);
        itemInputEl.focus();
        return [2 /*return*/];
    });
}); };
var renderTodo = function (newTodos) {
    todoListEl.innerHTML = "";
    newTodos.todos.forEach(function (todo) {
        var listEl = document.createElement("li");
        listEl.textContent = todo.title;
        listEl.id = "todo-".concat(todo.id);
        var deleteEl = document.createElement("span");
        deleteEl.textContent = "🗑️";
        deleteEl.onclick = function () { return deleteTodo(todo.id); };
        var updateEl = document.createElement("span");
        updateEl.textContent = "✏️";
        updateEl.onclick = function () { return updateTodo(todo.id, todo.title); };
        listEl.append(deleteEl);
        listEl.append(updateEl);
        todoListEl.append(listEl);
    });
};
var addTodo = function () { return __awaiter(_this, void 0, void 0, function () {
    var title, date, createdAt, newTodo, newTodos;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                title = todoInputEl.value;
                date = new Date();
                createdAt = date.toDateString();
                if (!title)
                    return [2 /*return*/];
                newTodo = {
                    id: date.getTime().toString(),
                    title: title,
                    createdAt: createdAt,
                    completed: false,
                };
                return [4 /*yield*/, fetch(API_URL, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(newTodo),
                    })];
            case 1:
                _a.sent();
                // .then((response) => response.json())
                // .then(() => {
                todoInputEl.value = "";
                return [4 /*yield*/, fetchTodos()];
            case 2:
                newTodos = _a.sent();
                renderTodo(newTodos);
                return [2 /*return*/];
        }
    });
}); };
var deleteTodo = function (todoId) { return __awaiter(_this, void 0, void 0, function () {
    var newTodos;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(API_URL + "/" + todoId, {
                    method: "DELETE",
                })];
            case 1:
                _a.sent();
                return [4 /*yield*/, fetchTodos()];
            case 2:
                newTodos = _a.sent();
                renderTodo(newTodos);
                return [2 /*return*/];
        }
    });
}); };
