import React, { useEffect, useState } from "react";

function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [content, setContent] = useState("");
  const [datalist, setDataList] = useState([]);
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

  const handleAddTodoToServer = async () => {
    try {
      const response = await fetch("https://likelion-att.o-r.kr/v1/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: content }),
      });



      const result = await response.json();
      console.log("성공", result);

        setDataList([...datalist, result]);
      setContent(""); // 입력창 초기화

    } catch (error) {
      console.error("오류 발생", error);
    }
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

      console.log("성공", data);

      setDataList(data);


    } catch (error) {

      console.error("에러 발생", error);
    }
  };

const handleDeleteTodo = async (id) => {
  try {
    const response = await fetch(`https://likelion-att.o-r.kr/v1/todo?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (result.status === "deleted") {
     setDataList(datalist.filter(todo => todo.id !== id));

    }
  } catch (error) {
    console.error("에러 발생", error);
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

      <button onClick={handleAddTodoToServer}>추가</button>


      {datalist.map((todo) => (
        <div key={todo.id}>
          <span>{todo.title}</span>
          <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
        </div>
      ))}


    </div>
  );
}

export default TodoApp;
