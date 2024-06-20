import '../styles/Button.scss'

const Button = ({content, action, onClick, type ='submit'}) => {
    return (
        <>
            <button type={type} className={`Button Button${action}`} onClick={onClick}> 
                {content}
            </button>
        </>
    )
}

export default Button