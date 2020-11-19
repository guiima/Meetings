import * as constants from './constants';

const colors = {
  background: constants.white,

  primaryTextColor: constants.pencillead,

  secondaryTextColor: constants.white,

  primaryColor: constants.cornflower,

  primaryButton: {
    background: constants.cornflower,
    colorText: constants.white,
  },

  secondaryButton: {
    background: constants.tigerlily,
    colorText: constants.white,
  },

  errorMessage: {
    colorText: constants.tigerlily,
  },

  cardMeeting: {
    colorText: constants.pencillead,
    borderColor: constants.pencillead,
    background: constants.squeaky,
  },

  notification: {
    error: constants.tigerlily,
    success: constants.mintleaf,
  },
};

export const theme = {
  colors,
};
