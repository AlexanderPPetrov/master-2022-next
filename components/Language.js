import Flags from 'country-flag-icons/react/3x2'

function Language(props) {
    const Flag = Flags[props.flag];
    function getFlag() {
        if(Flags[props.flag]){
            return <>
                <Flag title={props.title} className="flag-icon"/>
                <span className="px-2">{props.title}</span>
            </>
        }
        return null;
    }
    return (
        <>
            {getFlag()}
        </>
    )
}
export default Language