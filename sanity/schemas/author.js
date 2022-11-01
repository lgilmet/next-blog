export default {
    name: "author",
    type: "document",
    title: "Author",
    fields: [
        {
            name: "username",
            title: "Username",
            type: "string",
        },
        {
            name: "avatar",
            title: "Avatar",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "username",
            },
        },
    ],
    preview: {
        select: {
            title: "username",
            media: "avatar",
        },
    },
};
