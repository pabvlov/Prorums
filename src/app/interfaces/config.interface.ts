import { Advertisement } from "./advertisement.interface";
import { Changelog } from "./changelog.interface";

export interface Config {
    nombre_foro: string,
    id_advertisement: Advertisement,
    id_changelog: Changelog,
    logo: string,
    background: string
}