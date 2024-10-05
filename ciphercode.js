function cipher(plaintext, shiftnum){
    let result = "";
    for (let i=0; i<plaintext.length; i++){
        let c = plaintext.charCodeAt(i);
        if (c>=65 && c<=90)
        {
            result+=String.fromCharCode(((c-65+shiftnum)%26)+65);
        }
        else if (c>= 97 && c<=122)
        {
            result+=String.fromCharCode(((c-97+shiftnum)%26)+97);
        }
        else
        {
            result+=plaintext[i];
        }
    }
    return result;
}

document.getElementById('encrypt').addEventListener('click', function()
{
    const ptext = document.getElementById('text').value;
    const shift = parseInt(document.getElementById('number').value) || 0;
    document.getElementById('result').value = cipher(ptext, shift);
});

document.getElementById('decrypt').addEventListener('click', function()
{
    const ptext = document.getElementById('text').value;
    const shift = parseInt(document.getElementById('number').value) || 0;
    document.getElementById('result').value = cipher(ptext, -shift);
});