import { UserType } from "./UserType";
import { Permission } from "./Permission";

export type User = {
    id: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    userType: UserType;
    permissions: Permission[];
  };
  