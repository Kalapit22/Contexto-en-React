export const Header = ({theme,handleTheme,language,handleLanguage,isAuth,handleSubmit,texts}) => {


    return(
        <>
         <header className={`header ${theme}`}>
        <h1>{texts.headerTitle}</h1>
       
    
        <select onChange={handleLanguage} name="language" id="language">
            <option value="es">ES</option>
            <option value="en">EN</option>
        </select>
    
        <label htmlFor="theme">{texts.light}</label>
        <input onClick={handleTheme} type="radio" name="theme" id="" value="light" />
        <label htmlFor="theme">{texts.dark}</label>
        <input onClick={handleTheme} type="radio" name="theme" id=""  value="dark" />
    
    
        {isAuth ? <button type="submit" onClick={() => handleSubmit(false) }>Logout</button>
                : <button type="submit" onClick={() => handleSubmit(true) }>Login</button> }
        
        


        </header>
        </>
    )    



};