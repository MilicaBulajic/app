import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import UserContext from "../../context/UserContext";
import apiServer from "../../service/apiServer";

const LoginForm = () => {
  const { setAuth, setEmail, setUserId } = useContext(UserContext);
  const { register, handleSubmit, errors } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async ({ name, email, password }) => {
    try {
      const res = await apiServer.post("/signup", { name, email, password });
      window.location.href = "/signup/onboard";
      setErrorMessage("");

      setEmail(res.data.email);
      setUserId(res.data.id);
    } catch (err) {
      console.log(err.status);
      setErrorMessage("Something went wrong with registering");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <label htmlFor="name"></label>
          <input name="name" type="name" placeholder="Name"></input>
        </div>
        <label htmlFor="email">Email</label>
        <input
          {...register("email", { required: true })}
          name="email"
          type="email"
          placeholder="Email address"
        ></input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input name="password" type="password" placeholder="password"></input>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
