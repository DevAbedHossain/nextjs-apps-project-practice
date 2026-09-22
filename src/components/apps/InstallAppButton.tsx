"use client";
import { AppContext } from '@/context/AppProvider';
import { IApps } from '@/types/apps.type';
import React, { useContext } from 'react';

const InstallAppButton = ({ app }: { app: IApps }) => {

    const { installedApps, setInstalledApps } = useContext(AppContext);

    const handleInstallApp = () => {
        console.log("Button Trigger install");
        console.log(app)


        const isInstalled = installedApps.find(installedApp => installedApp.id === app.id)

        console.log(isInstalled)

        if (isInstalled) {
            return alert("Already Installed")
        }

        setInstalledApps([...installedApps, app])

        alert(`${app.title} install successfully`)
    }

    return (
        <button onClick={handleInstallApp} className="btn btn-primary px-8">
            Install
        </button>
    );
};

export default InstallAppButton;