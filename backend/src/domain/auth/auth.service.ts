import {Injectable} from "@nestjs/common";
import {UsersRepository} from "../../infrastructure/repositories/users.repository";

@Injectable()
export class AuthService {
    constructor(
        private readonly usersRepository: UsersRepository
    ) {}

    async login(data) {}

    async register(data) {}
}