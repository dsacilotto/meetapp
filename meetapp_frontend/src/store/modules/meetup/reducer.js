import produce from 'immer';

const INITIAL_STATE = {
  data: null,
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/NEW_REQUEST':
        draft.data = null;
        break;
      case '@meetup/GET_DETAIL':
        draft.data = action.payload.meetup;
        break;
      default:
    }
  });
}
