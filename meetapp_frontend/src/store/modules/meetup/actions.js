export function newMeetupRequest() {
  return {
    type: '@meetup/NEW_REQUEST',
  };
}

export function meetupDetail(meetup) {
  return {
    type: '@meetup/GET_DETAIL',
    payload: { meetup },
  };
}

export function meetupCreateRequest(data) {
  return {
    type: '@meetup/CREATE_REQUEST',
    payload: { data },
  };
}

export function meetupUpdateRequest(data) {
  return {
    type: '@meetup/UPDATE_REQUEST',
    payload: { data },
  };
}

export function meetupCancelRequest(data) {
  return {
    type: '@meetup/CANCEL_REQUEST',
    payload: { data },
  };
}

export function meetupFailure() {
  return {
    type: '@meetup/FAILURE',
  };
}
