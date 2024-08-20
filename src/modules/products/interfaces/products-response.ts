import { ISimpleProduct } from "./simple-product";
import { IPaginationLinks, IPaginationMeta } from "@/modules/shared";

export interface IProductsResponse {
    products: ISimpleProduct[];
    links:    IPaginationLinks;
    meta:     IPaginationMeta;
}