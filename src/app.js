export default class BudgetTracker{
    constructor(querySelectorString){
        this.root = document.querySelector(querySelectorString);
        this.root.innerHtml = BudgetTracker.html();

        this.root.querySelector(".new-entry").addEventListener("click", ()=>{
            this.onNewEntryBtnClick();
        })
    }
    static html() {

    }

    static entryHtml(){

    }

    load(){

    }

    udateSummary(){

    }

    save(){

    }

    addEntry(entry = {}){

    }

    getEntryRows(){

    }

    onNewEntryBtnClick(){

    }

    onDeleteEntryBtnClick(){

    }
}