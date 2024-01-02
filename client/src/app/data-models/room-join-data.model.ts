import { User } from "./user.interface";

export interface RoomJoinedData{
    user: User,
    roomId:string,
    members:User[]
}