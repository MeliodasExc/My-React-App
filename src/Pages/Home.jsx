import { useEffect } from "react";
import HomeContent from "../Pages Content/HomeContent"

export default function Home() {
  function Title() {
    useEffect(() => {
      document.title = 'CardHub | Home';
    }, []);
  }
  return (
    <>
      <Title/>
      <HomeContent/>
    </>
    
  )
}