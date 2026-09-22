"use client"
import { IApps } from '@/types/apps.type';
import React, { useState } from 'react';

const SearchFilter = ({ apps }: { apps: IApps[] }) => {

    const [appName, setAppName] = useState<string>("")

    const filterApp = apps.filter((app: IApps) => app.title.toLowerCase().includes(appName.toLowerCase()))
    console.log(filterApp)

    // const handleSearchApp = (appName: string) => {
    //     console.log(appName)
    // }

    return (
        <input type="text" onChange={(e) => setAppName(e.target.value)} className="input outline-0 border-amber-50" placeholder="Play Store" />
    );
};

export default SearchFilter;