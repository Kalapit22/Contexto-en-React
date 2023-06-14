export const Main = ({theme,isAuth,texts}) => {

return(

    <main className={`main ${theme}`}>
        {isAuth ?
                 <>
                    <h3>{texts.loggedUser}</h3>
                    <p>{texts.paragraphUser}</p>
                 </> 
                :
                <>
                    <h3>{texts.guestUser}</h3>
                    <p>{texts.paragraphGuest}</p>
                </> 
        }


        

        


    </main>


)




};