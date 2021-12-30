//Cuando son varias funciones va los corchetes, sino directamente el nombre
//Esto es lenguaje Node.JS
const { src, dest, watch } = require("gulp");
//Para copilar las hojas de sass necesito llamar a la dependencia gulp-sass
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

function css(done) {
  src("src/scss/**/*.scss") //Identificar el archivo .SCSS a copilar
    .pipe(plumber())
    .pipe(sass()) //Copilarlo, gulp va a copiar el nombre del archivo sass y creara uno igual pero con .css
    .pipe(dest("build/css"));
  done();
}

function dev(done) {
  watch("src/scss/**/*.scss", css);
  done();
}

exports.dev = dev;
exports.css = css;
