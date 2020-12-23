import { IValidator } from "./IVadalitor";

export class DefaultValidator implements IValidator {

    constructor(private object: any) {
        
    }

    async validate(): Promise<void> {
        await this.exists(this.object);
    }

    async exists(object: any): Promise<void> {
        if(!object) {
            throw new Error(`Object doesn't exists`);
        }
        
    }

}