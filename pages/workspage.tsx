import { useRouter } from "next/router";
import { useEffect } from "react";

function WorksPage() {
    const router = useRouter();

    // タグボタンをクリックしたときの処理
    const handleTagButtonClick = (tag) => {
        router.push({
            pathname: "/workspage",
            query: { ...router.query, tag },
        });
    };

    // スキルボタンをクリックしたときの処理
    const handleSkillButtonClick = (skill) => {
        router.push({
            pathname: "/workspage",
            query: { ...router.query, skill },
        });
    };

    useEffect(() => {
        // URLクエリの変更を監視するためのコード
        console.log(router.query);
    }, [router.query]);

    return (
        <div>
            <h1>Works Page</h1>
            <div>
                <h3>Tags:</h3>
                <button onClick={() => handleTagButtonClick("js")}>
                    JavaScript
                </button>
                <button onClick={() => handleTagButtonClick("python")}>
                    Python
                </button>
                <button onClick={() => handleTagButtonClick("java")}>
                    Java
                </button>
                {/* 他のタグボタン */}
            </div>
            <div>
                <h3>Skills:</h3>
                <button onClick={() => handleSkillButtonClick("frontend")}>
                    Frontend
                </button>
                <button onClick={() => handleSkillButtonClick("backend")}>
                    Backend
                </button>
                <button onClick={() => handleSkillButtonClick("database")}>
                    Database
                </button>
                {/* 他のスキルボタン */}
            </div>
        </div>
    );
}

export default WorksPage;
