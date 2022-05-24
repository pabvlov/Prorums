#!/bin/bash
echo "Ejecutando:"
if docker start mysql; then
     echo OK!
else
     echo FAIL
fi

echo "Cargando NodeJS..."
if node $PWD/apiprorums/server.js&
echo "Cargando Angular..."
ng serve -o; then
     echo Gracias!
else
     echo FAIL
fi
