export class Player {
    public id: number;
    public uuid: string;

    public name: string;

    constructor(props: Omit<Player, 'id' | 'uuid'>, id?: string, uuid?: string) {
        Object.assign(this, props);
    }

}