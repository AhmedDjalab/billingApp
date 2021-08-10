import { create } from 'apisauce';

import authStorage from '../auth/storage';
import settings from '../config/settings';

const apiService = create({
    // for android virtual device to be able to see the api - ip address
    baseURL: settings.apiUrl
});

apiService.addAsyncRequestTransform(async request => {
    const token = await authStorage.getToken();
    if (!token) return;

    request.headers['x-auth-token'] = token;
});

const { get } = apiService;



export default apiService;
