import React from "react";
import { ITaskProps } from "../Task/types";

export interface ICreateTaskModalProps {
    isOpen: boolean;
    onRequestClose: () => void
    tasks: ITaskProps[]
    setTasks: React.Dispatch<React.SetStateAction<ITaskProps[]>>
}