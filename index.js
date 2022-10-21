;(function(self) {
    self.floatLabels = function({ inputSelector, labelActiveClass }) {
        const inputFields = Array.from(document.querySelectorAll(inputSelector))

        inputFields.forEach((field) => {
            field.addEventListener("focus", () => {
                field.previousElementSibling.classList.add(labelActiveClass);
            });

            field.addEventListener("blur", () => {
                if (!field.value) {
                    field.previousElementSibling.classList.remove(labelActiveClass);
                }
            });
        })
    }
}(globalThis.CodeCrumbs = globalThis.CodeCrumbs || {}));