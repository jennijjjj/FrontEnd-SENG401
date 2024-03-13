export function getDeitiesData(){
    try {
    fetch('/Admin/Deities') 
        .then(response => {
        if (response.ok) {
            response.json().then(data => {
            console.log(data);
            return(data);
            });
        } else {
            throw new Error('Network response was not ok');
        }
        })
        .catch(error => {
        console.error(`Error fetching data:`, error); 
        });
    } catch (error) {
    console.error(`Exception occurred while fetching:`, error);
    }
}

export function getCalendarData(){
    try {
    fetch('/Admin/Calendar') 
        .then(response => {
        if (response.ok) {
            response.json().then(data => {
            console.log(data);
            return(data);
            });
        } else {
            throw new Error('Network response was not ok');
        }
        })
        .catch(error => {
        console.error(`Error fetching data:`, error); 
        });
    } catch (error) {
    console.error(`Exception occurred while fetching:`, error);
    }
}

export function getUsersData(){
    try {
    fetch('/Admin/User') 
        .then(response => {
        if (response.ok) {
            response.json().then(data => {
            console.log(data);
            return(data);
            });
        } else {
            throw new Error('Network response was not ok');
        }
        })
        .catch(error => {
        console.error(`Error fetching data:`, error); 
        });
    } catch (error) {
    console.error(`Exception occurred while fetching:`, error);
    }
}

export function getForumData(){
    try {
    fetch('/Admin/Forum') 
        .then(response => {
        if (response.ok) {
            response.json().then(data => {
            console.log(data);
            return(data);
            });
        } else {
            throw new Error('Network response was not ok');
        }
        })
        .catch(error => {
        console.error(`Error fetching data:`, error); 
        });
    } catch (error) {
    console.error(`Exception occurred while fetching:`, error);
    }
}