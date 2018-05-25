function validateForm() {
            var FirstName = document.myForm.First_Name.value;
            var LastName = document.myForm.Last_Name.value;
            var BirthdayDay = document.myForm.Birthday_day.value;
            var EmailId = document.myForm.Email_Id.value;
            var MobileNumber = document.myForm.Mobile_Number.value;
            var Gender = document.myForm.Gender.value;
            var Address = document.myForm.Address.value;
            var City = document.myForm.City.value;
            var PinCode = document.myForm.Pin_Code.value;
            var State = document.myForm.State.value;
            var Country = document.myForm.Country.value;
            var Hobbies = document.myForm.Hobbies.value;
            var OtherHobby = document.myForm.Other_Hobby.value;
            var Courses = document.myForm.Courses.value;
            localStorage.setItem("FirstName", FirstName);
            localStorage.setItem("LastName", LastName);
            localStorage.setItem("BirthdayDay", BirthdayDay);
            localStorage.setItem("EmailId", EmailId);
            localStorage.setItem("MobileNumber", MobileNumber);
            localStorage.setItem("Gender", Gender);
            localStorage.setItem("Address", Address);
            localStorage.setItem("City", City);
            localStorage.setItem("PinCode", PinCode);
            localStorage.setItem("State", State);
            localStorage.setItem("Country", Country);
            localStorage.setItem("Hobbies", Hobbies);
            localStorage.setItem("OtherHobby", OtherHobby);
            localStorage.setItem("Courses", Courses);
        }

        function editNodeText(regex, input, helpId, helpMessage) {
            // If the wrong information was entered, warn them
            if (!regex.test(input)) {
                if (helpId != null)
                    // We need to show a warning
                    // Remove any warnings that may exist
                    while (helpId.childNodes[0]) {
                        helpId.removeChild(helpId.childNodes[0]);
                    }
                // Add new warning
                helpId.appendChild(document.createTextNode(helpMessage));
            } else {
                // If the right information was entered, clear the help message
                if (helpId != null) {
                    // Remove any warnings that may exist
                    while (helpId.childNodes[0]) {
                        helpId.removeChild(helpId.childNodes[0]);
                    }
                }
            }
        }
        // inputField � ID Number for the html text box
        // helpId � ID Number for the child node I want to print a warning in
        function isFirstNameEmpty(inputField, helpId) {
            // See if the input value contains any text
            return editNodeText(/^[A-Za-z]{3,30}$/, inputField.value, helpId, "Please enter valid first name! (Must be 3-30 characters, a-z and A-Z only)");
        }

        function isLastNameEmpty(inputField, helpId) {
            return editNodeText(/^[A-Za-z]{3,30}$/, inputField.value, helpId, "Please enter valid last name! (Must be 3-30 characters a-z and A-Z only)");
        }

        function isBirthDateValid(inputField, helpId) {
            return editNodeText(/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/, inputField.value, helpId, "Please select a valid date!");
        }

        function isEmailValid(inputField, helpId) {
            return editNodeText(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, inputField.value, helpId, "Enter a valid E-mail address!");
        }

        function isMobileValid(inputField, helpId) {
            return editNodeText(/^[0-9]{10}$/, inputField.value, helpId, "Enter valid 10 digit Mobile number!");
        }

        function isGenderValid(inputField, helpId) {
            var gender = document.myForm.Gender;
            var flag = true;
            for (var i = 0; i < gender.length; i++) {
                if (gender[i].checked) {
                    flag = false;
                    break;
                }
            }
            if (helpId != null) {
                // Remove any warnings that may exist
                while (helpId.childNodes[0]) {
                    helpId.removeChild(helpId.childNodes[0]);
                }
            }
            if (flag) {
                helpId.appendChild(document.createTextNode("Please select your gender!"));
                gender[0].focus();
                return false;
            }
        }

        function isNumberKey(evt, helpId) {
            var charCode = (evt.which) ? evt.which : event.keyCode;
            if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
                if (helpId != null) {
                    while (helpId.childNodes[0]) {
                        helpId.removeChild(helpId.childNodes[0]);
                    }
                    helpId.appendChild(document.createTextNode("Mobile number must be digits only!"));
                }
                //pinCode.focus();
                return false;
            } else {
                if (helpId != null) {
                    // Remove any warnings that may exist
                    while (helpId.childNodes[0]) {
                        helpId.removeChild(helpId.childNodes[0]);
                    }
                }
            }
            //return true;
        }

        function isAddressValid(inputField, helpId) {
            return editNodeText(/^[A-Za-z0-9\.\' \-]{5,30}$/, inputField.value, helpId, "Please enter a valid address!");
        }

        function isCityValid(inputField, helpId) {
            return editNodeText(/^[A-Za-z]{3,30}$/, inputField.value, helpId, "Please enter valid City name! (Must be 3-30 characters a-z and A-Z only)");
        }

        function isPinValid(inputField, helpId) {
            return editNodeText(/^[0-9]{6}$/, inputField.value, helpId, "Please enter 6 digit valid PIN Code!");
        }

        function isPinNumberKey(evt, helpId) {
            var charCode = (evt.which) ? evt.which : event.keyCode;
            if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
                //alert("Enter valid 6 digit PIN Code!");
                if (helpId != null) {
                    while (helpId.childNodes[0]) {
                        helpId.removeChild(helpId.childNodes[0]);
                    }
                    helpId.appendChild(document.createTextNode("PIN Code must be digits only!"));
                }
                //pinCode.focus();
                return false;
            } else {
                if (helpId != null) {
                    // Remove any warnings that may exist
                    while (helpId.childNodes[0]) {
                        helpId.removeChild(helpId.childNodes[0]);
                    }
                }
            }
            //return true;
        }

        function isStateValid(inputField, helpId) {
            return editNodeText(/^[A-Za-z]{3,30}$/, inputField.value, helpId, "Please enter a valid state name! (max 30 characters a - z and A - Z)");
        }

        function isHobbiesValid(inputField, helpId) {
            var hobbies = document.myForm.Hobbies;
            var flag = true;
            for (var i = 0; i < hobbies.length; i++) {
                if (hobbies[i].checked) {
                    flag = false;
                    break;
                }
            }
            if (helpId != null) {
                // Remove any warnings that may exist
                while (helpId.childNodes[0]) {
                    helpId.removeChild(helpId.childNodes[0]);
                }
            }
            if (flag) {
                helpId.appendChild(document.createTextNode("Please select your Hobbies!"));
                hobbies[0].focus();
                return false;
            }
        }

        function isHobbiesOtherValid(inputField, helpId, hobby) {
            if (!hobby.checked) {
                if (helpId != null) {
                    // Remove any warnings that may exist
                    while (helpId.childNodes[0]) {
                        helpId.removeChild(helpId.childNodes[0]);
                    }
                }
            }
            if (hobby.checked) {
                return editNodeText(/^[A-Za-z]{3,30}\s$/, inputField.value, helpId, "Please enter your other hobby!");
            }
        }

        function isCoursesValid(inputField, helpId) {
            var courses = document.myForm.Courses;
            var flag = true;
            for (var i = 0; i < courses.length; i++) {
                if (courses[i].checked) {
                    flag = false;
                    break;
                }
            }
            if (helpId != null) {
                // Remove any warnings that may exist
                while (helpId.childNodes[0]) {
                    helpId.removeChild(helpId.childNodes[0]);
                }
            }
            if (flag) {
                helpId.appendChild(document.createTextNode("Please select one course!"));
                courses[0].focus();
                return false;
            }
        }

        function isPassword(inputField, helpId) {
            pass = inputField.value;
            return editNodeText(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@ $ % & *]).{8,12}/, inputField.value, helpId, "At least one number,uppercase,lowercase letter,{@,$,%,&,*} and at least 8 or more characters");
        }