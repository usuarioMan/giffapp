# CREANDO UNA LISTA DE CATEGORIAS (76)
## Almacenamiento de Categorías

- **Uso de Hook de Estado**: Para almacenar las categorías, utilizamos el hook `useState` proporcionado por React. Creamos un estado llamado `categorias` para mantener la lista de categorías.
  
  ```javascript
  const [categorias, setCategorias] = useState(['One Punch']);
  ```

- **Inicialización de Arreglo**: Inicializamos el estado `categorias` con un arreglo que contiene al menos una categoría. Por ejemplo, `'One Punch'`.

- **Renderización de Lista Ordenada**: Utilizamos el elemento `<ol>` (order list) para renderizar una lista ordenada. Cada ítem de la lista será representado por un `<li>` (list item).

  ```javascript
  <ol>
    {categorias.map((categoria, index) => (
      <li key={index}>{categoria}</li>
    ))}
  </ol>
  ```

## Utilización del Método `map`

- **Transformación de Elementos**: Usamos el método `map` en el arreglo de categorías para transformar cada elemento en un elemento `<li>`. El método `map` itera sobre cada categoría en el arreglo y crea elementos `<li>` correspondientes.

- **Key Prop**: Agregamos una prop `key` única a cada elemento `<li>` generado por el método `map`. La prop `key` ayuda a React a identificar elementos de manera eficiente durante las actualizaciones.

## Nota Importante

- **Posicionamiento de Hooks**: Los hooks en React son posicionales. No se deben poner condicionales alrededor de los hooks, ya que esto puede romper la relación entre el hook y el estado correspondiente.

## Conclusiones

En esta clase, aprendimos a utilizar el hook de estado `useState` para almacenar y actualizar una lista de categorías en una aplicación React. Utilizamos el método `map` para transformar los elementos del arreglo de categorías en elementos `<li>` de una lista ordenada. Además, comprendimos la importancia de mantener las reglas y buenas prácticas al utilizar los hooks en nuestra aplicación.

En la próxima clase, exploraremos cómo insertar nuevos elementos en la lista de categorías y seguiremos mejorando nuestra aplicación en React.

# AGREGAR UNA NUEVA CATEGORIA (77)

En esta parte de la clase, abordamos cómo agregar una nueva categoría a una lista existente utilizando React. Aprendimos dos enfoques diferentes para lograrlo: mediante la manipulación de un nuevo arreglo y a través de la desestructuración del estado anterior. A continuación, se resumen los pasos clave:

## Agregando una Categoría (Método 1: Creando un Nuevo Arreglo)

1. **Creación de la Función**: Definimos una función llamada `addCategory` que será llamada cuando se haga clic en el botón "Agregar".

2. **Evento OnClick**: Asignamos la función `addCategory` al evento `onClick` del botón de agregar.

   ```javascript
   const addCategory = () => {
     const newCategory = 'Valoran'; // Nueva categoría a agregar
     setCategorias([...categorias, newCategory]); // Creación de un nuevo arreglo con la nueva categoría
   };
   ```

3. **Actualización del Estado**: Dentro de la función `addCategory`, creamos un nuevo arreglo que contiene todas las categorías existentes más la nueva categoría. Luego, actualizamos el estado utilizando `setCategorias` con el nuevo arreglo.

## Agregando una Categoría (Método 2: Desestructuración)

1. **Creación de la Función**: Definimos una función llamada `addCategory` de manera similar al método anterior.

2. **Evento OnClick**: Asignamos la función `addCategory` al evento `onClick` del botón de agregar.

   ```javascript
   const addCategory = () => {
     const newCategory = 'Valoran'; // Nueva categoría a agregar
     setCategorias([newCategory, ...categorias]); // Desestructuración y creación de un nuevo arreglo
   };
   ```

3. **Actualización del Estado**: Utilizamos la desestructuración para crear un nuevo arreglo que incluya la nueva categoría al principio, seguida de todas las categorías existentes. Luego, actualizamos el estado con `setCategorias`.

## Conclusiones

En esta parte de la clase, aprendimos cómo agregar una nueva categoría a una lista de categorías existente en una aplicación React. Exploramos dos enfoques: crear un nuevo arreglo y desestructurar el estado para incluir la nueva categoría. Ambos métodos son válidos y pueden ser utilizados según las preferencias personales y los requisitos específicos del proyecto.


# Componente AddCategory

En esta parte de la clase, continuamos trabajando en la funcionalidad de agregar categorías. En esta ocasión, se abordó la creación de un componente de entrada de texto (`input`) que permite al usuario escribir el nombre de una nueva categoría. Además, se implementó la lógica para capturar el evento de presionar la tecla "Enter" y enviar la nueva categoría al componente padre.

## Creación del Componente de Entrada de Texto

Se creó un nuevo componente llamado `AddCategory` con la función de flecha `const AddCategory = () => {...}`. Este componente contiene un formulario con un elemento `input` donde el usuario puede escribir el nombre de la nueva categoría. Se utilizó un atributo `placeholder` para proporcionar una pista al usuario sobre lo que debe escribir en el campo.

```javascript
import React from 'react';

const AddCategory = () => {
  const handleInputChange = (event) => {
    // Lógica para manejar el cambio en el valor del input
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Lógica para manejar el envío del formulario
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        onChange={handleInputChange}
      />
    </form>
  );
};

export default AddCategory;
```

## Capturando el Evento de Cambio y Envío

Dentro del componente `AddCategory`, se definieron dos funciones: `handleInputChange` y `handleFormSubmit`.

- `handleInputChange`: Esta función se dispara cada vez que el usuario escribe en el campo de entrada. La función captura el evento y puede acceder al valor actual del input mediante `event.target.value`.

- `handleFormSubmit`: Esta función se dispara cuando el usuario presiona la tecla "Enter" mientras está dentro del campo de entrada. Se previene el comportamiento predeterminado del formulario (que normalmente provocaría un refresco de la página) utilizando `event.preventDefault()`. Luego, se puede ejecutar la lógica necesaria para enviar la nueva categoría al componente padre.

## Comunicación entre Componentes

En la siguiente lección, se abordará la comunicación entre el componente `AddCategory` y el componente padre que maneja la lista de categorías. Se implementará la lógica para agregar la nueva categoría a la lista de categorías existente.

Recuerda que este enfoque sigue las buenas prácticas de React, donde cada componente se enfoca en una única responsabilidad, lo que facilita la organización y el mantenimiento del código.

¡Continuaremos en la próxima lección!


