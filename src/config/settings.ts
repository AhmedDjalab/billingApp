import Constants from 'expo-constants';

//?my api ( asp net core 3.0 )
const apiUrl = 'http://api.kheddam.com/api';

const settings = {
    dev: {
        apiUrl
    },
    staging: {
        apiUrl
    },
    prod: {
        apiUrl
    }
};

const getCurrentSettings = () => {
    // eslint-disable-next-line no-undef
    if (__DEV__) return settings.dev;
    if (Constants?.manifest?.releaseChannel === 'staging')
        return settings.staging;
    return settings.prod;
};

export default getCurrentSettings();
