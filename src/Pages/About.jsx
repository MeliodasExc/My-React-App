import { useEffect } from "react";
import AboutContent from "../Pages Content/AboutContent"



export default function About() {
  function Title() {
    useEffect(() => {
      document.title = 'CardHub | About us';
    }, []);
  }
  return (
    <>
      <Title/>
      <AboutContent/>
    </>  
  )
}