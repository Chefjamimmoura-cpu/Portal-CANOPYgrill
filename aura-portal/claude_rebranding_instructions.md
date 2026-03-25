# Rebranding: Canopy Grill para Moods Steakhouse

Claude, o usuário solicitou uma grande atualização de marca no projeto React (`aura-portal`).
A marca anterior ("Canopy Grill Steakhouse" / Hotel "AURA") mudou para **"Moods"** (ou "Moods Steakhouse").

## O que você precisa fazer:
### 1. Atualizar Logos
- Copiar os arquivos na pasta `../Logo Steakhouse/` (SVG e PNG) para a pasta de assets (`public/assets/logos/`) do projeto.
- Atualizar todos os caminhos de imagens nos componentes (`App.tsx`, `Navigation.tsx`, etc) para refletir os novos logos da Moods e da Aura.

### 2. Atualizar Nomenclaturas
- Substituir textos como "Canopy Grill Steakhouse" e "Canopy" por "Moods" ou "Moods Steakhouse" em todo o front-end (HeroSection, BrandSection, Navigation, App.tsx, etc).

### 3. Extrair e Aplicar Cores da Nova Marca
- O usuário disponibilizou arquivos PDF (`moods COLOR.pdf`, `apresentação da logomarca moods.pdf`, etc) na pasta `../Logo Steakhouse/`.
- **Sua Tarefa Crítica:** Extrair as cores exatas (HEX codes) da marca "Moods" a partir dos SVGs ou dos PDFs e aplicar essas novas cores de superfície, primária e texto no arquivo `tailwind.config.js` (`colors: { aura: { ... } }`).
- Garantir que as fontes (`fontFamily`) também estejam corretas de acordo com a nova identidade visual.

Por favor, execute o plano de desenvolvimento em etapas e peça confirmação do usuário se houver alguma ambiguidade visual que você não consiga resolver.
