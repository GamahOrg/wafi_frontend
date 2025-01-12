export interface CoreResponseDTO<T> {
    exception? : string;
    data?: T;
    isDone: boolean;
    message: string
}
