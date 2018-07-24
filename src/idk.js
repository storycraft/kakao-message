window.onload = () => {
    var profileInput = document.getElementById('profile');
    var textbox = document.getElementById('textbox');
    var imageBox = document.getElementById('imageBox');

    imageBox.addEventListener('click', (e) => {
        var input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.click();

        input.addEventListener('input', () => {
            var file = input.files[0];
            if (!file)
                return;
            imageBox.src = URL.createObjectURL(file);
        });
    });

    textbox.addEventListener('input', () => {
        var p = document.createElement('p');
        p.className = 'text-box';
        p.style.display = 'table';
        p.appendChild(document.createTextNode(textbox.value));
        document.body.appendChild(p);
        var box = p.getBoundingClientRect();
        document.body.removeChild(p);
        
        textbox.style.width = box.width + "px";
        textbox.style.height = "";
        textbox.style.height = textbox.scrollHeight + "px";
    });
}