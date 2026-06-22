export interface RequestNotes {
  createdOn: Date;
  employeeName: string;
  workflowDetailsId: string;
  departmentName: string;
  notes: string;
  isFinished: boolean;
  finishedOn: null | Date;
  isWithNotes: boolean;
  id: string;
  workflowDetails: WorkflowDetailsDto;
}

export interface WorkflowDetailsDto {
  id: string;
  stepName: string;
}