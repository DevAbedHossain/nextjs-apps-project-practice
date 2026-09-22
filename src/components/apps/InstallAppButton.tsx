"use client";
import { AppContext } from '@/context/AppProvider';
import { IApps } from '@/types/apps.type';
import { useContext } from 'react';
import { toast } from 'react-toastify';


const InstallAppButton = ({ app }: { app: IApps }) => {

    const { installedApps, setInstalledApps } = useContext(AppContext);

    const handleInstallApp = () => {
        console.log("Button Trigger install");
        console.log(app);


        const isInstalled = installedApps.find(installedApp => installedApp.id === app.id);

        console.log(isInstalled);

        if (isInstalled) {
            toast.error("Already Installed");
            return;
        }

        setInstalledApps([...installedApps, app]);

        toast.success(`${app.title} install successfully`);
    }

    return (
        <button onClick={handleInstallApp} className="btn btn-primary px-8">
            Install
        </button>
    );
};

export default InstallAppButton;