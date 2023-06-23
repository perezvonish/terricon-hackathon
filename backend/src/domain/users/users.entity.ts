import {Column, Entity} from "typeorm";
import {BasicEntity} from "../../config/basic.entity";
import {UserRoles} from "../interfaces/user.roles";

@Entity()
export class UsersEntity extends BasicEntity {
    @Column()
    userName: string

    @Column()
    password: string

    @Column()
    phoneNumber: string

    @Column()
    phoneNumberVerification: boolean

    @Column()
    type: UserRoles

    @Column()
    birthDay: Date
}