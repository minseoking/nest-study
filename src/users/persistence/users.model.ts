export interface User {
    id : string,
    title: string,
    description: string,
    status :UserStatus,
}

export enum UserStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
}
