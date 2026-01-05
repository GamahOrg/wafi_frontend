export class ProjectUnitCodeDto {
  id: string = '';
  projectModelId: string = '';
  unitTypeId: string = '';
  unitId: string = '';
  code: string = '';
  deliveryOn: string = '';
  licenseProjectId: string = '';
  price: number | null = null;
  subUnitTypeId: number = 0;
  floorNumber: number = 0;
  space: number = 0;
  buildingFlatSpace: number = 0;
  unitFacilities!: string | null;
  unitLandShare: number = 0;
  unitShareOfCommonAreas: number = 0;
  courtyardArea: number | null = null;
  unitFacilitiesIds!: number[] ;
  unitFacilitiesCount!: number;
  supportedPrice: number = 0;
  subUnitId: string | null = null;
}

export class ProjectUnitDto {
  id: string = '';
  code: string = '';
}
export class ProjectUnitCodesPaginationParams {
  unitId!: string;
  pageIndex!: number;
  pageSize!: number;
}
