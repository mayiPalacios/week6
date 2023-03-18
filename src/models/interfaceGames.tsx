export interface Iresults {
    id:number,
    background_image:string,
    name?:string,
}

export interface Iplatforms extends Iresults{
        id:number;
        background_image:string,
        name?:string,
        rating?:string,
        description?:string

}