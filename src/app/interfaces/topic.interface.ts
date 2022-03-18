import { Forum } from "./forum.interface";
import { TopicKind } from "./topickind.interface";

export interface Topic {
    id: number,
    title: string,
    body: string,
    erased: boolean,
    date: Date,
    type: TopicKind
    id_forum: Forum,

}