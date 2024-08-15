
export async function getData(id) {
    
    const response = await fetch (`http://localhost:3020/getOne/${id}`);

    if (!response.ok){

        throw new Error('Failed to fetch data')
    }
    
    return response.json();

}