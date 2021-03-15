# **Proyecto final: Backend Fundamentals (API)**

### Visita el API
[]()

### Extra - Visita el CRM
[]()


Por común acuerdo, cada integrante del equipo número 08 pensamos en la idea de establecer un API cuyo propósito es ayudar a las personas a encontrar un buen auto (no necesariamente nuevo), así como invitarlos a publicar sus autos, en caso de que deseen ponerlo a la venta. Se espera que éste aPI sea exclusivamente para autos, pues como sabemos, los sitios de compra-venta de hoy en día, regularmente incluyen mas que solo autos.

Creemos que el proyecto ayudará a los usuarios a encontrar autos cercanos a su ubicación, revisar las opciones disponibles, y encontrar una propuesta acorde a sus necesidades.

## ¿Qué se espera del proyecto?

A corto plazo, del proyecto se espera que se puedan generar solicitudes de compra-venta donde una las partes involucradas, puedan postular sus autos y alguien que tenga la facilidad de comprarlo pueda realizarlo sin ningún  inconveniente.
> *sabemos que no es algo **innovador**, si no que queremos entender como es el funcionamiento de un **e-commerce***

Tenemos la visión a largo plazo del que proyecto se pueda comportar como una plataforma de gran prestigio como:
- **[Mercado libre](https://autos.mercadolibre.com.mx)**
- **[Kavak](https://www.kavak.com/)**
- **[Segunda mano](https://www.segundamano.mx/)**

Esto con el fin de ver como es el funcionamiento de estas plataformas donde integran diversos servicios como principalmente, chat en tiempo real, generación de artículos que le puedan agradar al cliente en base a su búsqueda como también las opciones de pago.

###### ... pero, ¿Cómo llegamos a ese objetivo?

## Historias de usuario

* [x] Como ***usuario nuevo*** quiero poder ***crear mi cuenta*** sin tantos obstáculos, para tener acceso a la plataforma.
* [x] Como ***usuario registrado*** quiero poder ***subir un anuncio*** sobre mi auto (o varios, si lo amerita el caso), para que los demás usuarios puedan verlo e interactuar con el.
* [x] Como ***usuario registrado*** quiero poder ***consultar mi historial de anuncios***, para poder ver mis anuncios creados, aquellos a los cuales realicé una petición de compra, los que he vendido exitosamente, y los que he comprado.
* [x] Como ***usuario registrado*** quiero poder ***editar mis anuncios publicados***, para actualizar detalles sobre un vehiculo, cambiar el precio o simplemente corregir errores.
* [x] Como ***usuario regstrado*** quiero poder ***eliminar un anuncio***, para evitar inconvenientes en caso de incidencias o un cambio de opinion.
* [x] Como ***usuario registrado*** quiero poder ***realizar peticiones de compra*** sobre anuncios de otros usuarios, para poder llegar a una negociación con el usuario dueño del auto.
* [x] Como ***usuario registrado*** quiero poder ***gestionar diversas peticiones de compra sobre el mismo auto***, pues se sabe que puede haber varios interesados por un único vehiculo.
* [x] Como ***usuario registrado*** quiero poder ***gestionar rondas de subastas*** sobre un mismo auto durante un lapso dado de tiempo.
* [x] Como ***usuario registrado*** quiero poder ***eliminar una petición de compra*** para corregir o dar paso a otros compradores en caso de que ya no quiera dicho auto.
* [x] Como ***usuario registrado***, quiero poder ***realizar búsquedas sobre los anuncios disponibles***, pudiendo refinar y/u ordenar los resultados que cumplan con los criterios de mi búsqueda, y así obtener resultados mas acordes a mis necesidades.
* [x] Como ***usuario registrado*** quiero poder ***establecer contacto con el usuario vendedor*** dentro de la plataforma, para obtener mas detalles sobre el auto que me interesa.
* [x] Como ***usuario registrado*** quiero poder ***dar de baja mi cuenta***, para cuando ya no requiera del uso de la plataforma.

## Generalidades sobre la Base de datos

🎯 **¿Cuáles son las ventajas de usar el modelo relacional en nuestro proyecto?**
*Las ventajas de usar el modelo relacional en nuestro proyecto son la integridad de la información y uso de atomicidad, ya que, gracias a sus relaciones, podríamos visualizar los cambios más consistentemente en múltiples entidades con solo una llamada, por lo que aseguraría las compras o el rollback.*

🎯 **¿Cuáles son las limitantes de usar el modelo relacional en nuestro proyecto?**
*Las limitantes de usar el modelo relacional en nuestro proyecto son la falta de flexibilidad que ofrece al momento de agregar o modificar algún atributo de alguna tabla y el gran desperdicio de almacenamiento que conlleva, ya que, autocompletará con NULL los registros anteriores que no tuvieron ese campo, el cual también
consume almacenamiento innecesariamente.*

🎯 **¿Qué ventajas ofrece el modelo no relacional a nuestro proyecto?**
*Las ventajas de usar el modelo no relacional a nuestro proyecto son la gran flexibilidad que nos otorga al momento de agregar documentos y el uso de almacenamiento eficazmente, ya que, cada dato es un documento diferente y puede tener los campos que necesite, sin necesidad de afectar a los demás; provocando un gran
ahorro de almacenamiento.*

🎯 **¿Qué desventajas tiene el uso del modelo no relacional en nuestro proyecto?**
*Las desventajas de usar el modelo no relacional son la falta de atomicidad u operaciones que afectan a múltiples entidades al mismo tiempo, ya que, al ser una base de datos NO relacional, no existe relaciones para hacer ese tipo de transacciones con una sola llamada, necesitaras X números de llamadas dependiendo las entidades a afectar; lo cual podría generar algunos riesgos al completar algunas compras.*

🎯 **¿Qué implementación de base de datos de las que hicimos representa mejor las especificaciones de las entidades del proyecto y por qué?**
*Al discutirlo por un largo tiempo, nosotros como equipo, decidimos implementar la base de datos no relacional a nuestro proyecto, existen varias razones de esta elección:*
- *La primera razón se debe a que algunas de nuestras entidades tienen atributos múltiples (arrays) y si usamos un base de datos relacional, tendríamos que dedicar una tabla entera solo para estos atributos, lo cual nos generaría más almacenamiento, y si usamos un no relacional, nos libramos de ese problema, ya que, si permite atributos de tipo array.*
- *La segunda razón se debe a la gran flexibilidad que nos ofrece una base de datos no relacional a comparación de una relacional, ya que la no relacional nos permite agregar y modificar los documentos sin necesidad de afectar a los documentos anteriores, al contrario de una base de datos relacional, si le modificas un atributo a una tabla todos los registros se ven afectados con ese cambio, eso podía ser perjudicial para nuestro proyecto.*
- *La tercera y última razón se debe al gran ahorro de almacenamiento que nos ofrece una base de datos no relacional a comparación de una relacional; esto es favorable para nuestro proyecto, ya que, al ser un tipo de tienda online de carros, podemos tener muchos usuarios, carros o solicitudes registrados, sin preocuparnos de hacer mal uso del almacenamiento, es decir nos permite escalar el proyecto de mejor manera.*

#### Tipos de usuario

> Existen dos tipos de usuarios:
>
> - **Anunciante o vendedor.**
> - **Comprador.**
>
> Aunque teóricamente, ambos pueden realizar anuncios y/o comprar vehiculos. 😅

#### Acciones que puede realizar un usuario

> Como se mencionó anteriormente, ambos tipos de usuario pueden realzar las mismas acciones:
> 
> - **Registrarse.**
> - **Editar su información personal.**
> - **Publicar autos a la venta.**
> - **Editar la información de sus publicaciones, o eliminarlas.**
> - **Gestionar solicitudes de compra.**
> - **Subastar autos.**

#### Información para el registro

> A traves de un formulario, el usuario deberá otorgar la siguiente inforamción:
> - **Nombre de usuario.**
> - **Nombre.**
> - **Apellidos.**
> - **Teléfono.**
> - **Email.**
> - **Contraseña.**
> - **Dirección.**
> - **Foto de perfil**
> - **Biografía**

#### Entidades (colecciones de la base de datos)

> - **Usuario.**
> - **Automóvil (o anuncio).**
> - **Petición de compra**

#### Atributos de las entidades

> ----
> | Usuario | Auto | Peticion |
> | :--------: | :--------: | :--------: |
> | ID | ID | ID |
> | Nombre de usuario | Marca | Estatus |
> | Nombre(s) | Modelo | ID del vendedor |
> | Apellidos | Versión | ID del comprador |
> | Telefono | Año | ID del auto |
> | E-mail | Kilometraje | |
> | Passport | Tren motriz | |
> | Dirección | Tipo de chasis | |
> | Foto de perfil | Color | |
> | | Fotos | |
> | | Descripción | |
> | | Precio | |
> | | ID del vendedor | |
> ----

### Propuesta de Modelo Relacional (SQL)

Modelo Entidad-Relación:

![Modelo-Entidad-Relacion](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/assets/img/Entity-Relationship-Model.png?raw=true)

Modelo Relacional:

![Modelo-Relacional](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/assets/img/Relational-Model.png?raw=true)

#### Visualización de tablas en MySQL

> **Tabla Usuario**
>
> ![Tabla-Usuario](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/database/DescribeUser.png?raw=true)
> 
> **Tabla Auto**
>
> ![Tabla-Auto](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/database/DescribeCar.png?raw=true)
>
> **Tabla PurchaseRequest**
>
> ![Tabla-PurchaseRequest](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/database/DescribePurchaseRequest.png?raw=true)
> 
> **Script de SQL**
> Si aún quieres revisar nuestra propuesta para el modelo SQL, puedes consultar el **[Script de SQL](/database/database.sql)**

### Colecciones en MongoDB Atlas (NoSQL)

![Mongo-db-Collections](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/assets/img/DB_Collections.png?raw=true)

#### Agregando registros a la BD

**Usuarios**
El contenido de un registro de usuario debe tener un cuerpo parecido al siguiente:
```json
{ 
    "username": "sajsjsa",
    "firstName": "Said",
    "lastName":"Mandujano",
    "typeOfUser": "Anunciante",
    "phone": "5576632262",
    "email":"said@gmail.com",
    "password": "nomejodas",
    "location": "cdmx",
    "bio": "El mejor vendedor",
    "profilePhoto": "",
    "announcementList": "40 anuncios",
    "purchaseRequestsList": "",
}
```

**Autos**
El registro de un auto contiene el siguiente cuerpo:
```json
{
    "make": "Chevrolet",
    "model": "Bel Air",
    "version": "",
    "year": "1957",
    "mileage": 2000,
    "drivetrain": "Manual - Rear-wheel drive",
    "chasisType": "Coupe",
    "color": "Light Blue",
    "photos": [
        "https://static.cargurus.com/images/forsale/2021/02/16/06/20/1957_chevrolet_bel_air-pic-4273750181702113775-1024x768.jpeg",
        "https://static.cargurus.com/images/forsale/2021/02/12/09/43/1957_chevrolet_bel_air-pic-5717616154681740448-1024x768.jpeg",
        "https://static.cargurus.com/images/forsale/2021/02/12/09/43/1957_chevrolet_bel_air-pic-5124828923542104406-1024x768.jpeg"
    ],
    "description": "En Venta Bel Air '57\nUn auto muy coleccionable con algunos extras",
    "price": 1344760,
    "advertiserId": "6046eae92a50398baa2b4c4b"
}
```

**PurchaseRequest**
ElRegistro de una peticion de compra (Purchase Request) Debe tener un cuerpo como el siguiente:
```json
{
    "carId": "6046eae92a50398baa2b4c4b",
    "advertiserId": "bae86cba6e836baeafa8b65f",
    "PurchaserId": "6a8ef5b86a8fbaf8ababef8b",
    "status": "in-deal"
}
```

#### Consultas complejas a la BD de datos

**Primera consulta compleja:** *Usuarios que son de Morelos y CDMX*
```bash
db.user.find({$or: [{"location": /Morelos$/}, {"location": /CDMX$/}]});
```
![Mongo-db-ComplexQuery1](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/assets/img/DB_ComplexQuery1.png?raw=true)
----
**Segunda consulta Compleja:** *Carros de marca Chevrolet con un precio menor de $190,000.*
```bash
db.car.find({$and: [{"make": "Chevrolet"}, {"price": {$lt: 190000}}]});
```
![Mongo-db-ComplexQuery2](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/assets/img/DB_ComplexQuery2.png?raw=true)

**Tercera consulta compleja:** *Peticiones de compra de algún carro que fueron rechazadas antes del 2020.*
```bash
db.purchase_request.find({$and: [{"status": "Rejected"}, {"creationDate": {$lt: "2020-01-01"}}]});
```
![Mongo-db-ComplexQuery3](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/assets/img/DB_ComplexQuery3.png?raw=true)

**Cuarta consulta compleja:** *Usuarios que solamente son compradores.*
```bash
db.user.find({$and: [{"typeOfUser":"Purchaser"}, {"typeOfUser":{$size:1}}]});
```
![Mongo-db-ComplexQuery4](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/assets/img/DB_ComplexQuery4.png?raw=true)

**Quinta consulta compleja:** Carros con menos de 100,000 kilómetros recorridos, de un año menor o igual a 2000 y de color blanco.
```bash
db.car.find({$and: [{"mileage":{$lt: 100000}},
{"year":{$lte: 2000}},{"color":"White"}]});
```
![Mongo-db-ComplexQuery5](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/assets/img/DB_ComplexQuery5.png?raw=true)

----
## Swagger

#### Base URL: [https://team8-api.herokuapp.com/v1](https://team8-api.herokuapp.com/v1)

El ***[Documento Swagger](https://github.com/JILSE7/API-REST-/blob/dev/BrandonAlberto/Swagger-Team8.pdf)*** Explica al usuario las diversas peticiones que se pueden realizar a nuestra API

> #### Peticiones sobre USER (usuarios)
>
> ![User-Request#1](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/assets/img/Swagger/userSwaggerRequest1.png?raw=true)
>
> ![User-Request#2](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/assets/img/Swagger/userSwaggerRequest2.png?raw=true)
>
> ![User-Request#3](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/assets/img/Swagger/userSwaggerRequest3.png?raw=true)
> 
> ![User-Request#4](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/assets/img/Swagger/userSwaggerRequest4.png?raw=true)
>
> ![User-Request#4](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/assets/img/Swagger/userSwaggerRequest5.png?raw=true)

> #### Peticiones sobre CAR (autos)
>
> ![Car-Request#1](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/assets/img/Swagger/carSwaggerRequest1.png?raw=true)
>
> ![Car-Request#2](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/assets/img/Swagger/carSwaggerRequest2.png?raw=true)
>
> ![Car-Request#3](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/assets/img/Swagger/carSwaggerRequest3.png?raw=true)
>
> ![Car-Request#4](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/assets/img/Swagger/carSwaggerRequest4.png?raw=true)
>
> ![Car-Request#5](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/assets/img/Swagger/carSwaggerRequest5.png?raw=true)

> #### Peticiones sobre PURCHASEREQUEST (peticiones de compra)
>
> ![PurchaseRequest-Request#1](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/assets/img/Swagger/purchaseSwaggerRequest1.png?raw=true)
>
> ![PurchaseRequest-Request#2](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/assets/img/Swagger/purchaseSwaggerRequest2.png?raw=true)
>
> ![PurchaseRequest-Request#3](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/assets/img/Swagger/purchaseSwaggerRequest3.png?raw=true)
>
> ![PurchaseRequest-Request#4](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/assets/img/Swagger/purchaseSwaggerRequest4.png?raw=true)
>
> ![PurchaseRequest-Request#5](https://github.com/JILSE7/API-REST-/blob/dev/AntonioMillan/assets/img/Swagger/purchaseSwaggerRequest5.png?raw=true)