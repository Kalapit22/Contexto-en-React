export const Footer = ({texts,theme}) => {

return(

    <footer className={`footer ${theme}`}>
            <h3>{texts.footerTitle}</h3>
            <p>{texts.footerCredits}</p>

    </footer>
)


};