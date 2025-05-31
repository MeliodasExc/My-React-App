import { useEffect } from "react";
import ContactsContent from "../Pages Content/ContactsContent"

export default function Contacts() {
  
  function Title() {
    useEffect(() => {
      document.title = 'CardHub | Contacts';
    }, []);
  }
  return (
    <>
      <Title/>
      <ContactsContent/>
    </>
    
  )
}