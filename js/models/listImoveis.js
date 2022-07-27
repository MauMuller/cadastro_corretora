class ListImoveis{
    constructor(){
        this.arrList = { 
            apartament: [],
            house: []
        };
    }

    populateList(imovel){
        let typeImovelUpper = imovel.typeImovel.toUpperCase();

        switch(typeImovelUpper){
            case 'APARTAMENTO':
                this.arrList.apartament.push(imovel);
                break;
            case 'CASA':
                this.arrList.house.push(imovel);
            break;
        }
    }


    setListIntoRemoveModal(listToRemove, filter){
        this.templateList(listToRemove, filter);
    }

    randomFilter(){
        const uniqueArr = [];

        if(this.arrList.apartament.length > 0 || this.arrList.house.length > 0){
            let contArr = this.arrList.apartament.length > this.arrList.house.length ? this.arrList.apartament.length : this.arrList.house.length;
            

            for(let i=0; i<contArr; i++){
                if(this.arrList.apartament[i] != undefined){
                    uniqueArr.push(this.arrList.apartament[i]);
                }

                if(this.arrList.house[i] != undefined){
                    uniqueArr.push(this.arrList.house[i]);
                }
            }
        }
        return uniqueArr;
    }

    houseFilter(){
        const uniqueArr = [];

        if(this.arrList.house.length > 0){
            this.arrList.house.forEach(house=>{
                uniqueArr.push(house);
            });
        }

        if(this.arrList.apartament.length > 0){
            this.arrList.apartament.forEach(apartament=>{
                uniqueArr.push(apartament);
            });
        }
        
        return uniqueArr;
    }

    apartamentFilter(){
        const uniqueArr = [];

        if(this.arrList.apartament.length > 0){
            this.arrList.apartament.forEach(apartament=>{
                uniqueArr.push(apartament);
            });
        }

        if(this.arrList.house.length > 0){
            this.arrList.house.forEach(house=>{
                uniqueArr.push(house);
            });
        }
        
        return uniqueArr;
    }

    templateList(listToRemove, arrayList){
        arrayList.forEach(obj=>{
            const saleImovelUpper = obj.saleImovel.toUpperCase();

            switch(saleImovelUpper){
                case 'DISPONÍVEL':
                    listToRemove.innerHTML += 
                    `
                        <li class="elementList flex flex-row items-center justify-between shadow-shadow_default shadow-second_green_color rounded-md p-5 cursor-pointer" title="${obj.saleImovel}">
                            <input type="checkbox" name="checkboxRemove">

                            <div class="flex flex-row justify-between w-80%">
                                <p>${obj.clientName}</p>
                                <p>${obj.houseArea} m²</p>
                                <p>${obj.typeImovel}</typeImovelp>
                            </div>
                        </li>
                    `;
                    break;

                case 'ALUGADO':
                    listToRemove.innerHTML += 
                    `
                        <li class="elementList flex flex-row items-center justify-between shadow-shadow_default shadow-second_red_color rounded-md p-5 cursor-pointer" title="${obj.saleImovel}">
                            <input type="checkbox" name="checkboxRemove">

                            <div class="flex flex-row justify-between w-80%">
                                <p>${obj.clientName}</p>
                                <p>${obj.houseArea} m²</p>
                                <p>${obj.typeImovel}</typeImovelp>
                            </div>
                        </li>
                    `;
                    break;
            }
        });
    }

}