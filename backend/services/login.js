export async function loginService(credentials){
    if (!credentials
        || !credentials.username
        || !credentials.password
        || typeof credentials.username != 'string'
        || typeof credentials.password != 'string'
    ){
        return{
            error: 'Argumentos invalidos',
        };
    }
    if (credentials.username !== 'admin'){
        return{
            error: 'credenciales invalidas',
        }
    };
    if (credentials.password !== '1234'){
        return{
            error: 'credenciales invalidas',
        }
    };

    return {
        token: 'Token de acceso'
    };
}