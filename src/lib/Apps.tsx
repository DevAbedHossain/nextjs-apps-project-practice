export const getAllApps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APPS_SERVER_URL}/data.json`, { next: { revalidate: 5 } });

    if (!res.ok) {
        throw new Error(`Failed to fetch apps: ${res.status}`);
    }

    const data = await res.json();
    return data.apps;
}