import { businessTypes, userRole } from "./businestypes";
export const validRoles : string[] = userRole.map(valid => valid.role)
export const validStoreTypes : string[] = businessTypes.map(valid => valid.type)
