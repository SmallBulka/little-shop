function render(){

    const productsStore = localStorageUtil.getProducts();
    headerPage.render(productsStore.length);
    productsPage.render();
}

spinnerPage.render();


let CATALOG =[];
//https://api.jsonserve.com/MN6DKY


fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;

        setTimeout(() => {
            spinnerPage.handlecClear();
            render();
        },1000);

        
    })
    .catch(error => {
        spinnerPage.handlecClear();
        errorPage.render();
    });