import { BaseEntity } from './../../shared';

export class Job implements BaseEntity {
    constructor(
        public id?: number,
        public jobTitle?: string,
        public minSalary?: number,
        public maxSalary?: number,
        public employee?: BaseEntity,
        public tasks?: BaseEntity[],
    ) {
    }
}
