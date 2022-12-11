import { render } from './render.js';
import TripPresenter from './presenter/trip-presenter.js';
import TripFilterView from './view/trip-filter-view.js';
import TripSortView from './view/trip-sort-view.js';

const tripFilterContainer = document.querySelector('.trip-controls__filters');
const siteTripContainer = document.querySelector('.trip-events');

const tripPresenter = new TripPresenter({
  siteContainer: siteTripContainer
});

render(new TripFilterView(), tripFilterContainer);
render(new TripSortView(), siteTripContainer);

tripPresenter.init();

