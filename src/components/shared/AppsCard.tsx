import { IApps } from "@/types/apps.type";
import Link from "next/link";

interface AppsCardProps {
    app: IApps
}

const AppsCard = ({ app }: AppsCardProps) => {

    return (

        <div className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#642ee31c]">

            {/* App Header */}
            <div className="flex items-center gap-4">
                <img
                    src={app.image}
                    alt={app.title}
                    className="h-20 w-20 rounded-2xl object-cover"
                />

                <div className="min-w-0 flex-1">
                    <h3 className="truncate text-lg font-bold text-gray-900">
                        {app.title}
                    </h3>

                    <p className="mt-1 truncate text-sm text-gray-500">
                        {app.companyName}
                    </p>

                    <div className="mt-2 flex items-center gap-1">
                        <span className="text-yellow-500">★</span>

                        <span className="text-sm font-semibold text-gray-700">
                            {app.ratingAvg}
                        </span>
                    </div>
                </div>
            </div>

            {/* Description */}
            <p className="mt-5 line-clamp-2 text-sm leading-6 text-gray-500">
                {app.description}
            </p>

            {/* Stats */}
            <div className="mt-5 flex items-center justify-between border-y border-gray-100 py-4">
                <div>
                    <p className="text-xs text-gray-400">
                        Downloads
                    </p>

                    <p className="mt-1 text-sm font-semibold text-gray-800">
                        {app.downloads >= 1000000
                            ? `${(app.downloads / 1000000).toFixed(1)}M`
                            : `${(app.downloads / 1000).toFixed(0)}K`}
                    </p>
                </div>

                <div>
                    <p className="text-xs text-gray-400">
                        Size
                    </p>

                    <p className="mt-1 text-sm font-semibold text-gray-800">
                        {app.size} MB
                    </p>
                </div>

                <div>
                    <p className="text-xs text-gray-400">
                        Reviews
                    </p>

                    <p className="mt-1 text-sm font-semibold text-gray-800">
                        {app.reviews?.toLocaleString() ?? 0}
                    </p>
                </div>
            </div>

            {/* Button */}
            <Link href={`/apps/${app.id}`} className="mt-4 btn w-full rounded-xl px-4 py-3 text-sm font-semibold text-white transition bg-linear-to-tl from-[#9F62F2] to-[#632EE3] hover:from-[#632EE3] hover:to-[#9F62F2]">View Details</Link>
        </div>

    );
};

export default AppsCard;