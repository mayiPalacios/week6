export interface Welcome {
    users:    Iuser[];
    comments: Icomment[];
}

export interface Icomment {
    comment:   string;
    post_id:   number | string;
    user_id:   number;
    name_user: string;
    last_name: string;
}

export interface Iuser {
    id?:       number;
    name:     string;
    lastName?: string;
    email:    string;
    password: string;
}

export interface Ilogin extends Iuser{
    id:number,
    name:string,
    email: string;
    password: string;
}


