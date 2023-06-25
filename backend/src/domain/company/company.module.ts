import {Module} from "@nestjs/common";
import {CompanyController} from "../../application/controllers/company.controller";
import {CompanyService} from "./company.service";

@Module({
    imports: [],
    controllers: [CompanyController],
    providers: [CompanyService]
})
export class CompanyModule {}