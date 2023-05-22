import clsx from "clsx";
import classes from "./TagFilter.module.css"
export default function TagFilter({ selectedTag, setSelectedTag, tags }) {
    return (
        <>
            {tags.map((tag) => (
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
            ))}
        </>
    );
}
