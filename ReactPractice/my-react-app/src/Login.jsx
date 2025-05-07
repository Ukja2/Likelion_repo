import React, { useState } from "react";
import './CSS/Login.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const idCheck = (e) => {
        if (id !== "" && password !== "") {
            if(id === password){
                alert("로그인 성공");
                navigate("/Home");

            } else {
            alert("로그인 실패");
            }
        }

    }

    return (
        <div className="login"> 
            <div className="login_Container">
                <h1>로그인</h1>
                <form>
                    <h3>아이디</h3>    
                    <input 
                        type="text" 
                        placeholder="아이디를 입력하세요"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    
                    <h3>비밀번호</h3>    
                    <input 
                        type="password" 
                        placeholder="비밀번호를 입력하세요"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <p><button type="submit" onClick={idCheck}>로그인</button></p>
                </form>
            </div>
        </div>
    );
}

export default Login;
