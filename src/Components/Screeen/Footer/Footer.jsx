import React from 'react'
import './footer.css';
import  FrameLogo from "./images/FrameLogo.png";
import  FooterCallIcon from "./images/footerCallIcon.png";
import  FlayIcon from "./images/playmarketiconfooter.png";
export default function Footer() {
    return (
        <div className="footer-main">
            <div className="footer-block">
                <div className="left">
                    <img className='footerimgLogo' src={FrameLogo} alt="" />
                        <br />
                    <p>
                    <p >© 2001–2021 ООО «Лайм»</p>
                        Все права защищены. «Лайм» является <br /> зарегистрированным товарным знаком <br /> Lime Holding SA. <br />
                        <a href='#'>Политика Конфиденциальности </a>
                        </p>
                </div>
                <div className="middle">
                       <div className="conpanylist">
                        <h4>О компании</h4>
                        <ul>
                            <li>Доставка и оплата</li>
                            <li>Вопрос-ответПоставщикам</li>
                            <li>Контакты</li>
                            <li>Новости</li>
                            <li>Политика</li>
                        </ul>
                       </div>
                       <div className="buyList">
                         <h4>Покупателям</h4>
                         <ul>
                            <li>Бонусная система</li>
                            <li>Как вернуть</li>
                            <li>Как заказать</li>
                            <li>Программа лояльности</li>
                            <li>Акции</li>
                            <li>Шеф-лайм</li>
                         </ul>
                       </div>
                </div>
                <div className="right">
                   <p>Круглосуточная поддержка</p>
                   <h1><img src={FooterCallIcon} alt="" />7756</h1>
                   <button className='footerbtn'><img src={FlayIcon} alt="" /> Скачать в AppStore</button> <br/>
                   <button className='footerbtn'><img src={FlayIcon} alt="" /> Скачать в Play Market</button>
                   <div className="footersIcon">
                   <i class="bi bi-youtube"></i>
                   <i class="bi bi-facebook"></i>
                   </div>
                </div>
            </div>
        </div>
    )
}
