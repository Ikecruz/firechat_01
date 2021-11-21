const startSession = (username) => {

    try{
        sessionStorage.setItem("userName", username);
        return true;
    } catch(e){
        return false;
    }

}

const validateLogin = () => {

    try{
        let log = sessionStorage.getItem("userName");
        if(log){
            return log;
        } else{
            return false;
        }
    } catch(e){
        return false;
    }

}

const generateID = (length = 10) => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

export {startSession, validateLogin, generateID}