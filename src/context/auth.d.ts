export interface IUser {
    name?: string,
    email: string,
    password: string,
}

export interface ISession {
    email: string;
    expiredAt: Date;
}

export type AuthContextType = {
    users: IUser[];
    session: ISession | null;
    createUser: (user: IUser) => void;
    login: (email: string, password: string) => boolean;
    logout: () => void;
}

export type AuthContextStorageType = {
    users: IUser[];
    session: ISession | null;
}