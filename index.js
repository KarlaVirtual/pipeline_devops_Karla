import chalk from 'chalk';

// Imprimir mensaje
console.log(chalk.blue('Hola Mundo'));

let countdown = 3;

const countdownInterval = setInterval(() => {
  if (countdown > 0) {
    console.log(`Desaparece en... ${countdown}`);
    countdown--;
  } else {
    clearInterval(countdownInterval);
    console.clear(); // Limpia la consola
    console.log(chalk.red('Mensaje eliminado. Fin del script.'));
  }
}, 1000);
