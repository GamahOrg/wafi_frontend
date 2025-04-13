export class StaffTypes {
  static firstSection: { header: string, id: string }[] = [
    {header: 'مدير المشروع', id: 'superviseStaffPM'},
    {header: 'مهندس انشائي', id: 'superviseStaffStructuralEngineer'},
    {header: 'مهندس معمارى', id: 'superviseStaffArchitectEngineer'},
    {header: 'مهندس ميكانيكا', id: 'superviseStaffMechanicalEngineer'},
    {header: 'مهندس كهرباء', id: 'superviseStaffElectricalEngineer'},
    {header: 'مهندس مساحة', id: 'superviseStaffSurveyEngineer'},
  ];
  static secondSection: { header: string, id: string }[] = [
    {header: 'مهندس انشائي', id: 'assistantStaffStructuralEngineer'},
    {header: 'مهندس معمارى', id: 'assistantStaffArchitectEngineer'},
    {header: 'مهندس ميكانيكا', id: 'assistantStaffMechanicalEngineer'},
    {header: 'مهندس كهرباء', id: 'assistantStaffElectricalEngineer'},
    {header: 'مهندس مساحة', id: 'assistantStaffSurveyEngineer'},
  ];
  static thirdSection: { header: string, id: string }[] = [
    {header: 'اخصائى ضبط وثائق', id: 'otherSpecialtiesDocumentControlSpecialist'},
    {header: 'اخصائى صحة وسلامة', id: 'otherSpecialtiesHealthAndSafetySpecialist'},
    {header: 'مهندس جودة', id: 'otherSpecialtiesQualityEngineer'},
    {header: 'مهندس تخطيط', id: 'otherSpecialtiesPlanningEngineer'},
    {header: 'حاصر كميات', id: 'otherSpecialtiesBlockQuantities'},

  ];
}
