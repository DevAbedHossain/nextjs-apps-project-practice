import InstallAppButton from "@/components/apps/InstallAppButton";
import { getAllApps } from "@/lib/Apps";
import { IApps } from "@/types/apps.type";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
    const getApps = await getAllApps()

    return getApps.map((app: IApps) => ({ appId: String(app.id) }))
}

interface AppDetailsProms {
    params: {
        appId: string
    }
}


const AppDetailsPage = async ({ params }: AppDetailsProms) => {

    const { appId } = await params;

    const apps = await getAllApps();

    const app = apps.find((getId: IApps) => String(getId.id) === String(appId));
    console.log(app)

    if (!app) {
        notFound();
    }

    return (
        <section className="bg-[#f5f5f5]">
            <div className="container mx-auto py-15">

                {/* Breadcrumb */}
                <div className="breadcrumbs mb-6 text-sm">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/apps">Apps</a>
                        </li>
                        <li>{app.title}</li>
                    </ul>
                </div>

                {/* App Header */}
                <section className="card bg-base-100 shadow-sm">
                    <div className="card-body">

                        <div className="flex flex-col gap-6 md:flex-row">

                            {/* App Image */}
                            <div className="shrink-0">
                                <img
                                    src={app.image}
                                    alt={app.title}
                                    className="h-40 w-40 rounded-3xl object-cover"
                                />
                            </div>

                            {/* App Information */}
                            <div className="flex-1">

                                <h1 className="text-3xl font-bold">
                                    {app.title}
                                </h1>

                                <p className="mt-2 text-base-content/60">
                                    {app.companyName}
                                </p>

                                {/* Rating */}
                                <div className="mt-4 flex flex-wrap items-center gap-4">

                                    <div className="flex items-center gap-1">
                                        <span className="text-xl text-warning">
                                            ★
                                        </span>

                                        <span className="font-bold">
                                            {app.ratingAvg}
                                        </span>
                                    </div>

                                    <span className="text-base-content/60">
                                        {app.reviews?.toLocaleString() ?? 0} Reviews
                                    </span>

                                    <span className="text-base-content/60">
                                        {app.downloads >= 1000000
                                            ? `${(
                                                app.downloads / 1000000
                                            ).toFixed(1)}M`
                                            : `${(
                                                app.downloads / 1000
                                            ).toFixed(0)}K`}{" "}
                                        Downloads
                                    </span>

                                    <span className="text-base-content/60">
                                        {app.size} MB
                                    </span>
                                </div>

                                {/* Install Button */}
                                <div className="mt-6">
                                    <InstallAppButton app={app} />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Description */}
                <section className="card mt-6 bg-base-100 shadow-sm">
                    <div className="card-body">

                        <h2 className="card-title text-2xl">
                            About this app
                        </h2>

                        <p className="mt-3 leading-7 text-base-content/70">
                            {app.description}
                        </p>

                    </div>
                </section>

                {/* Ratings */}
                <section className="card mt-6 bg-base-100 shadow-sm">
                    <div className="card-body">

                        <h2 className="card-title text-2xl">
                            Ratings & Reviews
                        </h2>

                        <div className="mt-6 flex flex-col gap-8 md:flex-row">

                            {/* Average Rating */}
                            <div className="flex flex-col items-center justify-center md:w-40">

                                <p className="text-5xl font-bold">
                                    {app.ratingAvg}
                                </p>

                                <div className="mt-2 text-warning">
                                    ★★★★★
                                </div>

                                <p className="mt-2 text-sm text-base-content/60">
                                    {app.reviews?.toLocaleString() ?? 0} Reviews
                                </p>

                            </div>

                            {/* Rating Breakdown */}
                            <div className="flex-1 space-y-3">

                                {app.ratings
                                    .slice()
                                    .reverse()
                                    .map((ratings: { name: string, count: number }) => {

                                        const percentage =
                                            app.reviews > 0
                                                ? (ratings.count /
                                                    app.reviews) *
                                                100
                                                : 0;

                                        return (
                                            <div
                                                key={ratings.name}
                                                className="flex items-center gap-3"
                                            >
                                                <span className="w-14 text-sm">
                                                    {ratings.name}
                                                </span>

                                                <progress
                                                    className="progress progress-warning flex-1"
                                                    value={percentage}
                                                    max="100"
                                                />

                                                <span className="w-16 text-right text-sm text-base-content/60">
                                                    {ratings.count.toLocaleString()}
                                                </span>
                                            </div>
                                        );
                                    })}

                            </div>

                        </div>

                    </div>
                </section>
            </div>
        </section>
    );
};

export default AppDetailsPage;