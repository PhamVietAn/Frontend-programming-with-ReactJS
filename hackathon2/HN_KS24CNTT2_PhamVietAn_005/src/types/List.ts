export interface List {
    name: string;
    location: string;
    status: 'Hoạt động' | 'Ngừng hoạt động';
}

export type ListStatus = 'Hoạt động' | 'Ngừng hoạt động';

export interface ListFormData {
    name: string;
    location: string;
    status: ListStatus;
}