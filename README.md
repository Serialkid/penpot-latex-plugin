# Penpot LaTeX Renderer Plugin

**Permet d'insérer des équations LaTeX dans Penpot en tant que SVG** via KaTeX.

## Installation

1. Clone ce dépôt :
   ```bash
   git clone https://github.com/TON_USER/penpot-latex-plugin.git
   cd penpot-latex-plugin
   ```

2. (Optionnel) Installe KaTeX via NPM si tu préfères :
   ```bash
   npm install katex
   ```

3. Ouvre Penpot → **Settings** → **Plugins** → **Load unpacked plugin**
4. Sélectionne le dossier `penpot-latex-plugin`

## Utilisation

- Dans ton document Penpot, ouvre **Plugins** → **LaTeX Renderer**.
- Tape ton code LaTeX dans la zone prévue.
- Clique **Render & Insert** pour générer et insérer le SVG.

## Personnalisation

- Modifie `ui.js` pour changer les options KaTeX (ajoute `macros`, `errorColor`, etc.).
- Mets à jour `plugin.json` pour adapter le titre ou l'icône.

## Contribution

Les contributions sont bienvenues !
Ouvre une issue ou une pull request sur GitHub.
