class Aplication{
    constructor(){
        this.listImoveis = new ListImoveis();
    }

    get clientName(){ return document.querySelector('input[name="clienteName"]').value; }
    get typeImovel(){ return document.querySelector('input[name="radio"]:checked').value; }
    get areaHouse(){ return  document.querySelector('input[name="areaHouse"]').value; }
    get saleImovel(){ return document.querySelector('input[name="radio2"]:checked').value; }

    get inputTagName() { return document.querySelector('input[name="clienteName"]'); }
    get inputTagAreaHouse() { return document.querySelector('input[name="areaHouse"]'); }

    get btnAdd(){ return document.querySelector('input[name="btnAdd"]'); }
    get removeModal() { return document.querySelector('section.remove_modal'); }
    get btnRemove() { return document.querySelector('div.btn_remove'); }
    get btnCloseRemove() { return document.querySelector('i.btn_close_remove'); }
    get listToRemove() { return document.querySelector('ul.list_to_remove'); }
    get elementsOfList() { return document.querySelectorAll('li.elementList'); }
    get deleteBtn() { return document.querySelector('input[name="deleteBtn"]'); }
    get sectionListImoveis(){ return document.querySelector('section.listImoveis'); }
    get newImovel() { return document.querySelectorAll('fieldset.newImovel'); }
    get icon_filter() { return document.querySelectorAll('li.filter_icon'); }

    get checkingExitsHabitatToRemove(){
        return this.listToRemove.children.length > 0 ? true : false;
    }

    start(){ 
        this.eventsAplication(); 
    }

    eventsAplication(){
        this.btnAdd.addEventListener('click', ()=>{
            
            if(this.dataValitator()){
                const imovel = new Imovel(this.clientName, this.typeImovel, this.areaHouse, this.saleImovel);
                imovel.insertingImovelIntoHTML();
                imovel.adaptingLegendColor();
                imovel.adaptingIcon();

                //Adicionando imoveis na lista
                this.listImoveis.populateList(imovel);
                this.clearForm();
            } else {
                alert('Dados Incorretos!');
            }   
        });

        this.btnRemove.addEventListener('click', () => {
            //Inserindo na modal
            this.listImoveis.setListIntoRemoveModal(this.listToRemove, this.listImoveis.randomFilter());
            this.checkingExitsHabitatToRemove ? this.openRemoveModal() : alert('Não há itens para remover!');
            
            this.checkedRadioOnClick();
        });

        this.btnCloseRemove.addEventListener('click', () => {
            this.closeRemoveModal();
            this.clearList();

            this.listImoveis.randomFilter().forEach(obj=>{
                let imovel = new Imovel(obj.clientName, obj.typeImovel, obj.houseArea, obj.saleImovel);
                imovel.insertingImovelIntoHTML();
                imovel.adaptingLegendColor();
                imovel.adaptingIcon();
            });
        });

        this.deleteBtn.addEventListener('click', () => {
            this.elementsOfList.forEach((element, indElement)=>{
                if(element.children[0].checked){
                    this.removeFromList(indElement, element.children[1].children[2].innerText);
                    this.removeFromModal(element);
                }
            });
        });

        //FILTER BY...
        this.icon_filter.forEach((icon, indIcon)=>{
            icon.addEventListener('click', () => {
                this.clearRemoveModal();
                this.settingBorderBottomFilter(indIcon);

                switch(indIcon){ 
                    case 0: //RANDOM
                        this.listImoveis.setListIntoRemoveModal(this.listToRemove, this.listImoveis.randomFilter());
                        break;
                    case 1: //HOUSE
                        this.listImoveis.setListIntoRemoveModal(this.listToRemove, this.listImoveis.houseFilter());
                        break;
                    case 2: //APARTAMENT
                        this.listImoveis.setListIntoRemoveModal(this.listToRemove, this.listImoveis.apartamentFilter());
                        break;
                }

                this.checkedRadioOnClick();
            });
        });
    }

    clearForm(){
        this.inputTagName.value = "";
        this.inputTagAreaHouse.value = "";
    }

    settingBorderBottomFilter(indIcon){
        for(let i=0; i<this.icon_filter.length; i++){
            i != indIcon ? this.icon_filter[i].classList.remove('border-b-2','border-first_yellow_color') : this.icon_filter[i].classList.add('border-b-2','border-first_yellow_color');
        }
    }

    removeFromList(checkedInd, typeImovel){
        let regex = typeImovel.replace(/([^a-z|A-Z])/g, "");
        let objToRemove;

        switch(regex.toUpperCase()){
            case 'APARTAMENTO':
                objToRemove = this.listImoveis.arrList.apartament[checkedInd];
                this.listImoveis.arrList.apartament.splice(this.listImoveis.arrList.apartament.indexOf(objToRemove) ,1);
                break;
            case 'CASA':
                objToRemove = this.listImoveis.arrList.house[checkedInd];
                this.listImoveis.arrList.house.splice(this.listImoveis.arrList.house.indexOf(objToRemove) ,1);
                break;
        }
    }

    removeFromModal(elementCheckedToRemove){
        this.listToRemove.removeChild(elementCheckedToRemove);
    }

    checkedRadioOnClick(){
        this.elementsOfList.forEach(element=>{
            element.addEventListener('click', () => {
                element.children[0].checked = !element.children[0].checked ? true : false;
            });
        });
    }

    clearRemoveModal(){
        this.elementsOfList.forEach(element=>{
            this.listToRemove.removeChild(element);
        });
    }

    clearList(){
        this.newImovel.forEach(imovel=>{
            this.sectionListImoveis.removeChild(imovel);
        });
    }

    closeRemoveModal() { 
        this.removeModal.classList.add('hidden');
        this.removeModal.classList.remove('flex');
        this.clearRemoveModal();
    }

    openRemoveModal() { 
        this.removeModal.classList.remove('hidden');
        this.removeModal.classList.add('flex');
     }

    dataValitator(){ 
        let boolResp = false;
        const areaHouse = parseInt(this.areaHouse);

        if(this.clientName != "" && isNaN(parseInt(this.clientName))){
            if(areaHouse != 0 && !isNaN(areaHouse)){
                boolResp = true;
            }
        }  

        return boolResp;
    }
}