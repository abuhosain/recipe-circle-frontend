import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

 export interface IUser {
  _id: string;
  name: string;
  email: string;
  userName: string;
  role: string;
  profilePicture: string;
}