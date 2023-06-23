import {Module} from "@nestjs/common";
import {UsersController} from "../../application/controllers/users.controller";
import {UsersService} from "./users.service";
import {UsersRepository} from "../../infrastructure/repositories/users.repository";

@Module({
    imports: [],
    controllers: [UsersController],
    providers: [UsersService, UsersRepository],
    exports: []
})
export class UsersModule {}