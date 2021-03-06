import { FETCH_WEATHER } from './../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // same as: state.concat( [ action.payload.data ]);
      // returns a new array each time w/o manipulated the state/array
      return [ action.payload.data, ...state ];
  }

  return state;
}