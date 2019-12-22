const $input = document.querySelector("#rut");

console.log($input);

console.log(this);
$input.addEventListener("input", function(event) {
    console.log(this.value);
    formater(this.value);
});

function formater(run) {
    let value = run.split("");

    console.log(value[value.length - 1]);
}
