import clsx from "clsx";
import classes from "@/components/tag/TagFilter.module.css";
import Link from "next/link";
export default function TagFilter({ selectedTag, setSelectedTag, tags }) {
    const tagKeys = Object.keys(tags); // オブジェクトのキーを配列として取得
    return (
        <>
            {tagKeys.map((tag) => (
                <Link href={tags[tag]} key={tag}>
                    <button
                        key={tag}
                        className={clsx(
                            classes.tagButton,
                            selectedTag === tags[tag] && classes.selected
                        )}
                        onClick={() => {
                            setSelectedTag(tags[tag]);
                        }}
                    >
                        <p className="font-bold">{tag}</p>
                    </button>
                </Link>
            ))}
        </>
    );
}