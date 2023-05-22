//nodejsに標準搭載されているpathとfsをimport
import path from "path";
import fs from "fs";
//mdxが入っているフォルダのpath
export const postsPath = path.join(process.cwd(), "mdxPosts/pages");
//postsPathmdx形式のファイルを全て取得する
export const postsFileNames = fs
    .readdirSync(postsPath)
    .filter((fileName) => /\.mdx$/.test(fileName));
