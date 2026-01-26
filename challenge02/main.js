/*
  1. Implement adding and deleting todo items.
  2. Implement completing todo items (completed items should be moved to the bottom).
*/

function MyApp() {
  const [todoList, setTodoList] = React.useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Learn Angular", completed: false },
    { id: 3, text: "Learn Vue", completed: false },
    { id: 4, text: "Learn Svelte", completed: false },
  ]);
  const [inputText, setInputText] = React.useState(""); // 管理输入框的状态

  function selectId(id) {
    return () => {
      let newTodoList = [...todoList];
      for (let item of newTodoList) {
        if (item.id === id) {
          item.completed = !item.completed;
          break;
        }
      }
      // 如何sort, 让completed: true排在前面
      newTodoList.sort((a, b) => {
        if (a.completed && !b.completed) return -1; // a 在前
        if (!a.completed && b.completed) return 1; // b 在前
        return 0; // 相等
      });
      setTodoList(newTodoList);
    };
  }

  function deleteId(id) {
    return () => {
      for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id === id) {
          todoList.splice(i, 1);
          break;
        }
      }
    };
  }

  function addItem() {
    let newTodoList = [...todoList].concat([{ id: Date.now(), text: inputText, completed: false }]);
    setTodoList(newTodoList);
    setInputText("");
  }

  const todoItems = todoList.map((item) => (
    <li className={item.completed ? "deleted" : ""} onClick={selectId(item.id)} key={item.id}>
      <input type="checkbox" checked={item.completed} />
      {item.text} <button onClick={deleteId(item.id)}>delete</button>
    </li>
  ));

  return (
    <main>
      <h1>React Todo List</h1>
      <input type="text" placeholder="Add item into as todo" onChange={(e) => setInputText(e.target.value)} />
      <button onClick={addItem}>Add</button>
      <ul>{todoItems}</ul>
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);
