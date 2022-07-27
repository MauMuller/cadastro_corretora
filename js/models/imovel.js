class Imovel{
    constructor(clientName, typeImovel, houseArea, saleImovel){
        this.clientName = clientName;
        this.typeImovel = typeImovel;
        this.houseArea = houseArea;
        this.saleImovel = saleImovel;
    }

    get listImoveis(){ return document.querySelector('section.listImoveis'); }
    get legendImovel(){ return document.querySelectorAll('legend.legendImovel'); }
    get iconImovel(){ return document.querySelectorAll('i.iconImovel'); }

    adaptingLegendColor(){
        this.legendImovel.forEach(legend=>{
            let text = legend.innerText.toUpperCase(); 

            switch(text){
                case 'DISPONÍVEL':
                    legend.classList.add('bg-first_green_color', 'shadow-shadow_disponivel');
                    break;
                case 'ALUGADO':
                    legend.classList.add('bg-first_red_color', 'shadow-shadow_alugado');
                break;
            }
        });
    }

    adaptingIcon(){
        this.iconImovel.forEach(icon => {
            let divParent = icon.parentNode;
            let textType = divParent.children[1].innerText;

            switch(textType){
                case 'Apartamento':
                    icon.classList.add('bi-building');
                    break;
                case 'Casa':
                    icon.classList.add('bi-house-door');
                    break;
            }
        });
    }

    insertingImovelIntoHTML(){
        this.listImoveis.innerHTML += `
                    <fieldset class="newImovel w-55rem bg-first_yellow_color shadow-lg p-10 rounded-lg select-none">
                        <legend class="legendImovel px-9 py-2 text-lg rounded-lg font-bold text-white">${this.saleImovel}</legend>
                        <ul class="flex gap-3 flex-row justify-center">
                            <li class="flex flex-col gap-3 items-center w-2/5">
                                <h2 class="border-b border-black text-center w-3/4 font-bold text-2xl">CLIENTE</h2>
                                <div class="h-40 bg-second_yellow_color w-full rounded-md shadow-md flex items-center justify-center">
                                    <p class="text-lg font-light p-1">${this.clientName}</p>
                                </div>
                            </li>
                            <li class="flex flex-col gap-3 items-center w-25%">
                                <h2 class="border-b border-black text-center w-3/4 font-bold text-2xl">ÁREA CASA</h2>
                                <div class="h-40 bg-second_yellow_color w-full rounded-md shadow-md flex items-center justify-center">
                                    <p class="text-lg font-light p-1">${this.houseArea} m²</p>
                                </div>
                            </li>
                            <li class="flex flex-col gap-3 items-center w-35%">
                                <h2 class="border-b border-black text-center w-3/4 font-bold text-2xl">TIPO</h2>
                                <div class="h-40 bg-second_yellow_color w-full rounded-md shadow-md flex items-center justify-center flex-col">
                                    <i class="bi iconImovel text-6xl font-black"></i>
                                    <p class="text-lg font-light p-1">${this.typeImovel}</p>
                                </div>
                            </li>
                        </ul>
                    </fieldset>                           
        `;
    }
}