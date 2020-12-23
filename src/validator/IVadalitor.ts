export interface IValidator {
    validate(object: any): Promise<void>;
    exists(object: any): Promise<void>;
}