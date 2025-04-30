import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {


  // function greeting(name){
  //   console.log(`안녕하세요! ${name}님`);
  // }

  // function introduce(name, age, job){
  //   console.log(`안녕하세요! ${name}님, ${age}세, 직업은 ${job}입니다.`);
  // }

  // greeting("홍길동");
  // introduce("홍길동", 25, "프론트엔드 개발자");


  
  const handleClick = () => {
    alert("안녕!");
  };

  
  const Button = (props) => {
    return (
      <button className="myButton" onClick={props.onClick}>
        {props.text}
      </button>
    );
  };

  


  
  return (
    <div>
      <Button text="클릭하세요" onClick={handleClick} />
      <Button text="저장하기" onClick={() => alert("저장되었습니다!")} />
      <Home />
      <About/>
      <Contact />
    </div>
  );
}

export default App;
