export class Filter {
  showOnlySale?: boolean;
  range?: number;
  filterBy?: Category;
}

export enum Category {
  MEN,
  WOMEN,
  SALE,
  ALL
}
