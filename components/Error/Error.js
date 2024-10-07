class Error {
    render() {
        const html = `
            <div class="error-mas">
                <h3>Нет доступа!</h3>
            </div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}


const errorPage = new Error();