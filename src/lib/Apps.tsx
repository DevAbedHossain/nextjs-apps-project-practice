export const getAllApps = async () => {
    const res = await fetch("http://localhost:3000/data.json", { next: { revalidate: 20 } });
    const data = await res.json();
    return data.apps;
}