function submitForm() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var phone = document.getElementById('phone').value;
    var languages = document.getElementById('languages').value;
    var puja = document.getElementById('puja').value;
    var comment = document.getElementById('comment').value;
    var address = document.getElementById('address').value || 'Not Given';
    var details = comment || 'Not Given';
    
    var text = 'Name: ' + firstname + ' ' + lastname + '\n';
    text += 'Phone Number: ' + phone + '\n';
    text += 'Address: ' + address + '\n';
    text += 'Language: ' + languages + '\n';
    text += 'Puja: ' + puja + '\n';
    text += 'Details or Comments: ' + details;

    var urlEncodedText = encodeURIComponent(text);
    
    var whatsappUrl = 'https://wa.me/9961069573?text=' + urlEncodedText;

    window.location.href = whatsappUrl;
}
