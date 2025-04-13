import type { TokenResponse } from "./token-response.model";

export interface FullNafathLoginResponseDto {
    status: number;
    nafathLoginData: NafathLoginResponseDto;
    token:TokenResponse;
}

export interface NafathLoginResponseDto {
    transId: string;
    random: string;
}