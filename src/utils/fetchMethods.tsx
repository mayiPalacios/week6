
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
  newbody:T,
  config?:RequestInit,
): Promise<U>{
  console.log(JSON.stringify(newbody));
  const init = {method:'post', body:JSON.stringify(newbody),...config};
  console.log(init);
  return http<U>(path,init);
}
