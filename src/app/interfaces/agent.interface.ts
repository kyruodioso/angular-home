export interface Agents {
    id:    number;
    name:  string;
    image: string;
    info:  string;
    data:  Data;
}

export interface Data {
    company: string;
    email:   string;
    phone:   number;
}