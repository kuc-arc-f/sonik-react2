//
const PageShow = {
    /**
     *
     * @param
     *
     * @return
     */  
    get : async function(db: D1Database, id: string)
    {
        try{
            const { results } = await db.prepare(`SELECT * FROM Customers WHERE id=${id}`).all();
// console.log(results);
            if(results.length < 1) {
                console.error("Error, results.length < 1");
                throw new Error("Error, results.length < 1");
            }
            return results[0]; 
        } catch (e) {
            console.error("Error, get");
            console.error(e);
            throw new Error('Error , get');
        }
    },    
}
export default PageShow;