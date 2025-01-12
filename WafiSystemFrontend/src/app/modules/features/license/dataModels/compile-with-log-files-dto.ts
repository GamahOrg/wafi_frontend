import { LicenseProcessingLogFileCreateUpdateDto } from "./license-processing-log-file-create-update-dto"

export class CompileWithLogFilesDto {
  requestId : string = ""
  notes : string = ""
  licenseProcessingLogFile : LicenseProcessingLogFileCreateUpdateDto[] = []
}
