import { NotFoundException } from '@nestjs/common';

export class MyErrorException extends NotFoundException {
    constructor(message?: string) {
        if (!message){
            super('My-exception: no message');
        } else {
            super(message)
        }
    }
}