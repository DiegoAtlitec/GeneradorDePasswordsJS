function generatePassword() {
            const length = document.getElementById("length").value;
            const useUppercase = document.getElementById("uppercase").checked;
            const useLowercase = document.getElementById("lowercase").checked;
            const useNumbers = document.getElementById("numbers").checked;
            const useSymbols = document.getElementById("symbols").checked;

            const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
            const numberChars = "0123456789";
            const symbolChars = "!#$%&()=+-_{][}|°;^~`–…µ~∫√ç≈~λ©ƒñ-∂ß-@∑€®†¥¨ıø:',.<>?";

            let allChars = "";
            if (useUppercase) allChars += uppercaseChars;
            if (useLowercase) allChars += lowercaseChars;
            if (useNumbers) allChars += numberChars;
            if (useSymbols) allChars += symbolChars;

            if (allChars === "") {
                alert("selecciona al menos una opcion.");
                return;
            }

            let password = "";
            for (let i = 0; i < length; i++) {
                password += allChars[Math.floor(Math.random() * allChars.length)];
            }

            document.getElementById("password").value = password;
            updateStrength(password);
        }

        function copyPassword() {
            const passwordField = document.getElementById("password");
            passwordField.select();
            document.execCommand("copy");
            alert("Contraseña copiada al portapapeles");
        }

        function updateStrength(password) {
            const bars = document.querySelectorAll(".bar");
            let score = 0;

            if (password.length >= 12) score++;
            if (/[A-Z]/.test(password)) score++;
            if (/[0-9]/.test(password)) score++;
            if (/[^A-Za-z0-9]/.test(password)) score++;

            bars.forEach((bar, index) => {
                bar.classList.remove("active", "strong", "medium", "easy");
                if (index < score) {
                    bar.classList.add("active");
                    if (score === 4) {
                        bar.classList.add("strong");
                    } else if (score === 3) {
                        bar.classList.add("medium");
                    } else if (score === 2) {
                        bar.classList.add("easy");
                    }
                }
            });

            const strengthText = document.querySelector(".strengthCoreText");
            if (score === 4) {
                strengthText.textContent = "STRONG";
            } else if (score === 3) {
                strengthText.textContent = "MEDIUM";
            } else if (score === 2) {
                strengthText.textContent = "EASY";
            } else {
                strengthText.textContent = "WEAK";
            }
        }

        document.getElementById("length").addEventListener("input", function () {
            document.getElementById("lengthValue").textContent = this.value;
        });

        generatePassword(); 

//Viva Batiz y ESCOM <3<3<3<3

// const rangeInput = document.getElementById("length");
// const rangeValue = document.getElementById("lengthValue");


// function updateRangeProgress() {
//     const value = rangeInput.value;
//     const min = rangeInput.min ? rangeInput.min : 0;
//     const max = rangeInput.max ? rangeInput.max : 100;
//     const percentage = ((value - min) / (max - min)) * 100;

    
//     rangeInput.style.background = `linear-gradient(to right, var(--verde) ${percentage}%, var(--contenedor) ${percentage}%)`;
// }


// rangeInput.addEventListener("input", () => {
//     rangeValue.textContent = rangeInput.value;
//     updateRangeProgress();
// });


// updateRangeProgress();



