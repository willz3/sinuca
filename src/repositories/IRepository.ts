export interface IRepository {
    save(object: any): Promise<void>;
    update(object: any): Promise<void>;
    findById(id: string): Promise<any>;
    findAll(): Promise<any[]>;
}