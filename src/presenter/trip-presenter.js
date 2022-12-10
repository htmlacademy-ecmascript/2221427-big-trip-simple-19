import {render} from '../render.js';
import NewTripFilterView from '../view/trip-filter-view.js';
import NewTripPointView from '../view/trip-point-view.js';
import NewTripSortView from '../view/trip-sort-view.js';
import NewTripPointListView from '../view/trip-point-view.js';
import NewTripPointEditView from '../view/trip-point-edit-view.js';

export default class TripPresenter {
  newPointListView = new NewTripPointListView();
  POINTS_COUNT = 3;

  constructor({filterContainer, siteMainContainer}) {
    this.filterContainer = filterContainer;
    this.siteMainContainer = siteMainContainer;
  }

  init() {
    render(new NewTripFilterView(), this.filterContainer);
    render(new NewTripSortView(), this.siteMainContainer);
    render(this.newPointListView, this.siteMainContainer);
    render(new NewTripPointEditView(), this.newPointListView.getElement());

    for (let i = 0; i < this.POINTS_COUNT; i++) {
      render(new NewTripPointView(), this.newPointListView.getElement());
    }
  }
}
