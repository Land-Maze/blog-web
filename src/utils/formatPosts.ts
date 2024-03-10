import type { MarkdownInstance } from 'astro';
import type { PostData } from './types/MarkDown'

export const formatPosts = (posts: MarkdownInstance<Record<string, any>>[]) => {
    return posts.map((post) => {
        return(post.frontmatter as PostData);
    }) as PostData[];
};