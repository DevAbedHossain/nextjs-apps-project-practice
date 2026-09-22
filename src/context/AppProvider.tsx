"use client";
import { IApps } from '@/types/apps.type';
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

type TAppContext = {
    installedApps: IApps[];
    setInstalledApps: Dispatch<SetStateAction<IApps[]>>;
};

export const AppContext = createContext<TAppContext>({
    installedApps: [],
    setInstalledApps: () => { },
});


const AppProvider = ({ children }: { children: ReactNode }) => {

    const [installedApps, setInstalledApps] = useState<IApps[]>([])

    const sharedData: TAppContext = {
        installedApps,
        setInstalledApps,
    }

    return (
        <AppContext.Provider value={sharedData}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;