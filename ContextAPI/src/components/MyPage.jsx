import {useState} from 'react'

import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';

const translations = {
  es:{
    headerTitle: "Biemvenido a la aplicacion",
    light: "Claro",
    dark: "Oscuro",
    guestUser:"BIenvenido invitado",
    loggedUser: "Bienvenido usuario logueado",
    paragraphUser: "Bienvenido estimado y muy querido companero es un gusto tenerte de vuelta",
    paragraphGuest: "Es un gusto tenerte de vuelta invitado",
    footerTitle: "Pie de pagina",
    footerCredits: "TOdos los derechos reservados"
  },
  en:{
    headerTitle: "Welcome to the application",
    light: "Light",
    dark: "Dark",
    guestUser:"Welcome guest user",
    loggedUser: "Welcome logged user",
    paragraphUser: "Welcome my dear and esteemed friend, its a plaisure to have you back",
    paragraphGuest: "Its a plaisure to have you back guest",
    footerTitle: "Footer",
    footerCredits: "All  rights reserved"
  }
}



export const MyPage = () => {



  const initialTheme = "light";
  const initialAuth = false;
  const initialLanguage = "es";



  const [theme,setTheme] = useState(initialTheme);
  const [isAuth,setisAuth] = useState(initialAuth);
  const [language,setLanguage] = useState(initialLanguage);
  const [text,setText] = useState(translations[language]);
 

  

  console.log(text)

  const handleTheme = (e) => {
    const theme = e.target.value;
    console.log(theme)
    setTheme(theme);

  };

  

  const handleLanguage = (e) => {
    const language = e.target.value;
    setLanguage(language);
    setText(translations[language]);
  };

  const handleSubmit = (state) => {
    
    setisAuth(state)
  };




  return (
    <>
      <Header theme={theme} texts={text}  language={language} handleLanguage={handleLanguage} handleTheme={handleTheme}   handleSubmit={handleSubmit}       />
      <Main theme={theme}   texts={text} isAuth={isAuth}             />
      <Footer theme={theme} texts={text}             />
    
    
    
    
    
    
    
    
    
    </>
  );
}
