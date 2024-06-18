import '../styles/Button.scss'

const Button = ({content, action, onClick, type ='submit'}) => {
    return (
        <div >
            <button type={type} className={`Button Button${action}`} onClick={onClick}> 
                {content}
            </button>
        </div>
    )
}

export default Button