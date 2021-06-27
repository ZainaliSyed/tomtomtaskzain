import React from 'react';
import {NEAR_BY_RESTAURANTS} from '../actions/ActionTypes';
import constant from '../constants';

import {dispatchApi} from '../reuseableFunctions';

const dispatchNearByRestaurants = ({lat, lon, key}, cbSuccess, cbFailure) => {
  dispatchApi(
    NEAR_BY_RESTAURANTS,
    `${constant.nearByResturants}?lat=${lat}&lon=${lon}&key=${key}`,
    'GET',
    {},
    true,
    cbSuccess,
    cbFailure,
    false,
    false,
  );
};

export {dispatchNearByRestaurants};
