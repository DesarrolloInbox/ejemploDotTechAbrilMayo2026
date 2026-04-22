# Aaaa

Angular 21 - Proyecto base

## Descripción

Aplicación web de héroes/villanos desarrollada con Angular. Permite visualizar una lista de héroes con sus poderes y modificar sus atributos (inteligencia, velocidad, fuerza, etc.) mediante comunicación entre componentes.

## Tecnologías

- **Framework**: Angular 21.1.0
- **Lenguaje**: TypeScript 5.9.2
- **RxJS**: 7.8.0
- **Build**: Angular CLI

## Estructura

```
src/
├── app/
│   ├── componentes/
│   │   ├── item-heroe/    # Componente individual de héroe
│   │   └── lista-heroe/  # Componente de lista de héroes
│   ├── compartido/
│   │   └── interfaces/  # Interfaces compartidas
│   ├── app.ts           # Componente raíz
│   ├── app.html         # Template principal
│   └── app.config.ts    # Configuración
├── index.html
└── styles.css
```

## Comandos

- `ng serve` - Servidor desarrollo (http://localhost:4200)
- `ng build` - Build producción
- `ng generate component` - Generar nuevo componente

## Componentes

- **item-heroe**: Muestra información de un héroe con imagen, nombre y poderes. Permite incrementar/decrementar atributos mediante botones.
- **lista-heroe**: Lista de héroes que usa el componente item-heroe para renderizar cada elemento.

## Interfaces

- **Heroe**: Define la estructura de un héroe (nombre, imagen, poderes)
- **HeroeCambioPoderes**: Define los cambios de poderes entre componentes