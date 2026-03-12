export interface QualificationCertifiedEngineerCourseDto {
  id?: string;
  qualificationCertifiedEngineerId: string;
  courseId: number;
  courseNameInArabic: string;
  courseNameInEnglish: string;
  attendCourseDate?: string;
  statusId?: number;
  statusDescription?: string;
}
