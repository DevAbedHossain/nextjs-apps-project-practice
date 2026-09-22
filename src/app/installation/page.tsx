"use client";
import AppsInstallCart from '@/components/shared/AppsInstallCart';
import { AppContext } from '@/context/AppProvider';
import { IApps } from '@/types/apps.type';
import { useContext, useState } from 'react';

const InstallationPage = () => {

    const { installedApps } = useContext(AppContext);

    const [sortBy, setSortBy] = useState<"size" | "rating" | "installed">("size");

    const handleSortByApps = (apps: IApps[]) => {

        const filterApps = [...apps]

        if (sortBy === "size") {
            return filterApps.sort((a, b) => b.size - a.size)
        } else if (sortBy === "rating") {
            return filterApps.sort((a, b) => b.ratingAvg - a.ratingAvg)
        } else if (sortBy === "installed") {
            return filterApps.sort((a, b) => b.downloads - a.downloads)
        }

        return filterApps;
    }

    const findApps = handleSortByApps(installedApps);



    return (
        <section className="bg-[##f5f5f5]">
            <div className="container mx-auto py-15">
                <h2 className="text-5xl text-[#001931] font-bold text-center py-4">Your Installed Apps</h2>
                <p className="text-xl text-[#627382] text-center">Explore All Trending Apps on the Market developed by us</p>

                <div className="flex justify-between items-center">
                    <h4 className="text-xl font-semibold text-[#001931] py-5 mt-4">Apps Found ({installedApps.length})</h4>

                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value as "size" | "rating" | "installed")} className="select outline-0">
                        <option value={"size"}>Sort by Size</option>
                        <option value={"rating"}>Sort by Rating</option>
                        <option value={"installed"}>Sort by Installed</option>
                    </select>
                </div>

                <div className="py-3 space-y-4">
                    {
                        findApps.map((app: IApps) => <AppsInstallCart key={app.id} app={app} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default InstallationPage;