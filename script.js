const btns = document.querySelectorAll('.btn');
const divs = document.querySelectorAll('.gallery__div');
const content = document.querySelectorAll('.gallery__head');
console.log(content)
btns.forEach((button, index) => {
    button.addEventListener('click', function() {
        // Remove 'active' class from all divs
        divs.forEach(div => {
            div.classList.remove('active');
        });

        content.forEach(c => {
            c.classList.add('hide')
        })
        // Add 'active' class to the corresponding div
       
        divs[index].classList.add('active');
        content[index].classList.remove('hide')
    });
});
