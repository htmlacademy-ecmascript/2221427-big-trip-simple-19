const POINTS_COUNT = 3;

import {render, RenderPosition} from '../render.js';
import TripListView from '../view/trip-list-view.js';
import TripPointCreateView from '../view/trip-point-create-view.js';
import TripPointEditView from '../view/trip-point-edit-view.js';
import TripPointView from '../view/trip-point-view.js';


export default class TripPresenter {
  newPointListView = new TripListView();


  constructor({siteContainer}) {
    this.siteContainer = siteContainer;
  }

  init() {
    render(this.newPointListView, this.siteContainer);
    render(new TripPointCreateView(), this.newPointListView.getElement());
    render(new TripPointEditView(), this.newPointListView.getElement(), RenderPosition.AFTERBEGIN);


    for (let i = 0; i < POINTS_COUNT; i++) {
      render(new TripPointView(), this.newPointListView.getElement());
    }
  }
}
