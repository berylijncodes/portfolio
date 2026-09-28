import { links } from "./data"
import type { StaticImageData } from "next/image"

export type SectionName = (typeof links)[number]['name'];

export type ProjectStatus = "shipped" | "building" | "redesigning";

export type Project = {
    title: string;
    description: string;
    status: ProjectStatus;
    tags?: readonly string[];
    imageUrl?: StaticImageData;
    // Marks the project to be shown as the highlighted/full-width card
    flagship?: boolean;
};
