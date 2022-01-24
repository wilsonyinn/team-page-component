import { Fragment } from "react";
import Header from "../components/Header";
import Acm from '../components/Acm';
import Team from "../components/Team";

export default function About() {
  return (
    <Fragment>
      <Header headingText="About Us" />
      <Acm />
      <Team />
    </Fragment>
  );
}
