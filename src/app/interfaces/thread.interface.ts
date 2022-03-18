import { Topic } from "./topic.interface";

export interface Thread {
    id: number,
    id_topic: Topic,
    body: string
}