import RegisterForm from "./RegisterForm";
import Message from "./Message";
import "./Register.css";
import { useState } from "react";

const Register = () => {
  const [message, setMessage] = useState("");

  const handleMessage = (message: string) => {
    setMessage(message);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Register</h1>
      <div className="register-pg">
        <RegisterForm />
        {message !== "" ? <Message /> : ""}
        
      </div>
    </>
  );
};

export default Register;
