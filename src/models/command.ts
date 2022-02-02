export enum CommandType {
	Date = 'date',
	Map = 'map',
	Rate = 'rate',
	Complete = 'complete',
}

export interface Command {
	type: CommandType,
	data: any,
}
