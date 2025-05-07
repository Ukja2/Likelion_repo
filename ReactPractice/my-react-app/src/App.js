import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Routes, Route , useNavigate} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Count from './Count.jsx';
import Login from './Login.jsx';

const App = () => {

  const navigate = useNavigate();


    // function greeting(name){
  //   console.log(`안녕하세요! ${name}님`);
  // }

  // function introduce(name, age, job){
  //   console.log(`안녕하세요! ${name}님, ${age}세, 직업은 ${job}입니다.`);
  // }

  // greeting("홍길동");
  // introduce("홍길동", 25, "프론트엔드 개발자");


  
  // const handleClick = () => {
  //   alert("안녕!");
  // };

  
  // const Button = (props) => {
  //   return (
  //     <button className="myButton" onClick={props.onClick}>
  //       {props.text}
  //     </button>
  //   );
  // };



  // Link의 To는 Route의 Path를 지정하는 역할을 한다.
  // Link는 Route의 Path와 연결되어 있다.
  return (
    <div className="app">
      {/* 라우트 설정 */}
      <div className="content">
        <Routes>
        <Route path="/" element={<Login/>} />
          <Route path="/Count" element={<Count/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;