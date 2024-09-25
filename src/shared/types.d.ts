export type TProfile = {
    id: number,
    name: string,
    email: string,
    phone?: string,
    role: "administrator",
    active: boolean,
    createdAt?: Date,
    updatedAt?: Date,
    whoCreated?: string | number,
    whoCpdated?: string | number,
}

