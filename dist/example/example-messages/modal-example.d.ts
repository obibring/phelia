/// <reference types="react" />
import { PheliaMessageProps, PheliaModalProps } from "../../core";
export declare function MyModal({ useState }: PheliaModalProps): JSX.Element;
declare type Props = {
    name: string;
};
export declare function ModalExample({ useModal, useState, props, }: PheliaMessageProps<Props>): JSX.Element;
export {};
