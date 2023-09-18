#!/bin/bash

# Instala a dependência SASS
npm install sass

# Navega para o diretório de estilo
cd assets/style

# Inicia o compilador SASS em modo de observação
sass --watch ./scss/global-style.scss:./css/global-style.css --style compressed