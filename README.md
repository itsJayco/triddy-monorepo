# Triddy Monorepo

Este es un monorepo creado con Nx para gestionar múltiples aplicaciones y librerías, incluyendo una aplicación Angular basada en la API de Rick and Morty.

## Estructura del proyecto

El monorepo sigue la estructura recomendada por Nx para organizar aplicaciones y bibliotecas reutilizables:

```
└── 📁triddy-monorepo
    [...]
    └── 📁apps
        └── 📁rick-and-morty-app
            └── 📁public
                └── favicon.ico
                └── header.png
            └── 📁src
                └── 📁app
                    └── 📁characters
                        └── characters.component.html
                        └── characters.component.scss
                        └── characters.component.spec.ts
                        └── characters.component.ts
                    └── 📁characters-details
                        └── characters-details.component.html
                        └── characters-details.component.scss
                        └── characters-details.component.spec.ts
                        └── characters-details.component.ts
                    └── app.component.html
                    └── app.component.scss
                    └── app.component.spec.ts
                    └── app.component.ts
                    └── app.config.ts
                    └── app.routes.ts
                    └── nx-welcome.component.ts
                    └── rick-and-morty.service.spec.ts
                    └── rick-and-morty.service.ts
                └── 📁environments
                    └── environment.prod.ts
                    └── environment.ts
                └── index.html
                └── main.ts
                └── styles.scss
                └── test-setup.ts
            └── .eslintrc.json
            └── jest.config.ts
            └── project.json
            └── tsconfig.app.json
            └── tsconfig.editor.json
            └── tsconfig.json
            └── tsconfig.spec.json
    └── 📁libs
        └── 📁shared-lib
            └── 📁src
                └── 📁lib
                    └── 📁character-card
                        └── character-card.component.html
                        └── character-card.component.scss
                        └── character-card.component.spec.ts
                        └── character-card.component.ts
                    └── 📁models
                        └── character.model.ts
                    └── 📁shared-lib
                        └── shared-lib.component.css
                        └── shared-lib.component.html
                        └── shared-lib.component.spec.ts
                        └── shared-lib.component.ts
                └── index.ts
                └── test-setup.ts
            └── .eslintrc.json
            └── jest.config.ts
            └── ng-package.json
            └── project.json
            └── README.md
            └── tsconfig.json
            └── tsconfig.lib.json
            └── tsconfig.spec.json
    └── .editorconfig
    └── .eslintignore
    └── .eslintrc.json
    └── .gitignore
    └── .prettierignore
    └── .prettierrc
    └── jest.config.ts
    └── jest.preset.js
    └── nx.json
    └── package-lock.json
    └── package.json
    └── README.md
    └── tsconfig.base.json
    └── vercel.json
```

## Tecnologías utilizadas

- **Angular**: Framework de desarrollo frontend para construir aplicaciones SPA.
- **Nx**: Herramienta de monorepos para organizar aplicaciones y bibliotecas reutilizables.
- **TypeScript**: Superset de JavaScript para tipado estático.
- **SCSS**: Preprocesador CSS para escribir estilos de manera modular.
- **Jest**: Framework de testing utilizado para realizar pruebas unitarias.

## Configuración y uso

### Requisitos previos

- Node.js v16+
- npm v7+
- Nx CLI instalado globalmente

```bash
npm install -g nx
```

### Requisitos previos

Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/usuario/triddy-monorepo.git
```

Navega al directorio del proyecto y ejecuta la instalación de dependencias:

```bash
cd triddy-monorepo
npm install
```

### Ejecutar el proyecto

Para levantar la aplicación de Rick and Morty en un servidor de desarrollo:

```bash
nx serve rick-and-morty-app
```

La aplicación estará disponible en http://localhost:4200.

### Compilar el proyecto
Para compilar la aplicación para producción:

```bash
nx build rick-and-morty-app --prod
```
Los archivos compilados estarán en dist/apps/rick-and-morty-app/browser
