import type { MarkdownInstance } from "astro";
import type { PostDataType } from './types/MarkDown'

type filterSettingsType = {
    filterByTags?: string[];
    sortByDate?: boolean;
    limit: number;
  };

export const filterPosts = (posts: MarkdownInstance<Record<string, any>>[], settings: filterSettingsType) => {
    const filteredPosts = posts.reduce((acc, post) => {
        const postData = post.frontmatter as PostDataType;
        if (settings.filterByTags) {
            const hasTag = settings.filterByTags.some((tag) => postData.tags.includes(tag));
            if (!hasTag) return acc;
        }

        acc.push(post);
        return acc;
    }, [] as MarkdownInstance<Record<string, any>>[]);

    if (settings.sortByDate) {
        filteredPosts.sort((a, b) => {
            const aDate = new Date((a.frontmatter as PostDataType).date);
            const bDate = new Date((b.frontmatter as PostDataType).date);
            return bDate.getTime() - aDate.getTime();
        });
    } else
        filteredPosts.sort(() => {
            return Math.random() - 0.5;
        });  

    return filteredPosts.slice(0, settings.limit);
};