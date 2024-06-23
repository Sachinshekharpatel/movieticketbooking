import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    console.log(username, password);
  };
  return (
    <div>
      <Header />
      <h1 className="text-center uppercase font-bold text-[14px] mb-2 mt-2 ">
        {" "}
        Admin Login Only
      </h1>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          className=""
          required
          type="text"
          id="username"
          name="username"
        />
        <label htmlFor="password">Password:</label>
        <input type="password" required id="password" name="password" />
        <button
          type="submit"
          className="mt-1 bg-blue-500 px-3 mb-2 py-1 text-white"
        >
          Login
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default LoginPage;
