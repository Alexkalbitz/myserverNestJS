import { ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';
export declare class GlobalErrorFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
