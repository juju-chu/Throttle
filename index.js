const delayTime = 2000

// func: 要執行的 function
// timeout: 在觸發後的 timeout 時間內只會執行一次
const throttleFunc = function throttle(func, timeout) {
    let inThrottle
    let timeoutId
    return function () {
        const context = this  // 指向 throttleInput
        const args = arguments  // KeyboardEvent

        if (!inThrottle) {
            // 輸入之後 timeout 時間內都不會進入此
            func.apply(context, args)
            inThrottle = true;
            clearTimeout(timeoutId); // 重新計時
            timeoutId = setTimeout(function () {
                inThrottle = false
            }, timeout)
        }
    }
}

const throttleInput = document.getElementById('throttle-input');

// 輸入字
throttleInput.addEventListener('keyup', throttleFunc((e) => {
    console.log(e.target.value);
}, delayTime))
