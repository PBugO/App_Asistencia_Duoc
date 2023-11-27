
>   PARA INSTALAR LOS COMPONENTES NECESARIOS PARA EL FUNCIONAMIENTO DEL PROGRAMA EJECUTE LOS SIGUIENTES COMANDOS:

npm install
_update-components.bat 

        >   **CUANDO TE PREGUNTE POR CONFIGURACIÓN ESCOGE LA SIGUIENTE:
        ? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink  
        ? Set up global Angular Material typography styles? Yes  
        ? Include the Angular animations module? Include and enable animations


>  UNA VEZ INSTALADO LOS COMPONENTES SE PUEDE CORRER LA APLICACIÓN

ionic serve


------------------------------------------------------------------------------------
------------------------------------------------------------------------------------
>   PARA QUE FUNCIONE EL FORO DEBES EJECUTAR ESTE COMANDO EN OTRA CONSOLA:

s.bat
        *Ingresar opción 13


------------------------------------------------------------------------------------
------------------------------------------------------------------------------------
>   PARA LA AUTOMATIZACIÓN DE PRUEBAS CON JASMIN DEBES ABRIR EN OTRA CONSOLA :
        >   **DEBES TENER CHROME INSTALADO


ng test


------------------------------------------------------------------------------------
------------------------------------------------------------------------------------
>   PARA PRUEBAS E2E CON CYPRESS DEBES USAR ESTOS COMANDOS EN OTRA CONSOLA
        >DEBE ESTAR EJECUTANDOSE EL PROGRAMA CON IONIC SERVE

npx cypress open


------------------------------------------------------------------------------------
------------------------------------------------------------------------------------
>   PARA GENERAL LA APK Y DEMÁS COMPONENTES ANDROID 
        (SE SUGIERE BORRAR LA CARPETA ANDROID SI YA ESTA CREADA)
        >DEBE ESTAR INSTALADO EL ANDROID STUDIO

ionic build
npm install @capacitor/android
npx cap add android
npx cap open android
