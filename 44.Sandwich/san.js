function makeSandwich(items) {
    let summary = "Your sandwich will have:";
    for (const item of items) {
        summary += ` ${item}`;
    }
    console.log(summary);
}
makeSandwich(["ham", "cheese", "lettuce"]);
makeSandwich(["chicken", "tomato", "onion"]);
makeSandwich(["tuna", "olives", "mayo"]);
export {};
