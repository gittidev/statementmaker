import '../styles/Footer.scss'
import facebook from '../assets/facebook.jpg'
import kakaotalk from '../assets/kakaotalk.svg'
import twitter from '../assets/twitter.jpg'

const Footer =  ()=>{
    return (
        <div className="Footer">
            <p>현재페이지 공유하기</p>
            <ul>
                <li><img src={facebook} className="sns-img" title="페이스북 공유하기" alt="페이스북 공유하기"/></li>
                <li><img src={kakaotalk} className="sns-img" title="트위터 공유하기" alt="트위터 공유하기" /></li>
                <li><img src={twitter} className="sns-img" title="카카오톡 공유하기" alt="카카오톡 공유하기" id="kakao-link-btn"/></li>
            </ul>
        </div>
    )
}

export default Footer