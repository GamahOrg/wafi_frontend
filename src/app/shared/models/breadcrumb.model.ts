export interface BreadcrumbOption {
  label: string;
  index: number;
}

export interface Breadcrumb {
  label: string;
  url: string;
  isSelectable?: boolean;
  options?: BreadcrumbOption[];
  activeOptionIndex?: number;
}
