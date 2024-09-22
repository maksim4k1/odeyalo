import { ACCESS, type AccessRole } from "../config/access.config";
import { type HttpError } from "../config/api.config";

export const instanceofHttpError = (object: any): object is HttpError => {
  return "status" in object && "message" in object;
};

export function getRole(roleId: number = 0): AccessRole {
  if (roleId === 1) {
    return ACCESS.client;
  } else if (roleId === 2) {
    return ACCESS.psychologist;
  } else if (roleId === 3) {
    return ACCESS.hr;
  }

  return ACCESS.unauthorized;
}

export function getRoleId(role: AccessRole): 0 | 1 | 2 | 3 {
  if (role === ACCESS.client) {
    return 1;
  } else if (role === ACCESS.psychologist) {
    return 2;
  } else if (role === ACCESS.hr) {
    return 3;
  }

  return 0;
}
