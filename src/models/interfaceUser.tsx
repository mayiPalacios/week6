export interface Welcome {
  users: Iuser[];
  comments: Icomment[];
}

export interface Icomment {
  comment: string;
  post_id: number | string;
  user_id: number;
  name_user: string;
  last_name: string;
}

export interface Iuser {
  id?: number;
  name: string | undefined;
  lastName?: string;
  email: string | undefined;
  password?: string;
}

export interface Ilogin extends Iuser {
  id: number;
  name: string;
  email: string;
  password: string;
}
