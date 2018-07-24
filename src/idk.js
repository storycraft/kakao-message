window.onload = () => {
    var profileInput = document.getElementById('profile');
    var textbox = document.getElementById('textbox');
    var imageBox = document.getElementById('imageBox');
	
	imageBox.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAR2SURBVHhe7ZxpT1NREIb96YK4BFEjkYioHxAhkQgtS9lqWw1LFIXbhZYiVBa1/g1faKI4Zblz7pk5bZzk+dDlnlmetLfn3KU3bk5HRkxMFgOTxcBkMTBZDEwWA5PFwGQxMFkMTBYDk8XAZDEwWQxMFgOTxcBkMTBZDEwWA5PFwGQxMFkMTBYDk8XAZDEwWQxMFgOTxaCzZPWli/3zlcfLVYAHeEo2CEt4WT2paHClNrHRWC7/KNR+EfAi3sIG2IwM1CewrOFcfekiR+1gM2xMhisTTNZAppKJvhMj14IhGEhCqRFG1lB2N1dtEhExwUAMJwF1CCDreWGP9O8AgpCwCmjLwq66UHP8TP1LE6FIcGlUZfXPl9/t/Gxr2xGEQkCSQhRVWdOfj0jDCUFAkkIUPVmYZ5JWvYCwJJEcerJmt09In15AWJJIDiVZd+fKpEmPIDhJJ4SSLC/ThctQm0YoyZryvWs/D4KTdEIoyVooslc28UFwkk4IJVkep1ftIDhJJ4SGrN5UkbTnHaQgSSVQ+mR5WuJcRpOkE0JJ1oUH9nyB4CSdEEqyhGakLdTmpUqyxjcapEOPjK83SDohlGQJLQxbqC0PlWT1iM0eEBbBSTohlGSBV2sHpE8vICxJJIeerL50Mev7w4WAmucW9WSBF+89L6cRkKQQRVUWeLt5SBp2BqFIcGm0Zd1KF+cjD3MuBEEoElwabVngzmwp4RwVwxGEhFUggCzQm4refPxGFMQEAzGcBNQhjKwWQ9ndxRLjOBc2DnUuukVIWQDzyZHC3rXfSmyAzdQmn5cRWNYfsA8ayddfrx9Mfjqc2ToGeICneDHI7ulCOkVWV2CyGJgsBiaLgcliEFhWX7r4aKk6nKuPru5jtjm1eZT+cjy3fQLwAE/xIt7CBtgs+MXLAWRhujS4UsO04GyRyDrr08QQDDy9eLktrAKqsh4s7ExsNLIVD0e1EAShEJCkEEVJ1uByFV8r0rAXEBbBSTohxGXdz1TSWyKazoMUSERSe0dQVk8qGls7yMuei/4LEiGd6I0YUrJuz5QUPlDtIClSk2J8ISIL34jFkuD5+qtBaqGvpH9Z+F0XvcAoDihA4ip5z7JG8nXhC2bi00QxpLyE+JT1JOvr7glfNFESKTIJ3mQ9XNxxvndJDpSEwkipzviRhVXbUrg9+tWgMF+LSj+yJj95O3UqAcojBbvhQdbZrorW12l42XkllYUZc8ApVXxQZPLJfVJZLz98JWV1LCiVFM8lkazeVLTi43iLDig14ansRLKenU5BaU2dDAomLbBIJCsjeZOJBCiYtMDCXdZApkJK6QqS/NOBu6zR1X1SR1eAskkj8XGXldkOcLgqOSibNBIfR1mtO1PznbcYvJpWwfdc73x1lPU012W/g+dB8aSdmDjKGpO5qF0HFE/aiYmjrKlNwdt4pUHxpJ2YOMoSvY1XGufbhB1lrZS7ZpXTDoon7cTEURZJ33WQdmJishiYLAb/4z4rW9HdZ9mvIQPv/4SlieO/bk1HvwHsA8ZtAqVhuAAAAABJRU5ErkJggg==";

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