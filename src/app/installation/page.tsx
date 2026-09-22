"use client";
import AppsCard from '@/components/shared/AppsCard';
import { AppContext } from '@/context/AppProvider';
import { IApps } from '@/types/apps.type';
import { useContext } from 'react';

const InstallationPage = () => {

    const { installedApps } = useContext(AppContext);

    return (
        <section className="bg-[##f5f5f5]">
            <div className="container mx-auto py-15">
                <h2 className="text-5xl text-[#001931] font-bold text-center py-4">Your Installed Apps</h2>
                <p className="text-xl text-[#627382] text-center">Explore All Trending Apps on the Market developed by us</p>

                <div className="flex justify-between items-center">
                    <h4 className="text-xl font-semibold text-[#001931] py-5 mt-4">Apps Found ({installedApps.length})</h4>

                    <select defaultValue="size" className="select">
                        <option value={"size"}>Sort by Size</option>
                        <option value={"rating"}>Sort by Rating</option>
                        <option value={"installed"}>Sort by Installed</option>
                    </select>
                </div>

                <div className="grid grid-cols-4 gap-4 py-3">
                    {
                        installedApps.map((app: IApps) => <AppsCard key={app.id} app={app} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default InstallationPage;