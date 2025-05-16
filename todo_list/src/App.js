import React, { useEffect, useState } from "react";

function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [content, setContent] = useState("");

  // 추가 버튼 클릭 시 호출
  const handleList = () => {
    setTodoList([
      ...todoList, content
    ]);
    setContent(""); // 투두 추가하고 텍스트창 비우기
  };

  
  const handleDelete = (index) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
  };

  const handleUserLogin = async () => {
    try {
      const response = await fetch("https://likelion-att.o-r.kr/v1/todo", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      
      const data = await response.json();
      
      console.log("Fetched data:", data);
      
      
      
      
    } catch (error) {
  
      console.error("Error fetching data:", error);
    }
  };
  
  
  
  useEffect(() => {
    handleUserLogin();
  }, []);
  

  return (
    <div>

      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="할 일을 입력하세요"
      />

      <button onClick={handleList}>추가</button>

      
        {todoList.map((todo, index) => (
          <div key={index}>
            <span>{todo}</span>
            <button onClick={() => handleDelete(index)}>삭제</button>
          </div>

        ))}
      
    </div>
  );
}

export default TodoApp;
