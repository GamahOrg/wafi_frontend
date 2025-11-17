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
  unitFacilities: string = '';
  unitLandShare: number = 0;
  unitShareOfCommonAreas: number = 0;
  courtyardArea: number = 0;

}

export class ProjectUnitDto {
  id: string = '';
  code: string = '';
}
