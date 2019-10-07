import { Controll } from "./control.model";

export class Quiz {
    key: string;
    label: string;
    required: boolean;
    controlType: string;
    options:Controll[];
}