import {Module} from "@nestjs/common";
import {InterviewController} from "../../application/controllers/interview.controller";
import {InterviewService} from "./interview.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {InterviewEntity} from "./interview.entity";
import {InterviewRepository} from "../../infrastructure/repositories/interview.repository";

@Module({
    imports: [TypeOrmModule.forFeature([InterviewEntity])],
    controllers: [InterviewController],
    providers: [InterviewService, InterviewRepository]
})
export class InterviewModule {}