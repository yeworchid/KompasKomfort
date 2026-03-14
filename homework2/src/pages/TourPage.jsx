import { Link, Navigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import TourInfoTabs from '../components/TourInfoTabs';

function TourPage({ tours }) {
  const { slug } = useParams();
  const tour = tours.find((item) => item.slug === slug);

  if (!tour) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout>
      <section className="pb-35">
        <div className="container">
          <Link to="/" className="hw2-back">
            <i className="fa fa-angle-left" />
            Назад к списку
          </Link>

          <div className="hw2-detail">
            <div className="hw2-detail-top">
              <div>
                <img src={tour.galleryImages[0]} alt={tour.title} className="hw2-detail-image" />
              </div>

              <div className="hw2-side">
                <h2>{tour.title}</h2>
                <div className="hw2-price">от {tour.price}</div>
                <p>{tour.description}</p>
                <p>Страна: {tour.country}</p>
                <p>Город: {tour.city}</p>
                <div className="hw2-gallery">
                  {tour.galleryImages.map((image) => (
                    <img key={image} src={image} alt={tour.title} />
                  ))}
                </div>
              </div>
            </div>

            <TourInfoTabs tour={tour} />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default TourPage;
