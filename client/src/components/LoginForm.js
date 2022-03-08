import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

function LoginForm({setUser, user, login, setLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  function loginSuccess(userResp) {
    setUser(userResp);
    navigate("/home");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((userResp) => loginSuccess(userResp));
      } else {
        r.json().then((err) => {
          setErrors(err.errors);
          setUsername("");
          setPassword("");
        });
      }
    });
  }

  return (
    <div>
      <Form style={{width:'30%', margin:'auto'}}>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Username</Form.Label>
          <Form.Control value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"/>
        </Form.Group>
        <Form.Group>

        <Button  style={{backgroundColor: 'rgb(255, 187, 2)'}} variant="light" type="submit" onClick={(e) => handleSubmit(e)}>
        {isLoading ? "Loading..." : "Login"}
        </Button><Button  style={{backgroundColor: 'rgb(255, 187, 2)'}} variant="light" onClick={() => setLogin(!login)}>Don't have an account?</Button>
        </Form.Group>
        {!!errors ? <p>{errors}</p> : <></>}
      </Form>
      {/* <form>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          {isLoading ? "Loading..." : "Login"}
        </button>
        {!!errors ? <p>{errors}</p> : <></>}
      </form> */}
    </div>
  );
}

export default LoginForm;
