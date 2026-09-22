import Link from "next/link";

const NotFoundPage = () => {
    return (
        <main className="min-h-screen bg-base-200 flex items-center justify-center px-6">
            <div className="text-center max-w-lg">
                {/* 404 */}
                <h1 className="text-8xl md:text-9xl font-extrabold text-primary">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-6 text-3xl md:text-4xl font-bold text-base-content">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-4 text-base md:text-lg text-base-content/60">
                    Sorry, the page you are looking for doesn&apos;t exist or may have
                    been moved.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link href="/" className="btn btn-primary px-8">
                        Back to Home
                    </Link>
                </div>

                {/* Small text */}
                <p className="mt-8 text-sm text-base-content/40">
                    Error code: 404
                </p>
            </div>
        </main>
    );
};

export default NotFoundPage;