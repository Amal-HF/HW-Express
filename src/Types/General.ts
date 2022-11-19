export interface IPeople {
    id: string,
    name: string
}

export interface IGrade {
    id: string,
    grade: number
}

export interface ITask {
    id: string;
    title: string;
    description: string;
    status: string;
    deadline?: string;
}