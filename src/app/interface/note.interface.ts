
export type TNote = {
    title: string,
    content: string,
    category: "personal" | "work" | "study" | "other",
    pinned: boolean,
    tag: {
        label: string,
        color: string
    }
}