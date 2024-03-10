import type { MarkdownInstance } from 'astro';
import type { PostDataType } from './types/MarkDown'

export const formatPosts = (posts: MarkdownInstance<Record<string, any>>[]) => {
    return posts.map((post) => {
        return(post.frontmatter as PostDataType);
    }) as PostDataType[];
};