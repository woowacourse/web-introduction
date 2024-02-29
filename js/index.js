document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.guestbook-form');
    const nameInput = document.getElementById('name');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const resetButton = document.querySelector('button[type="reset"]');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = nameInput.value;
        const checkedBoxesCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
        alert(name + "님, 저와 " + checkedBoxesCount + "개의 취향이 같으시네요!");
    });

    resetButton.addEventListener('click', function () {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
        nameInput.value = ''; // 이름 입력 필드도 초기화합니다.
    });
});