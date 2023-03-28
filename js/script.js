let characters;

function generatePassword(length, type) {

  if (type === 'letras') {
      characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  } else if (type === 'letrasEnumeros') {
      characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  } else {
      characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    }

    let password = '';

          for (let i = 0; i < length; i++) {
            const index = Math.floor(Math.random() * characters.length);
            password += characters[index];
          }
          return password;
}
   
// ***BLOCO OK - QUANTIDADE DE CARACTERES E INFORMAR NA TELA
const generateButton = document.getElementById('generate-button');
const passwordDisplay = document.getElementById('password-display');
const passwordTypeSelect = document.getElementById('password-type-select');

// BOTÃO DE GERAR A SENHA:
generateButton.addEventListener('click', () => {
 
    const qtdDeDigitos = document.getElementById('numeroCaractere').value;
    // pegar os demais elementos:
      const passwordType = passwordTypeSelect.value
      const password = generatePassword(qtdDeDigitos, passwordType);
    passwordDisplay.innerHTML = password;
  }
);
