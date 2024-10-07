class Header {
    handlerOpenShoppingPage(){
        shoppingPage.render();

    }



    render(count){
        const html = `
            <div class="header-container">
                <div class="header-conter" onclick="headerPage.handlerOpenShoppingPage();">
                    🛒 ${count}
                </div>
            </div>
        
        `;

        ROOT_HEADER.innerHTML = html;
    }
}



const headerPage = new Header();


