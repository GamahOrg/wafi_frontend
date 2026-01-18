

import {
  DeedHeaderProjectDataDto,
  LicenseProjectInstantDeedResponseDto,
} from '../../real-estate-contributions-license/dataModels/license-project-instant-deed-response-dto';
import { ArchitecturalDesignFilesDto } from '../dataModels/architectural-design-files.dto';
import { ConstructionLicenseDto } from '../dataModels/construction-license.dto';
import { ProjectSubUnitDto } from '../dataModels/project-sub-unit.dto';
import type { ProjectUnitCodeDto } from '../dataModels/project-unit-code.dto';
import {
  ProjectUnit,
  SysLicenseProjectBuildingBlockTypeDto,
  type licenseProjectModels,
} from './project-units';

export interface UnitCorrectionModel {
  deedsTabData: DeedsTabData;
  constructionLicensesTabData: ConstructionLicenseDto[];
  zonesAndBlocksTabData: ZonesAndBlocksTabData;
  unitTypesAndCodesTabsData: UnitTypesTabData;
  licenseProjectDesignFilesTabData: ArchitecturalDesignFilesDto;
}

export interface DeedsTabData {
  deedHeaderProjectDataDto?: DeedHeaderProjectDataDto;
  deeds: LicenseProjectInstantDeedResponseDto[];
  isUnit:boolean
  isPrevious: boolean;
}


export interface correctionUnitsModel {
  zones: Zone[];
  blocks: Unit[];
  licenseProjectSubUnits: ProjectSubUnitDto[];
  licenseProjectModels: licenseProjectModels[];
  licenseProjectSubUnitsListCodes: ProjectUnitCodeDto[];
  licenseProjectDesignFiles:ArchitecturalDesignFilesDto;
  deedsData: DeedsTabData;
  constructionLicensesData: ConstructionLicenseDto[];
}


export interface ZonesAndBlocksTabData {
  zones: Zone[];
  blocks: Unit[];

}

export interface Zone {
  id: string;
  licenseProjectsId: string | null;
  code: string;
  numberOfBuilings: number;
  numberOfBlocks: number;
  isPrevious: boolean;
}

export interface Unit extends ProjectUnit {
  unitType: UnitType;
  buildingBlockType?: SysLicenseProjectBuildingBlockTypeDto | null;
  codeList?: UnitCode[];
  isPrevious: boolean;
}

interface UnitCode {
  id: string;
  projectModelId: string;
  unitTypeId: string;
  unitId: string;
  subUnitId: string | null;
  code: string;
  deliveryOn: string;
  price: number;
  space: number;
  floorNumber: number;
  subUnitTypeId: number;
  buildingFlatSpace: number;
  unitFacilities: string;
  unitLandShare: number;
  unitShareOfCommonAreas: number;
  courtyardArea: number;
  unitFacilitiesIds: number[];
  unitFacilitiesCount: number;
  supportedPrice: number;
}

export interface UnitTypesTabData {
  unitTypes: ProjectSubUnitDto[];
}

interface UnitType {
  id: string;
  name: string;
}


