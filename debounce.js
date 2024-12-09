// Понимание функций высшего порядка и оптимизации в JavaScript.

function debounce(func, delay) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func();
    }, delay);
  };
}

const debouncedFunction = debounce(() => {
  console.log("Вызвана функция с задержкой");
}, 2000);

debouncedFunction();
