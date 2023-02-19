import React from "react";
import "./LoginScreen.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function LoginScreen() {
    const LoginRef = useRef();
    const PasswordRef = useRef();
    function Login() {
        const login = LoginRef.current.value;
        const password = PasswordRef.current.value;
        if (
            login.includes(
                "object",
                "String",
                "NaN",
                "Null",
                "[object Object]",
                "undefined"
            ) ||
            password.includes(
                "object",
                "String",
                "NaN",
                "Null",
                "[object Object]",
                "undefined"
            )
        ) {
            alert("not at this time");
            console.log(
                `login: ${login} , password: ${password} `,
                typeof login,
                typeof password
            );
        } else {
            alert("all ok");
            console.log(
                `login: ${login} , password: ${password} `,
                typeof login,
                typeof password
            );
        }
        //const fetch = fetch('https://fakestoreapi.com/auth/login',{
        //method:'POST',
        //body:JSON.stringify({
        //username: LoginRef.current.value,
        //password: PasswordRef.current.value,
        //})
        //})
    }
    return (
        <section className="LoginScreenMain">
            <div className="LoginScreenWindow">
                <div className="LoginScreenWindowLogin">
                    <p>Login</p>
                    <input
                        type="text"
                        placeholder="Login"
                        defaultValue="mor_2314"
                        ref={LoginRef}
                    />
                </div>
                <div className="LoginScreenWindowPassword">
                    <p>Passsword</p>
                    <input
                        type="password"
                        placeholder="Password"
                        defaultValue="83r5^_"
                        ref={PasswordRef}
                    />
                </div>
                <input
                    type="button"
                    value="Login"
                    className="LoginScreenWindowButton"
                    onClick={Login}
                />
            </div>
            <p>
                If you not registered click this <Link to="/Register">Register</Link>
            </p>
        </section>
    );
}
