
async function http<T>(path:string,config:RequestInit): Promise<T>{
  const request = new Request(path,config);
  const response = await fetch(request);
  if(!response.ok){
    throw new Error('could not load info');
  }
  return response.json().catch(()=>{throw new Error('Error while getting response')});
}

export async function get<T>(path:string,config?:RequestInit):Promise<T>{
    const init = {method: 'get',...config};
    return http<T>(path,init);
}

export async function post<T,U>(
  path:string,
  body:T,
  config?:RequestInit,
): Promise<U>{
  const init = {method:'post', body:JSON.stringify(body),...config};
  return http<U>(path,init);
}
