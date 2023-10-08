
console.log("ItemId=", ItemId);
//
const TestShow = {
    /**
     *
     * @param
     *
     * @return
     */  
    delete : async function()
    {
//console.log("#delete");
        try{
            let ret = false;
            const item = {
                id: ItemId,
            }
            const body = JSON.stringify(item);		
            const res = await fetch("/api/customer/delete", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},      
                body: body
            });
            const json = await res.json()
console.log(json);   
            if (res.status !== 200) {
                console.error("error, status <> 200");
                throw new Error(await res.text());
            }
            if (json.ret !==  "OK") {
                console.error("Error, json.ret <> OK");
                return ret;
            }
            ret = true;
            return ret;
        } catch (e) {
            console.error("Error, delete");
            console.error(e);
            throw new Error('Error , delete');
        }
    },    
    /**
     * 
     * @param
     *
     * @return
     */    
    startProc: async function(){
        try{
console.log("TestShow:v1");
            const button = document.querySelector('#btn_delete');
            button.addEventListener('click', async () => {
              const result = await this.delete();
console.log("result=", result);
              if(result === true) {
                location.href= "/test3";
              }
            });            
        } catch (e) {
          console.error(e);
          throw new Error('Error , startProc');
        }
    },
}
//
TestShow.startProc();
