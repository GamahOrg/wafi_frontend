export interface Zone {
  id: string;
  code: string;
  licenseProjectsId: string | null;
  numberOfBuilings: number;
  numberOfBlocks: number;
  correctedUnitRequestHeaderId?: string | null;
  canDelete?: boolean;
}
