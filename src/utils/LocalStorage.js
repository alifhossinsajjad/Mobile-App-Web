export const loadInstall = () => {
    try{
        const data = localStorage.getItem('installedApp')
        return data ? JSON.parse(data) : [];
    }
    catch(error){
        console.log(error)
        return[];
    }
};

export const updateApps = (app) => {
    const installedApp = loadInstall();

    try{
        const isDuplicate = installedApp.some((a)=> a.id === app.id)
        if(isDuplicate) 
            return alert('already Installed this app')
        
        const updateIntalledApp = [...installedApp,app]
        localStorage.setItem("installedApp", JSON.stringify(updateIntalledApp))
    }
    catch(error){
        console.log(error);
    }
}



export const removeFromInstallation = (id) => {
    const installedApp = loadInstall();

    try{
        const updateIntalledApp = installedApp.find(p=>p.id !== id)

        localStorage.setItem("installedApp", JSON.stringify(updateIntalledApp));
    }
    catch(error){
        console.log(error);
    }
}