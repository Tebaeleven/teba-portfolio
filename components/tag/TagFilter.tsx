import clsx from "clsx";
import classes from "./TagFilter.module.css"
import Link from "next/link";
export default function TagFilter({ selectedTag, setSelectedTag, tags }) {
    return (
        <>
            {tags.map((tag) => (
                <Link
                    href={tag === "all" ? "/works" : "?skil=" + tag}
                    key={tag}
                >
                    <button
                        key={tag}
                        className={clsx(
                            classes.tagButton,
                            selectedTag === tag && classes.selected
                        )}
                        onClick={() => {
                            console.log("押された");
                            setSelectedTag(tag);
                        }}
                    >
                        {tag}
                    </button>
                </Link>
            ))}
        </>
    );
}
