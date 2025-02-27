# Ejercicio AJV  
### Validación de JSONs sobre Profesores y Universidades  

Este proyecto utiliza **Node.js**, **Express** y **AJV** para validar datos JSON de **profesores** y **universidades** mediante peticiones HTTP **POST**.  

Instala las dependencias: npm install

Inicia el servidor: node server.js

Validar un Profesor

Método: POST

URL: http://localhost:3000/validate/profesor

Ejemplo cuerpo (Body - raw - JSON):

{
    "nombre": "Dr. Juan Pérez",
    "departamento": "Matemáticas",
    "tiene_grado": true,
    "tiene_master": true,
    "tiene_doctorado": true,
    "años_docencia": 15,
    "años_en_universidad": 10,
    "asignaturas_impartidas": ["Álgebra", "Cálculo"]
}

Respuestas esperadas:

200 OK → ✅ JSON válido

400 Bad Request → ❌ JSON incorrecto

Validar una Universidad

Método: POST

URL: http://localhost:3000/validate/universidad

Ejemplo cuerpo (Body - raw - JSON):

{
    "nombre": "Ceu San Pablo",
    "ubicación": "Madrid, España",
    "grados_ofrecidos": 90,
    "cantidad_estudiantes": 15000,
    "facultades": ["Ingeniería", "Derecho", "Artes"]
}

Respuestas esperadas:

200 OK → ✅ JSON válido

400 Bad Request → ❌ JSON incorrecto
