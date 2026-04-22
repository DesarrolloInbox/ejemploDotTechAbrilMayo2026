# Aaaa

Angular 21 - Proyecto base

## Descripción

Aplicación web básica generada con Angular CLI. Actualmente muestra una página de bienvenida con el componente `item-heroe` incorporado.

## Tecnologías

- **Framework**: Angular 21.1.0
- **Lenguaje**: TypeScript 5.9.2
- **RxJS**: 7.8.0
- **Build**: Angular CLI

## Estructura

```
src/
├── app/
│   ├── componentes/item-heroe/  # Componente de ejemplo
│   ├── app.ts                   # Componente raíz
│   ├── app.html                 # Template principal
│   └── app.config.ts            # Configuración
├── index.html                  # Entry point
└── styles.css                  # Estilos globales
```

## Comandos

- `ng serve` - Servidor desarrollo (http://localhost:4200)
- `ng build` - Build producción

## Componentes

- **item-heroe**: Componente standalone en `src/app/componentes/item-heroe/`