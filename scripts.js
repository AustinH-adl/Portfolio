function colorNav() {
    var x = window.location.href;
    const list = document.getElementsByClassName("navButton");
    for (let item of list) {
        if(item.href==x) {
            console.log(item)
            item.classList.add("active");
        }
    }
}