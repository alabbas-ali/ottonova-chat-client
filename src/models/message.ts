export interface Message {
	author: string
	message: string
}

export interface MessageWithTime extends Message {
	time: Date
	key: number
}

export interface MessageCollection {
	[key: string]: MessageWithTime
}
