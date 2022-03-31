import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-Router-dom";
import "../Components/LoginPage/LoginPage.css";
import ImageTitle from "../Components/ImageTitle/ImageTitle";

const LoginPage = () => {
  return (
    <div className="user-login">
      <div>
        <div className="form-logo">
          <ImageTitle imgSrc="" />
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
