// user functions
export const setItemUser = async (user) => {
    if (user !== undefined){
        localStorage.setItem('user',JSON.stringify(user));
    }
}

export const getItemUser = async () => {
    const userString = localStorage.getItem('user');
    if (userString && userString!=="undefined"){
      return (JSON.parse(userString));  
    } else {
        return undefined;
    }
}

// deity functions
export const setItemDeity = async (deity) => {
    if (deity !== undefined){
        localStorage.setItem('deity', JSON.stringify(deity));
    }
}

export const getItemDeity = async () => {
    const deityString = localStorage.getItem('deity');
    if (deityString && deityString!=="undefined"){
      return (JSON.parse(deityString));  
    } else {
        return undefined;
    }
}

export const setItemMatchedDeities = async (matchedDeities) => {
    if (matchedDeities !== undefined){
        localStorage.setItem('matchedDeities', JSON.stringify(matchedDeities));
    }
}

export const getItemMatchedDeities = async () => {
    const deityString = localStorage.getItem('matchedDeities');
    if (deityString && deityString!=="undefined"){
      return (JSON.parse(deityString));  
    } else {
        return undefined;
    }
}

// isAdmin functions
export const setItemIsAdmin = async (isAdmin) => {
    if (isAdmin){
        localStorage.setItem('isAdmin', isAdmin);
    }
}

export const getItemIsAdmin = async () => {
    const storedIsAdmin = localStorage.getItem("isAdmin");
    if (storedIsAdmin && storedIsAdmin === "true"){
        return true;
    }
    return false
}


