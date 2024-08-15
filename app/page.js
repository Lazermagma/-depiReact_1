import { Fragment } from "react";
import styles from "./page.module.css";
import Content from "./components/Content/content.component";
import Time from "./components/Time/Time.component";
import Form from "./components/Form/Form.component";
import Header from "./components/Header/header.component";
import List from "./components/List/list.component";
import Counter from "./components/Counter/counter.component";
import School from "./School/page";
import Link from "next/link";
import NavBar from "./components/NavBar/navbar.component";
const page = () => {
  return (
    <main className={styles.main}>
      <NavBar />
      <Content />
      <Form />
      <Header />
      <List />
      <Time />
      <Counter />
      <Link href="/School"> School</Link>
    </main>
  );
};

export default page;
