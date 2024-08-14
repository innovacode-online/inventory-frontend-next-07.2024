export interface IPaginationLinks {
    first: string;
    last:  string;
    prev:  null;
    next:  null;
}

export interface IPaginationMeta {
    current_page: number;
    from:         number;
    last_page:    number;
    links:        IPaginationLink[];
    path:         string;
    per_page:     number;
    to:           number;
    total:        number;
}

export interface IPaginationLink {
    url:    null | string;
    label:  string;
    active: boolean;
}