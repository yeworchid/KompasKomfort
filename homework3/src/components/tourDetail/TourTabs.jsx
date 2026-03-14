import { useState } from 'react';
import DatesTab from './DatesTab';
import LocationsTab from './LocationsTab';
import ReviewsTab from './ReviewsTab';
import ScheduleTab from './ScheduleTab';
import TourProgramTab from './TourProgramTab';

const tabs = [
  { id: 'program', label: 'Программа тура', showInBottomNav: true },
  { id: 'dates', label: 'Даты и цены', showInBottomNav: true },
  { id: 'locations', label: 'Города отправления', showInBottomNav: true },
  { id: 'schedule', label: 'Время выезда/приезда', showInBottomNav: true },
  { id: 'reviews', label: 'Отзывы туристов', showInBottomNav: false },
];

function TourTabs({ tour }) {
  const [activeTab, setActiveTab] = useState('program');

  const tabProps = {
    tabs,
    activeTab,
    setActiveTab,
    tour,
  };

  return (
    <>
      <ul className="nav nav-tabs" role="tablist">
        {tabs.map((tab) => (
          <li key={tab.id} className="nav-item">
            <button
              type="button"
              className={`nav-link${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content mb-55">
        {activeTab === 'program' && <TourProgramTab {...tabProps} />}
        {activeTab === 'dates' && <DatesTab {...tabProps} />}
        {activeTab === 'locations' && <LocationsTab {...tabProps} />}
        {activeTab === 'schedule' && <ScheduleTab {...tabProps} />}
        {activeTab === 'reviews' && <ReviewsTab {...tabProps} />}
      </div>
    </>
  );
}

export default TourTabs;