export const mockedData: UnitCorrectionModel = {
  deedsTabData: {
    isUnit:true,
    isPrevious: true,
    deedHeaderProjectDataDto: {
      cityName: 'Riyadh',
      neighborhoodName: 'Al Yasmin',
      projectAreaDeedAmount: 12000,
      constructionAreaAmount: 9500,
      qualificationDegree: 85,
      isQualifaictionDegreeValid: false,
      requiredQualificationDegree:0,
      totalUnit: 120,
      id: 'deed-tab-1',
    },
    deeds: [
      {
        id: '3a88d6c9-4e80-4b30-8ed6-6b2d6c8a57a2',
        deedNumber: '620707008516',
        deedDate: '12-12-1446',
        ownersCount: 1,
        constructionLicenseNumber: null,
        integrationTypeId: 0,
        licenseProjectConstructionLicenseType: null,
        licenseProjectConstructionLicenseTypeId: null,
        licenseProjectNatureTypeId: null,
        isVerifiedByIntegration: false,
      },
      {
        id: '925632ec-8e87-454a-929f-be662f83fb6f',
        deedNumber: '620707008516',
        deedDate: '1-1-1440',
        ownersCount: 1,
        constructionLicenseNumber: null,
        integrationTypeId: 1,
        licenseProjectConstructionLicenseType: null,
        licenseProjectConstructionLicenseTypeId: null,
        licenseProjectNatureTypeId: null,
        isVerifiedByIntegration: false,
      },
    ],
  },

  constructionLicensesTabData: [
    {
      licenseProjectsId: '46e71b7f-7f3d-447a-889e-662caef9f5b3',
      issueOn: null,
      licenseFileId: '23fe5135-697a-42fe-82ec-3f0594e32b57',
      licenseNumber: '',
      landTotalSpace: 0,
      constructionLicenseType: 1,
      licenseFile: {
        fileDescription: 'Tempelate.xlsx',
        filePath: 'Resources\\Files\\23fe5135-697a-42fe-82ec-3f0594e32b57.xlsx',
        fileType: 'xlsx',
        id: '23fe5135-697a-42fe-82ec-3f0594e32b57',
      },
      id: '2cb963d3-ea90-4b3f-9d4b-a6b4e05adca6',
      before7: false,
      isPrevious: true,
    },
  ],

  zonesAndBlocksTabData: {
    zones: [
      {
        isPrevious: true,
        licenseProjectsId: '46e71b7f-7f3d-447a-889e-662caef9f5b3',
        code: '1',
        numberOfBuilings: 1,
        numberOfBlocks: 1,
        id: '18438f41-80a4-473a-8646-60b8230d8714',
      },
      {
        isPrevious: true,
        licenseProjectsId: '46e71b7f-7f3d-447a-889e-662caef9f5b3',
        code: '2',
        numberOfBuilings: 0,
        numberOfBlocks: 0,
        id: '691fe914-87dc-42d3-a3cc-a3c2becaca82',
      },
    ],

    blocks: [
      {
        zoneId: '18438f41-80a4-473a-8646-60b8230d8714',
        unitTypeId: '4942c19e-2aab-497d-a04f-3e694d32a9f5',
        code: '1',
        stageNumberId: '9c2da0ba-4197-4744-9c7f-c87c9fb9284f',
        constructionStartOn: '2025-12-02T11:02:20',
        constructionEndOn: '2025-12-23T11:02:20',
        licenseProjectsId: '00000000-0000-0000-0000-000000000000',
        buildingBlockTypeId: 4,
        unitTypeName: 'عمارة',
        stageNumber: 'اولي',
        designFileId: 'a105c45b-dc30-495a-b527-17ff2e42a145',
        designFile: {
          fileDescription: 'architectural_-_annotation_scaling_and_multileaders.dwg',
          filePath: 'Resources\\Files\\a105c45b-dc30-495a-b527-17ff2e42a145.dwg',
          fileType: 'dwg',

          id: 'a105c45b-dc30-495a-b527-17ff2e42a145',
        },
        licenseProjectDeedId: '3a88d6c9-4e80-4b30-8ed6-6b2d6c8a57a2',
        buildingBlockType: {
          name: 'مجمع تجارى',
          isBuilding: true,
          isBlock: true,
          isLands: false,
          id: 4,
        },
        licenseProjectSubUnits: [
          {
            typeName: 'شقة وملحق علوي',
            licenseProjectUnitId: '55dd2613-c94e-4d49-9132-28e9911ebee9',
            subUnitTypeId: 17,
            subUnitCount: 5,
            licenseProjectsId: null,
            subUnitType: {
              unitTypeId: '00000000-0000-0000-0000-000000000000',
              name: 'شقة وملحق علوي',
              id: 17,
            },
            licenseProjectModels: [],
            id: 'c68f7cbc-acc0-4511-acc0-52357b04593b',
            isPrevious: false
          },
        ],
        licenseProjectSubUnitsListCodes: [],
        unitType: {
          name: 'عمارة',
          id: '4942c19e-2aab-497d-a04f-3e694d32a9f5',
        },
        id: '55dd2613-c94e-4d49-9132-28e9911ebee9',
        isPrevious: false
      },
      {
        zoneId: '18438f41-80a4-473a-8646-60b8230d8714',
        unitTypeId: '16075af0-4ac1-4649-8728-8c1672c58660',
        code: '2',
        stageNumberId: '2a904623-2096-44ef-ab15-8d8deb4f6cc0',
        constructionStartOn: '2025-12-17T11:02:20',
        constructionEndOn: '2025-12-29T11:02:20',
        licenseProjectsId: '00000000-0000-0000-0000-000000000000',
        buildingBlockTypeId: 1,
        unitTypeName: 'بلوك',
        stageNumber: 'رابعة',
        designFileId: '1e3b432d-8d79-45fd-a0f4-b9cbd9f0fd95',
        designFile: {
          fileDescription: 'architectural_-_annotation_scaling_and_multileaders.dwg',
          filePath: 'Resources\\Files\\1e3b432d-8d79-45fd-a0f4-b9cbd9f0fd95.dwg',
          fileType: 'dwg',

          id: '1e3b432d-8d79-45fd-a0f4-b9cbd9f0fd95',
        },
        licenseProjectDeedId: '925632ec-8e87-454a-929f-be662f83fb6f',
        buildingBlockType: {
          name: 'فلة',
          isBuilding: true,
          isBlock: false,
          isLands: false,
          id: 1,
        },
        licenseProjectSubUnits: [
          {
            typeName: 'دور وملحق علوي',
            licenseProjectUnitId: 'e29edf5a-8e57-4d3f-93da-3ecaa59f2edb',
            subUnitTypeId: 15,
            subUnitCount: 5,
            licenseProjectsId: null,
            subUnitType: {
              unitTypeId: '00000000-0000-0000-0000-000000000000',
              name: 'دور وملحق علوي',
              id: 15,
            },
            licenseProjectModels: [],
            id: '2d803147-b4b4-417a-bcca-a947008fcd9d',
            isPrevious: false
          },
        ],
        licenseProjectSubUnitsListCodes: [],
        unitType: {
          name: 'بلوك',
          id: '16075af0-4ac1-4649-8728-8c1672c58660',
        },
        id: 'e29edf5a-8e57-4d3f-93da-3ecaa59f2edb',
        isPrevious: false
      },
    ],

  },

  unitTypesAndCodesTabsData: {
    unitTypes: [
      {
        licenseProjectUnitId: '55dd2613-c94e-4d49-9132-28e9911ebee9',
        subUnitTypeId: 17,
        subUnitCount: 5,
        licenseProjectsId: null,
        subUnitType: null,
        isPrevious: true,
        id: 'c68f7cbc-acc0-4511-acc0-52357b04593b',

        licenseProjectModels: [
          {
            licenseProjectSubUnitId: 'c68f7cbc-acc0-4511-acc0-52357b04593b',
            name: 'testing',
            space: 0,
            buildingFlatSpace: 0,
            properties: 'fafas',
            unitsCount: 3,
            subUnitTypeId: 0,
            licenseProjectSubUnit: null,
            licenseProjectModelDesignFiles: [
              {
                modelId: '95eb1044-bb5d-44f1-a843-f36e350b72f4',
                designFileId: '6b70f69d-66cf-4158-978c-179bc95a21f7',
                designFile: {
                  fileDescription: '11.png',
                  filePath:
                    'Resources\\Files\\6b70f69d-66cf-4158-978c-179bc95a21f7.png',
                  fileType: 'png',
                  id: '6b70f69d-66cf-4158-978c-179bc95a21f7',
                },
                id: '07161ebe-a6c4-4f17-844f-bb6eb948f730',
              },
            ],
            id: '95eb1044-bb5d-44f1-a843-f36e350b72f4',
          },
        ],
        codeList: [
          {
            projectModelId: '95eb1044-bb5d-44f1-a843-f36e350b72f4',
            unitTypeId: '16075af0-4ac1-4649-8728-8c1672c58660',
            unitId: '55dd2613-c94e-4d49-9132-28e9911ebee9',
            subUnitId: 'c68f7cbc-acc0-4511-acc0-52357b04593b',
            code: '1',
            deliveryOn: '2025-12-09T11:02:20',
            price: 4,
            space: 5,
            floorNumber: 0,
            subUnitTypeId: 17,
            buildingFlatSpace: 5,
            unitFacilities: '',
            unitLandShare: 6,
            unitShareOfCommonAreas: 5,
            courtyardArea: 0,
            unitFacilitiesIds: [2],
            unitFacilitiesCount: 1,
            supportedPrice: 3,
            id: '81d4f3a6-2217-4d7b-8397-5bb972998a69',
          },
        ],
      },
      {
        licenseProjectUnitId: 'e29edf5a-8e57-4d3f-93da-3ecaa59f2edb',
        subUnitTypeId: 15,
        subUnitCount: 5,
        licenseProjectsId: null,
        subUnitType: null,
        isPrevious: true,
        licenseProjectModels: [
          {
            licenseProjectSubUnitId: '2d803147-b4b4-417a-bcca-a947008fcd9d',
            name: 'testing2',
            space: 0,
            buildingFlatSpace: 0,
            properties: 'dfsf',
            unitsCount: 3,
            subUnitTypeId: 0,
            licenseProjectSubUnit: null,
            licenseProjectModelDesignFiles: [
              {
                modelId: 'ec0af0c6-9256-4b06-aa1a-ee1ebe9e8259',
                designFileId: '29335c92-b4b2-482d-a685-da5219e253f1',
                designFile: {
                  fileDescription: '11.png',
                  filePath:
                    'Resources\\Files\\29335c92-b4b2-482d-a685-da5219e253f1.png',
                  fileType: 'png',
                  id: '29335c92-b4b2-482d-a685-da5219e253f1',
                },
                id: '757f8fcf-f3e8-4132-9125-6a2625a048b9',
              },
            ],
            id: 'ec0af0c6-9256-4b06-aa1a-ee1ebe9e8259',
          },
        ],
        id: '2d803147-b4b4-417a-bcca-a947008fcd9d',
        codeList: [
          {
            projectModelId: 'ec0af0c6-9256-4b06-aa1a-ee1ebe9e8259',
            unitTypeId: '16075af0-4ac1-4649-8728-8c1672c58660',
            unitId: 'e29edf5a-8e57-4d3f-93da-3ecaa59f2edb',
            subUnitId: '2d803147-b4b4-417a-bcca-a947008fcd9d',
            code: '2',
            deliveryOn: '2025-12-02T22:00:00',
            price: 554,
            space: 31,
            floorNumber: 0,
            subUnitTypeId: 15,
            buildingFlatSpace: 554,
            unitFacilities: '',
            unitLandShare: 534,
            unitShareOfCommonAreas: 44,
            courtyardArea: 0,
            unitFacilitiesIds: [3],
            unitFacilitiesCount: 1,
            supportedPrice: 55,
            id: 'f6e4d897-dce2-44cc-86f1-fdaa26921aad',
          },
        ],
      },
    ],
  },

  licenseProjectDesignFilesTabData: {
    licenseProjectId: '46e71b7f-7f3d-447a-889e-662caef9f5b3',
    licenseProjectPlanAccordingApprovedStandardsFiles: [
      {
        isPrevious: true,
        licenseProjectsId: '46e71b7f-7f3d-447a-889e-662caef9f5b3',
        planFileId: '9c0d17fb-f6e9-4987-9af2-1581c88463bd',
        planFile: {
          fileDescription: '11.png',
          filePath:
            'Resources\\Files\\9c0d17fb-f6e9-4987-9af2-1581c88463bd.png',
          fileType: 'png',
          id: '9c0d17fb-f6e9-4987-9af2-1581c88463bd',
        },
        id: 'ec78917c-e477-48b9-b1cd-7f1f4fae2121',
      },
    ],
    licenseProjectDesignFiles: [
      {
        isPrevious: true,
        licenseProjectId: '46e71b7f-7f3d-447a-889e-662caef9f5b3',
        designFileId: 'd24ef1bb-583b-4e71-b308-e50f35a84d56',
        designFile: {
          fileDescription: 'فيجما.png',
          filePath:
            'Resources\\Files\\d24ef1bb-583b-4e71-b308-e50f35a84d56.png',
          fileType: 'png',
          id: 'd24ef1bb-583b-4e71-b308-e50f35a84d56',
        },
        id: '6e7f292c-aefc-47cd-9203-d647e9706a72',
      },
    ],
    id: '00000000-0000-0000-0000-000000000000',
  },
};
