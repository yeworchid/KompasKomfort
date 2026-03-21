import { Link } from 'react-router-dom';

function Breadcrumbs({ items, white = false }) {
  return (
    <section className={`${white ? 'white p-0 ' : ''}only-breadcrumb`}>
      <div className="container">
        <ul className="breadcrumb">
          {items.map((item) => (
            <li key={item.label} className={`breadcrumb-item${item.to ? ' link' : ''}`}>
              {item.to ? <Link to={item.to}>{item.label}</Link> : <span>{item.label}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Breadcrumbs;
