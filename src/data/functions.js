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

export {startSession, validateLogin}