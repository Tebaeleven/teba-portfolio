import ActivitiesList from "@/components/Activities/Activities"

export default function Activities() {
    return (
        <div className="bg-blue-100">
            <div className="mx-auto max-w-screen-lg	py-4 px-4 md:px-8 ">
                <div className="bg-white py-1 px-10 rounded-xl">
                    <ActivitiesList></ActivitiesList>
                </div>
            </div>
        </div>
    );
}
