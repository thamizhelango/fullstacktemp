import { BaseEntity } from './../../shared';

export const enum Language {
    'FRENCH',
    'ENGLISH',
    'SPANISH'
}

export class JobHistory implements BaseEntity {
    constructor(
        public id?: number,
        public startDate?: any,
        public endDate?: any,
        public language?: Language,
        public job?: BaseEntity,
        public department?: BaseEntity,
        public employee?: BaseEntity,
    ) {
    }
}
