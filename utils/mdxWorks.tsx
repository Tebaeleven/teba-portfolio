import path from "path";
import fs from "fs";

export const dir = path.join(process.cwd(), "mdxPosts/works");

export const postsDirectory = fs
    .readdirSync(dir)
    .filter((fileName) => fs.statSync(path.join(dir, fileName)).isDirectory())
    .map((directory) => ({
        directory,
        mdxFiles: fs
            .readdirSync(path.join(dir, directory))
            .filter((fileName) => /\.mdx$/.test(fileName)),
    }));
