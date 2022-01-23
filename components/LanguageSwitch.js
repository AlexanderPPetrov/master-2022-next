import {NavDropdown} from "react-bootstrap";
import ActiveLink from "./ActiveLink";
import Language from "./Language";
import { useRouter } from 'next/router'

const languages = [
    {
        locale: 'bg',
        flag: 'BG',
        title: 'Български'
    },
    {
        locale: 'en',
        flag: 'GB',
        title: 'English'
    },
]

function LanguageSwitch() {

    const router = useRouter()
    function getCurrentLanguage() {
        const currentLanguage = languages.find(language => {
            return language.locale === router.locale;
        })
        return <Language 
            title={currentLanguage.title} 
            flag={currentLanguage.flag} />
    }
    function renderLanguages() {
        return languages.map(language => {
            return <ActiveLink 
                    key={language.locale}
                    activeClassName="active" 
                    href={`/${language.locale}`}
                    locale={language.locale}>
                    <a className="dropdown-item d-flex align-items-center">
                        <Language 
                        title={language.title} 
                        flag={language.flag}/>
                    </a>
                </ActiveLink>
        })
    }

    return (
        <NavDropdown title={
        <div className="d-flex align-items-center">
            {getCurrentLanguage()}
        </div>
        }>
        {renderLanguages()}
      </NavDropdown>
    )
}
export default LanguageSwitch