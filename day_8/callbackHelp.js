const orderCoffee = () => {
    setTimeout(() => {
        console.log("Make some Order");
        setTimeout(() => {
            console.log("Brewing Coffee");
            setTimeout(() => {
                console.log("Serving Coffee");
                setTimeout(() => {
                    console.log("Enjoy your Coffee");
                }, 1000);;
            }, 3000);
        }, 2000);
    }, 4000);
}