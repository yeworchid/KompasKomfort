function SiteFooter() {
  return (
    <footer className="footer">
      <div className="newsletter">
        <div className="container newsletter-content">
          <div className="newsletter-text">
            <img src="https://www.kompass-komfort.de/bundles/applicationsonataproject/images/icons/ico-45.png" alt="Письмо" />
            <span>Подпишитесь на рассылку и получайте лучшие предложения</span>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="Введите ваш адрес электронной почты" />
            <button type="submit">
              <img src="https://www.kompass-komfort.de/bundles/applicationsonataproject/images/icons/ico-46.png" alt="Отправить" />
            </button>
          </form>
        </div>
      </div>
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-column"><h4>ОСТАВАЙТЕСЬ НА СВЯЗИ</h4><p><img src="https://www.kompass-komfort.de/bundles/applicationsonataproject/images/icons/ico-42.png" alt="" />Запрос по электронной почте</p><p><img src="https://www.kompass-komfort.de/bundles/applicationsonataproject/images/icons/ico-44.png" alt="" />+49.173.153.70.36</p></div>
          <div className="footer-column"><h4>ИНФОРМАЦИЯ</h4><a href="/">Наши эксперты говорят</a></div>
          <div className="footer-column"><h4>НАША ГОРДОСТЬ</h4><a href="/">Тур в Диснейленд в Париже или все музеи</a></div>
          <div className="footer-column"><h4>НАПРАВЛЕНИЯ</h4><a href="/">Туры во Францию</a><br /><a href="/">Туры в Швейцарию</a><br /><a href="/">Туры в Англию</a></div>
          <div className="footer-column logo-column"><img className="logo" src="https://www.kompass-komfort.de/bundles/applicationsonataproject/images/logo-3.png" alt="Kompass Logo" /><div className="social-icons"><a href="https://facebook.com" aria-label="Facebook"><i className="fa fa-facebook" /></a><a href="https://google.com" aria-label="Google"><i className="fa fa-google" /></a><a href="https://twitter.com" aria-label="Twitter"><i className="fa fa-twitter" /></a><a href="https://vk.com" aria-label="VK"><i className="fa fa-vk" /></a><a href="https://ok.ru" aria-label="Odnoklassniki"><i className="fa fa-odnoklassniki" /></a></div><h5>ТИПЫ ПЛАТЕЖЕЙ</h5><img className="payments" src="https://www.kompass-komfort.de/bundles/applicationsonataproject/images/logos/logos-9.png" alt="Payment Types" /></div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-links"><a href="/">Правила обращения с личными данными</a> | <a href="/">Ч.З.В.</a> | <a href="/">Политика конфиденциальности</a> | <a href="/">Условия использования сайта</a> | <a href="/">Способы оплаты</a></div>
          <p>© UAB "Komfort Europa" 2001-2022. Все права защищены.</p>
          <p>Все права на этот сайт являются собственностью UAB "Komfort Europa", VAT 304424056. Никакая часть этого сайта не может использоваться и распространяться без письменного разрешения.</p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
