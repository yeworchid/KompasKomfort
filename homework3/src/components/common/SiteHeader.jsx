import { Link } from 'react-router-dom';

const menuItems = [
  { label: 'Однодневные туры', to: '/' },
  { label: 'Mногодневные туры' },
  { label: 'Шок-предложения!' },
  { label: 'Covid-19 информация' },
  { label: 'Отдых на море и экскурсии' },
];

const utilityLinks = [
  ['https://www.kompass-komfort.de/bundles/applicationsonataproject/images/icons/user-menu/ico-3.png', 'Мое бронирование', true],
  ['https://www.kompass-komfort.de/bundles/applicationsonataproject/images/icons/user-menu/ico-1.png', 'Где приобрести тур'],
  ['https://www.kompass-komfort.de/bundles/applicationsonataproject/images/icons/user-menu/ico-2.png', 'О нас'],
  ['https://www.kompass-komfort.de/bundles/applicationsonataproject/images/icons/user-menu/ico-3.png', 'Ч.З.В.'],
  ['https://www.kompass-komfort.de/bundles/applicationsonataproject/images/icons/user-menu/ico-4.png', 'Контакты'],
];

function SiteHeader() {
  return (
    <header className="simple">
      <div className="container">
        <div className="cont">
          <div className="logo-wrap">
            <Link to="/" className="logo" aria-label="Kompass Komfort" />
          </div>
          <div>
            <ul className="user-menu">
              <li className="lang-select">
                <div>
                  <i className="flag-icon flag-icon-ru" />
                  RU
                  <i className="fa fa-angle-down" />
                </div>
              </li>
              {utilityLinks.map(([icon, label, bold]) => (
                <li key={label}>
                  <a href="/">
                    <img src={icon} alt="" />
                    <span style={bold ? { fontWeight: 'bold' } : undefined}>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="user-menu-phone">
              Звоните пн-пт 9.00-18.00, сб 9.00-14.00:
              <img src="https://www.kompass-komfort.de/bundles/applicationsonataproject/images/de.png" alt="" />
              {' '}
              +49 173 153 7036
              {' '}
              &nbsp;
            </div>
          </div>
        </div>
      </div>
      <div className="main-menu">
        <div className="container">
          <ul className="menu">
            {menuItems.map((item) => (
              <li key={item.label}>
                {item.to ? (
                  <Link to={item.to}><span>{item.label}</span></Link>
                ) : (
                  <a href="/"><span>{item.label}</span></a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
