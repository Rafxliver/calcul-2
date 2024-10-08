function calcular(){
    const K = 8.9875 * Math.pow(10, 9);
    const Q1 = parseFloat (document.getElementById('Q1').value);
    const Q2 = parseFloat (document.getElementById('Q2').value);
    const D = parseFloat (document.getElementById('D').value);

    const result = 9000000 * (Q1 * Q2) / (D *D);
    document.getElementById('result').innerText = result.toExponential(2);

}
function calculateForce() {
    const charge = parseFloat(document.getElementById('charge').value);
    const velocity = parseFloat(document.getElementById('velocity').value);
    const magneticField = parseFloat(document.getElementById('magneticField').value);

    if (isNaN(charge) || isNaN(velocity) || isNaN(magneticField)) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const force = charge * velocity * magneticField;
    document.getElementById('result').textContent = `A força magnética é: ${force} N`;
}
