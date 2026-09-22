import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <main className="min-h-[70vh] flex items-center justify-center px-4 py-16">
            <div className="text-center max-w-xl">
                {/* Icon */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-error/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z" />
                    </svg>
                </div>
                {/* Error Code */}
                <p className="text-sm font-semibold uppercase tracking-widest text-primary"> App Not Found </p>
                {/* Heading */}
                <h1 className="mt-3 text-4xl font-bold md:text-5xl"> We couldn&apos;t find this app </h1>
                {/* Description */}
                <p className="mt-4 text-base-content/60 md:text-lg"> The app you are looking for may have been removed, renamed, or the link might be incorrect. </p>
                {/* Actions */}
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link href="/" className="btn btn-primary"> Back to Home </Link>
                    <Link href="/apps" className="btn btn-outline"> Explore Apps </Link>
                </div>
                {/* Small message */}
                <p className="mt-8 text-sm text-base-content/40"> Try searching for another app from the apps page. </p>
            </div>
        </main>
    );
};

export default NotFoundPage;