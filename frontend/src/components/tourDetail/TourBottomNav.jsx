import { Link } from 'react-router-dom';

function TourBottomNav({ tabs, activeTab, setActiveTab, tour }) {
  return (
    <div className="view-bottom">
      <ul className="menu">
        {tabs
          .filter((tab) => tab.showInBottomNav)
          .map((tab) => (
            <li key={tab.id}>
              <button
                type="button"
                className={activeTab === tab.id ? 'active' : ''}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
      </ul>

      <div>
        <ul className="socials justify-content-end">
          <li>
            <div className="addthis_inline_share_toolbox" />
          </li>
        </ul>
        <Link to={`/tour/${tour.slug}`} className="btn btn-primary btn-lg f-16 price-btn">
          <img
            src="https://www.kompass-komfort.de/bundles/applicationsonataproject/images/icons/ico-47.png"
            alt=""
            className="icon-fix mr-8"
          />
          Забронировать тур
        </Link>
      </div>
    </div>
  );
}

export default TourBottomNav;
