import { PointsTable } from "../../../entities/PointsTable";
import { DefaultValidator } from "../../../validator/DefaultValidator";

export class AddTeamToGameValidator extends DefaultValidator {

    constructor(private pointsTable: PointsTable) {
        super(pointsTable);
    }

    //super não funciona fora do construtor

    async isValid(): Promise<void> {
        await this.maxTeamsInTable();
    }

    async maxTeamsInTable(): Promise<void> {
        if(this.pointsTable.teams.length > Number(process.env.MAX_TEAMS_IN_EACH_TABLE)) {
            throw new Error('The points table already have ten teams.');
        }
    }

}