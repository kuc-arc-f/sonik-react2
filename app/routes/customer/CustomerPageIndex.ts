//
const CustomerPageIndex = {
    /**
     *
     * @param
     *
     * @return
     */  
    addItem : async function()
    {
console.log("addItem");
return;
        try{
            let ret = false;
            let titleValue = "";
            const title = document.querySelector("#title");
            if(title) {
                titleValue = title.value;
            }
            const item = {
                title: titleValue,
                content: "",
            }
console.log("title=", titleValue);
            const body = JSON.stringify(item);		
            const res = await fetch("/api/customer/create", {
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
}
//
console.log("#CustomerPageIndex");
export default CustomerPageIndex;