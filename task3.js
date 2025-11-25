// ----- Функция XOR двух символов -----
function xorChars(a, b) {
    return String.fromCharCode(a.charCodeAt(0) ^ b.charCodeAt(0));
}

// ----- Расширение ключа до длины текста -----
function extendKey(key, length) {
    let result = "";
    while (result.length < length) {
        result += key;
    }
    return result.substring(0, length);
}

// ----- Шифрование -----
function encrypt() {
    let text = document.getElementById("plaintext").value;
    let key = document.getElementById("key").value;

    if (!key.length) {
        alert("Введите ключ!");
        return;
    }

    let fullKey = extendKey(key, text.length);
    let cipher = "";

    for (let i = 0; i < text.length; i++) {
        cipher += xorChars(text[i], fullKey[i]);
    }

    document.getElementById("cipher").value = cipher;
}

// ----- Расшифрование (XOR снова) -----
function decrypt() {
    let cipher = document.getElementById("cipher").value;
    let key = document.getElementById("key").value;

    if (!key.length) {
        alert("Введите ключ!");
        return;
    }

    let fullKey = extendKey(key, cipher.length);
    let text = "";

    for (let i = 0; i < cipher.length; i++) {
        text += xorChars(cipher[i], fullKey[i]);
    }

    document.getElementById("decrypted").value = text;
}