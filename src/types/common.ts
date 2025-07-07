/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { USER_ROLE } from "./roles.constants";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

export type IMeta = {
  limit?: number;
  page?: number;
  total?: number;
};

export type User_role = keyof typeof USER_ROLE;

export interface DrawerItems {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: DrawerItems[];
}

// type to modify success response and error response according to the user request
export type ISuccessResponse = {
  data: any;
  meta: IMeta;
};

export type IErrorResponse = {
  statusCode: number;
  message: string;
  errorMessage: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};
