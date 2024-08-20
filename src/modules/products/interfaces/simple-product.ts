export interface ISimpleProduct {
    id:        number;
    name:      string;
    slug:      string;
    price:     number;
    image:     string;
    category:  ISimpleProductCategory;
    createdAt: Date;
}

interface ISimpleProductCategory {
    id:   number;
    name: string;
    slug: string;
}