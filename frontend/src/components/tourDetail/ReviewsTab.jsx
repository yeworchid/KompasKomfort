import TourBottomNav from './TourBottomNav';

function ReviewsTab({ tabs, activeTab, setActiveTab, tour }) {
  return (
    <div className="tab-pane fade show active" role="tabpanel">
      <h3>Отзывы туристов</h3>
      <div className="review-write-block"><div><div><img src="https://www.kompass-komfort.de/bundles/applicationsonataproject/images/icons/ico-116.png" alt="" /><span>Оставьте нам свой отзыв о поездке</span></div></div></div>
      <div className="page-module"><p>Отзывов по туру "{tour.title}" пока нет. Будьте первым!</p></div>
      <TourBottomNav tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} tour={tour} />
    </div>
  );
}

export default ReviewsTab;
