import update from 'immutability-helper';
import {
  ADD_TO_ACTUAL_DOWNLOAD,
  ADD_TO_QUEUE,
  DOWNLOAD_COMPLETED
} from '../actions/downloadManager';

const initialState = {
  downloadQueue: {}, // contains libs, assets and mainJar props
  actualDownload: null,
};

export default function profile(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_QUEUE:
      return {
        ...state,
        downloadQueue: {
          ...state.downloadQueue,
          [action.payload]: {
            name: action.payload,
            totalToDownload: 0,
            packType: action.packType
          }
        }
      };
    case ADD_TO_ACTUAL_DOWNLOAD:
      return {
        ...state
      };
    case DOWNLOAD_COMPLETED:
      return state;
    default:
      return state;
  }
}
