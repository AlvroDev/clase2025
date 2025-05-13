export function loginService(username, password){
    if (!username || !password
        || typeof username != 'string'
        || typeof password != 'string'
    ){
        return{
            error: 'Argumentos invalidos',
        };
    }
    if (username !== 'admin'){
        return{
            error: 'credenciales invalidas',
        }
    };
    if (password !== '1234'){
        return{
            error: 'credenciales invalidas',
        }
    };

    return {
        token: 'Token de acceso'
    };
}