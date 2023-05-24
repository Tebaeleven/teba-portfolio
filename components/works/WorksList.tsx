import WorksCard from "@/components/Works/WorksCard"

export default function WorksList({ posts}) {
    return (
        <>
                {posts.map((post) => (
                    <WorksCard post={post} key={post.slug}></WorksCard>
                ))}
        </>
    );
}