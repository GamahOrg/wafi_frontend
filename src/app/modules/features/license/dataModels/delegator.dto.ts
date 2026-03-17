export interface DelegatorRequest {
  licenseProjectId: string;
  delegators: Delegator[];
}

export interface Delegator {
  delegatorId: string[];
  delegationType: DelegationType | number;
}

// Optional: Enum to make those delegation types readable
export enum DelegationType {
  TypeA = 1,
  TypeB = 2,
  TypeC = 3
}