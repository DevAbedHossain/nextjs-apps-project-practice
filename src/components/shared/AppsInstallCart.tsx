"use client";

import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AppContext } from "@/context/AppProvider";
import { IApps } from "@/types/apps.type";

const AppsInstallCart = ({ app }: { app: IApps }) => {
    const { installedApps, setInstalledApps } = useContext(AppContext);

    const handleUninstall = () => {
        setInstalledApps((prev) =>
            prev.filter((installedApp) => installedApp.id !== app.id)
        );

        toast.success(`${app.title} uninstalled successfully`);
    };

    return (
        <div className="card bg-base-100 border border-base-200 shadow-sm">
            <div className="card-body">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                    {/* App Image */}
                    <Image
                        src={app.image}
                        alt={app.title}
                        width={80}
                        height={80}
                        className="h-20 w-20 rounded-2xl object-cover"
                    />

                    {/* App Information */}
                    <div className="min-w-0 flex-1">
                        <h2 className="text-xl font-bold">
                            {app.title}
                        </h2>

                        <p className="text-sm text-base-content/60">
                            {app.companyName}
                        </p>

                        <div className="mt-2 flex items-center gap-4 text-sm">
                            <span>
                                ⭐ {app.ratingAvg}
                            </span>

                            <span>
                                {app.downloads.toLocaleString()} Downloads
                            </span>

                            <span>
                                {app.size} MB
                            </span>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                        <Link
                            href={`/apps/${app.id}`}
                            className="btn btn-outline"
                        >
                            View
                        </Link>

                        <button
                            onClick={handleUninstall}
                            className="btn btn-error"
                        >
                            Uninstall
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AppsInstallCart;