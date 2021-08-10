import apiService from '../../api/index';

const login = (email: string, password: string) =>
{
return apiService.post('/accounts/login',
 { "email":email, "password":password });}


export default { login };
