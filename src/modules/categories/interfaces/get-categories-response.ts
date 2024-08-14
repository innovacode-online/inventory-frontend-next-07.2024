import { ICategory } from "./category";
import { IPaginationLinks, IPaginationMeta } from "@/modules/shared";

export interface ICategoriesResponse {
    categories: ICategory[];
    links:      IPaginationLinks;
    meta:       IPaginationMeta;
}