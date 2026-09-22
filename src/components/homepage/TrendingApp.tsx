import Link from 'next/link';
import AppsCard from '../shared/AppsCard';
import { IApps } from '@/types/apps.type';
import { getAllApps } from '@/lib/Apps';


const TrendingApp = async () => {

    const apps = await getAllApps();

    return (
        <section className="bg-[#f5f5f5]">
            <div className="container mx-auto py-15">
                <h1 className="text-5xl font-bold text-center text-[#001931]">Trending App</h1>
                <p className="text-xl text-[#627382] text-center mt-5">Explore All Trending Apps on the Market developed by us</p>

                <div className="py-15 grid grid-cols-4 gap-4">

                    {
                        apps.slice(0, 8).map((app: IApps) => <AppsCard key={app.id} app={app} />)
                    }

                </div>

                <div className="text-center">
                    <Link href="/apps" className="btn bg-linear-to-tl from-[#9F62F2] to-[#632EE3] text-white px-10 py-6 text-[16px] font-semibold hover:from-[#632EE3] hover:to-[#9F62F2]">Show All</Link>
                </div>
            </div>
        </section>
    );
};

export default TrendingApp;