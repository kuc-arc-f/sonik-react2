
//
const TosoIndex = {
    /**
     *
     * @param
     *
     * @return
     */  
    addItem : async function()
    {
console.log("addItem");
        try{
            let ret = false;
            let titleValue = "";
            let contentValue = "";
            const title = document.querySelector("#title");
            if(title) {
                titleValue = title.value;
            }
            const content = document.querySelector("#content");
            if(content) {
                contentValue = content.value;
            }
            const item = {
                title: titleValue,
                content: contentValue,
            }
//console.log("title=", titleValue);
//return;
            const body = JSON.stringify(item);		
            const res = await fetch("/api/todos/create", {
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
            console.error("Error, addItem");
            console.error(e);
            throw new Error('Error , addItem');
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
console.log("TosoIndex:v3");
            const button = document.querySelector('#btn_save');
            button.addEventListener('click', async () => {
              const result = await this.addItem();
console.log("result=", result);
              if(result === true) {
                location.reload();
              }
            });            
        } catch (e) {
          console.error(e);
          throw new Error('Error , startProc');
        }
    },
}
//
TosoIndex.startProc();
