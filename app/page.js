import { Fragment } from "react";
import styles from "./page.module.css";
import Content from "./components/Content/content.component";
import Time from "./components/Time/Time.component";
import Form from "./components/Form/Form.component";
import Header from "./components/Header/header.component";
import List from "./components/List/list.component";
import Counter from "./components/Counter/counter.component";
import School from "./School/page";
import { Link, Outlet } from "next/link";
import NavBar from "./components/NavBar/navbar.component";
const page = () => {
  return (
    <>
      <div className=" d-flex flex-column align-items-center">
        {/* <Content />
        <Form />
        <Header />
        <List />
    
        <Counter /> */}

        <Time />
      </div>
    </>
  );
};

export default page;
