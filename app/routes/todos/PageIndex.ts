//
const PageIndex = {
    /**
     *
     * @param
     *
     * @return
     */  
    getList : async function(db: D1Database)
    {
        try{
            const { results } = await db.prepare(`SELECT * FROM todos ORDER BY id DESC`).all();
// console.log(results);
            return results; 
        } catch (e) {
            console.error("Error, getList");
            console.error(e);
            throw new Error('Error , getList');
        }
    },    
}
export default PageIndex;