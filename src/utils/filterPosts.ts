import type { MarkdownInstance } from "astro";

type filterSettings = {
    filterByTags?: string[];
    sortByDate?: boolean;
    limit: number;
};

type PostData = {
    title: string;
    date: string;
    description: string;
    image: {
        url: string;
        alt: string;
    };
    tags: string[];
};

export const filterPosts = (posts: MarkdownInstance<Record<string, any>>[], settings: filterSettings) => {
    const filteredPosts = posts.reduce((acc, post) => {
        const postData = post.frontmatter as PostData;
        if (settings.filterByTags) {
            const hasTag = settings.filterByTags.some((tag) => postData.tags.includes(tag));
            if (!hasTag) return acc;
        }

        acc.push(post);
        return acc;
    }, [] as MarkdownInstance<Record<string, any>>[]);

    if (settings.sortByDate) {
        filteredPosts.sort((a, b) => {
            const aDate = new Date((a.frontmatter as PostData).date);
            const bDate = new Date((b.frontmatter as PostData).date);
            return bDate.getTime() - aDate.getTime();
        });
    } else
        filteredPosts.sort(() => {
            return Math.random() - 0.5;
        });  

    return filteredPosts.slice(0, settings.limit);
};