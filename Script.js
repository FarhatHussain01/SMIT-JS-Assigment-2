// 1. Write a function that creates a closure and returns a function that can add
        // a specific number to any number passed to it. For example, if the closure is
        // created with 5, the returned function should add 5 to any number passed
        // to it.

        function closuredFunc(num) {
          let parentNum = num;

          return function innerFunction() {
            let childNum = 5;
            let result = childNum + parentNum;
            return result;
          };
        }

        let value = closuredFunc(35);

        console.log(value());

        // 2. Write a recursive function that searches an array for a specific value. The
        // function should return true if the value is found, and false if it is not. You
        // can assume that the array is not nested.
        const arr = [1, 2, 3, 4, 5]

        function recursiveFunc(array, value) {

            if (array[0] == value) {
                return true

            }

            return recursiveFunc(array.slice(1), value)
        }

        console.log(recursiveFunc(arr, 3))

        // 3. Write a function that adds a new paragraph element to the bottom of an
        //     HTML document. The function should take a string argument that will be
        //     used as the text content of the new paragraph element.

        function paraGernator(textContent) {
          let userInputText = textContent;
          let paraContainer = document.getElementById("paraContainer");

          const para = document.createElement("p");
          para.innerText = userInputText;
          paraContainer.appendChild(para);
        }

        paraGernator("Hello I Am Dynamically Generated Paragraph");

        // 4. Write a function that adds a new list item to an unordered list in an HTML
        // document. The function should take a string argument that will be used as
        // the text content of the new list item

        function addListItem(listText) {
            const listContainer = document.getElementById("listContainer");
            const newListItem = document.createElement("li");

            newListItem.textContent = listText;

            listContainer.appendChild(newListItem);
        }

        addListItem("I Am Dynamically Generated List Item Into Unordered List");

        //         5. Write a function that changes the background color of an HTML element.
        // The function should take two arguments: the first argument is a reference
        // to the HTML element, and the second argument is a string representing
        // // the new background color.

        const heading1 = document.getElementById("heading1")
        const heading2 = document.getElementById("heading2")
        const heading3 = document.getElementById("heading3")

        const colors = ["red", "green", "yellow", "green"]

        function changeBackground(element, bgcolor) {
            element.style.backgroundColor = bgcolor;
        }

        changeBackground(heading1, colors[3])

        //         6. Write a function that saves an object to localStorage. The function should
        // take two arguments: the first argument is a string representing the key to
        // use for storing the object, and the second argument is the object to store.

        const userObj1 = { name: "Farhat Hussain", city: "Haripur" }
        const key1 = "userInfo";

        function objectToLocalStorage(key, object) {
            myObject = JSON.stringify(object)
            localStorage.setItem(key, myObject)
        }

        objectToLocalStorage(key, userObj1)

        // 7. Write a function that retrieves an object from localStorage. The function
        // should take one argument, which is a string representing the key used to
        // store the object. The function should return the object.



        const userObj = { name: "Syed Farhat Kzmi", city: "Islamabad" }
        const key = "userInfo";

        function objectToLocalStorage(key, object) {
            myObject = JSON.stringify(object)
            localStorage.setItem(key, myObject)
        }

        objectToLocalStorage(key, userObj)

        function getObjectFromLocalStorage(key) {
            return JSON.parse(localStorage.getItem(key))
        }

        console.log("Here Is Your Object", getObjectFromLocalStorage(key))

        //         8. Write a function that takes an object and saves each property to
        // localStorage using the property name as the key and the property value as
        // the value. The function should also retrieve the object from localStorage
        // and return it as a new object

        function setAndGetPropertyFromlocalStorage(obj) {
            const keys = Object.keys(obj);
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                localStorage.setItem(key, JSON.stringify(obj[key]));
            }


            const newObj = {};
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                newObj[key] = JSON.parse(localStorage.getItem(key));
            }
            return newObj;
        }

        const myObj = { name: "Jeet Kumar", adress: "Islamabad" }
        console.log(setAndGetPropertyFromlocalStorage(myObj))
