import { useEffect } from "react";
import ServicesContent from "../Pages Content/ServicesContent"

export default function Services() {
  
  function Title() {
    useEffect(() => {
      document.title = 'CardHub | Login';
    }, []);
  }
  return (
    <>
      <Title/>
      <ServicesContent/>
    </>
    
  )
}