

class AuthenticationService {

    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    async login(username, password) {
        try{
            if (!username || !password) {
                console.log('Username and password are required');
            }
            const response = await this.httpClient.post('/login', {
                username,
                password
            });
            return response.json();
        }catch(error){
            console.log('Error during login');
            return;
        }    
    }

}

export default AuthenticationService;