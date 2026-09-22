import SearchFilter from '@/components/apps/SearchFilter';
import AppsCard from '@/components/shared/AppsCard';
import { getAllApps } from '@/lib/Apps';
import { IApps } from '@/types/apps.type';

const AppsPage = async () => {

    const apps = await getAllApps();


    return (
        <section className="bg-[#f5f5f5]">
            <div className="container mx-auto py-15">
                <h1 className="text-center text-5xl text-[#001931] font-bold">Our All Applications</h1>
                <p className="text-xl text-center text-[#627382] mt-5">Explore All Apps on the Market developed by us. We code for Millions</p>


                <div className="pt-10 pb-5 flex justify-between items-center">
                    <h4 className="text-xl font-semibold">Apps Found ({apps.length})</h4>

                    <SearchFilter apps={apps} />

                </div>

                <div className="pb-15 grid grid-cols-4 gap-4">
                    {
                        apps.map((app: IApps) => <AppsCard key={app.id} app={app}></AppsCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default AppsPage;