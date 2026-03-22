# LEVANTAMENTO COMPLETO DE HARDWARE/EQUIPAMENTOS
*Documento exato, sem resumos. Gerado com base em todas as interações e injeções de código brutas realizadas.*

Abaixo está o despejo literal **(RAW DATA)** de todo o banco de dados de Fichas Técnicas (SPECS) que foi construído com as suas instruções hoje, letra por letra, vírgula por vírgula, bem como as URLs fornecidas.

## 1. DADOS BRUTOS (Fichas Técnicas Injetadas)
O código abaixo é a base de dados exata injetada no portal, contendo os detalhes fornecidos:

```javascript
const SPECS = {
  ice_machine: {
    badge: 'Manitowoc / Avantco · US',
    name: 'Máquina de Gelo Profissional (Modular)',
    role: 'Gelo em Cubo para Soft Drinks e Preparo · Até 530 lbs/dia',
    specs: [['Modelo Base', 'Manitowoc IDT0450A + D570 Bin'],['Capacidade', 'Até 470 lbs (~213 kg) por dia'],['Armazenamento', 'Até 532 lbs (~241 kg) no D570'],['Tipo de Gelo', 'Dice ou Half-Dice'],['Tecnologia', 'easyTouch display, limpeza automática']],
    desc: 'Equipamento modular de alta capacidade para abastecimento total do bar e cozinha.',
    links: [
      { label: '→ Manitowoc IDT0450A w/ D570 Bin (Katom)', url: 'https://www.katom.com/399-IDT0450AD570.html' },
      { label: '→ Hoshizaki KM-116BAJ (Katom)', url: 'https://www.katom.com/440-KM116BAJ.html' },
      { label: '→ Avantco KMC-F-530-LA (Webstaurant)', url: 'https://www.webstaurantstore.com/avantco-ice-kmc-f-530-la-30-air-cooled-modular-full-cube-ice-machine-with-ice-bin-497-lb/194KMCF530LA.html' },
      { label: '→ Manitowoc IYP0500A (CulinaryDepot)', url: 'https://www.culinarydepotinc.com/manitowoc-iyp0500a-air-cooled-half-dice-ice-machine-with-bin-440-lb/' }
    ]
  },
  hobart_amtl: {
    badge: 'Hobart · US', name: 'Lavadora Hobart AMTL', role: 'Lavagem Avançada',
    specs: [['Modelo', 'AMTL Two Level Door Type'],['Tensão', '208-240V, 3 Fase'],['Capacidade', 'Até 80 racks/hora'],['Consumo', '0.62 gal/rack']],
    desc: 'Lavadora estilo porta com dois níveis e alta capacidade.',
    links: [{ label: '→ Hobart AMTL (Webstaurant)', url: 'https://www.webstaurantstore.com/hobart-amtl-two-level-door-type-advansys-ventless-commercial-dishwasher-208-240v-3-phase/425AMTL2083.html' }]
  },
  ecomax_gw: {
    badge: 'Hobart · US', name: 'Hobart Ecomax 403', role: 'Lavadora de Copos · 60 Gavetas/h',
    specs: [['Capacidade', 'Até 60 racks/hora'],['Design', 'Undercounter compacto']],
    desc: 'Solução ideal para higiene rápida das taças do bar.',
    links: [{ label: '→ Hobart Ecomax', url: 'https://www.hobartcorp.com' }]
  },
  quiet_blender: {
    badge: 'Vitamix · US', name: 'Vitamix The Quiet One (36019)', role: 'Liquidificador Silencioso para Bar',
    specs: [['Motor', '3 HP Peak · 120V'],['Copo', '1.4L Tritan BPA-free'],['Isolamento', 'Cúpula magnética anti-ruído'],['Programação', '6 botões · 34 ciclos']],
    desc: 'Padrão-ouro para bares high-end. Permite drinks frozen sem atrapalhar o clima do salão.',
    links: [
      { label: '→ Vitamix The Quiet One (Webstaurant)', url: 'https://www.webstaurantstore.com/vitamix-36019-abab-the-quiet-one-3-hp-blender-with-cover-and-48-oz-container-120v/96536019.html' },
      { label: '→ Santos Stille Barblender 62A (Horeca)', url: 'https://www.horeca.com/nl/product/42377/santos-stille-barblender-62a' }
    ]
  },

  rational10: {
    badge: 'Rational AG · Alemanha · Modelo ICP 10-1/1 E / G',
    name: 'iCombi Pro 10 GN 1/1',
    role: 'Forno Combinado Principal — Cocção, Vapor, Convecção, Assar, Grelhar',
    specs: [
      ['Capacidade', '10 bandejas GN 1/1 — 80 a 150 refeições/dia'],
      ['Dimensões', '850 × 842 × 1014 mm (L × P × A)'],
      ['Elétrico', '400 V / 18,9 kW trifásico (versão elétrica)'],
      ['Gás', '22 kW — disponível em gás natural ou GLP'],
      ['Temperatura', '30°C a 300°C'],
      ['Assistentes IA', 'iDensityControl · iCookingSuite · iProductionManager · iCareSystem'],
      ['Limpeza', '9 programas · auto em 12 min · noturna sem supervisão'],
      ['Conectividade', 'Wi-Fi + Ethernet · ConnectedCooking · HACCP automático'],
      ['Garantia Rational', 'Peças disponíveis por 10 anos'],
    ],
    desc: 'O coração da cozinha do AURA. Monitora cada nível individualmente, ajusta temperatura, umidade e tempo em tempo real. Para 120 lugares em 2 turnos — processa cargas mistas sem transferência de sabores. Compra via WebstaurantStore (EUA) com entrega internacional.',
    links: [
      { label: '→ Fabricante oficial (rational-online.com)', url: 'https://www.rational-online.com/en_us/icombi-pro/models/' },
      { label: '→ Compra EUA — WebstaurantStore', url: 'https://www.webstaurantstore.com/rational-icombi-pro-10-pan-full-size-natural-gas-combi-oven-208-240v-1-phase/645ICP102NI.html' },
      { label: '→ [NL] Horeca.com (NL) — iCombi Pro 10-1/1G', url: 'https://www.horeca.com/en/product/67424/rational-icombi-pro-10-1-1g-gas-combi-steamer' },
      { label: '→ [NL] Rational Nederland (rational.nl)', url: 'https://rational.nl/' }
    ]
  },
  rational6: {
    badge: 'Rational AG · Alemanha + VarioSmoker Ref. 60.75.367',
    name: 'iCombi Pro 6-Full Size + VarioSmoker',
    role: 'Forno com Defumação Integrada — Garde Manger, Sobremesas, Defumados',
    specs: [
      ['Capacidade forno', '6 bandejas GN 2/1 ou 12 bandejas GN 1/1'],
      ['Elétrico', '208/240 V · 22,4 kW trifásico'],
      ['VarioSmoker', 'Mod. 60.75.367 · USB · 120V/NEMA 5-15P · madeira, pellets'],
      ['Modo de uso', 'Defuma e cozinha simultaneamente — sem defumador dedicado'],
      ['Temperatura', '85°F–572°F (30°C–300°C)'],
      ['Modos', '6 modos de operação · 5 métodos de cocção'],
      ['Praça', 'Sobremesas · tutano defumado · peixes e vegetais especiais'],
    ],
    desc: 'O VarioSmoker conecta via USB e permite defumação e cocção simultâneas — economizando espaço e investimento. Funciona com qualquer lasca ou pellet de madeira. Ideal para tutano defumado, peixes e pratos de assinatura.',
    links: [
      { label: '→ Smoking com iCombi Pro (rational-online.com)', url: 'https://www.rational-online.com/en_us/icombi-pro/applications/smoking/' },
      { label: '→ VarioSmoker — WebstaurantStore', url: 'https://www.webstaurantstore.com/rational-variosmoker-for-combi-ovens/703-6075367.html' },
      { label: '→ [NL] Horeca.com (NL) — iCombi Pro 6 elétrico', url: 'https://www.horeca.com/en/product/67417/rational-icombi-pro-6-1-1e-electric-combi-steamer' },
      { label: '→ [NL] Rational Nederland', url: 'https://rational.nl/' }
    ]
  },
  espeto: {
    badge: 'Scheer · Brasil — Linha Profissional',
    name: 'Churrasqueira Profissional + Espeto Rotativo',
    role: 'Sistema Parrilla + Rodízio — Modo B · Espetos simultâneos + lenha',
    specs: [
      ['Modelo', 'Scheer Super 575 — Linha Profissional'],
      ['Sistema', 'Grelha parrilla argentina + rodízio motorizado integrado'],
      ['Combustível', 'Lenha ou carvão — chama viva, autêntica'],
      ['Espetos', '4 a 6 espetos simultâneos — velocidade variável'],
      ['Cap./espeto', 'Picanha 1–1,5 kg · Frango 6–8 coxas · Costela 1–1,2 kg'],
      ['Tensão', 'Verificar compatibilidade com 110/220V Guiana'],
      ['Prioridade', 'P1 CRÍTICO — adquirir 6–10 semanas antes da abertura'],
    ],
    desc: 'O espeto rotativo é o elemento central do Modo B (Rodízio). O passador carrega o espeto até a mesa, anuncia o corte em voz alta e fatia diretamente no prato — criando o serviço teatral inédito em Georgetown. Relação: 1 passador para cada 15 lugares = 8 passadores ativos para 120 lugares.',
    links: [
      { label: '→ Scheer Super 575 — Linha Profissional (Brasil)', url: 'https://www.scheer.com.br/collections/linha-profissional/products/churrasqueira-profissional-scheer-super-575' },
      { label: '→ [NL] Maxima Kitchen Equipment (NL)', url: 'https://www.maxima-kitchen.nl/en/c/bbq-grills' },
      { label: '→ [NL] Horeca.com (NL) — Churrasqueiras', url: 'https://www.horeca.com/en/grills' }
    ]
  },
  robotcoupe_cl50: {
    badge: 'Robot Coupe · França · Modelo CL50E',
    name: 'Robot Coupe CL50',
    role: 'Robô de Cortes — Garde Manger, Saladas, Mise en Place em Volume',
    specs: [
      ['Processamento', 'Contínuo — disco de corte rotativo 375 RPM'],
      ['Motor', '0,75 HP · 550W'],
      ['Acessórios', 'Disco 2mm/4mm · ralador · fatiador · juliana'],
      ['Dimensões', '240 × 330 × 540 mm'],
      ['Tensão', '220V / 60Hz'],
      ['Aplicações', 'Mise en place de legumes · saladas · batata · cenoura em volume'],
    ],
    desc: 'Essencial para produzir mise en place de legumes em volume para 120 lugares em 2 turnos. Reduz drasticamente o tempo de pré-preparo da brigada de garde manger. Robot Coupe é padrão mundial para processadores profissionais.',
    links: [
      { label: '→ Robot Coupe oficial internacional', url: 'https://www.robot-coupe.com/export/en' },
      { label: '→ Distribuidor Brasil — Pucci Cozinhas', url: 'https://robotcoupe.puccicozinhas.com.br/' },
      { label: '→ Compra EUA — WebstaurantStore', url: 'https://www.webstaurantstore.com/robot-coupe-cl50e-continuous-feed-food-processor-with-5-discs-120v/389CL50E.html' },
      { label: '→ [NL] Horeca.com (NL) — Robot Coupe CL50', url: 'https://www.horeca.com/en/merk/43/robot-coupe' },
      { label: '→ [NL] Robot Coupe Holanda (horeca.com)', url: 'https://www.horeca.com/nl/merk/43/robot-coupe' }
    ]
  },
  robotcoupe_r301: {
    badge: 'Robot Coupe · França · Modelo R301',
    name: 'Robot Coupe R301 — Cutter',
    role: 'Cutter / Processador Bowl 3,7L — Emulsões, Fondos, Massas',
    specs: [
      ['Bowl', '3,7 litros em inox'],
      ['Velocidades', '1.500 / 3.000 RPM · 2 velocidades'],
      ['Motor', '0,75 HP · 550W'],
      ['Tensão', '220V / 60Hz'],
      ['Aplicações', 'Emulsões · mousses · chimichurri em volume · ragù · fondos de carne'],
    ],
    desc: 'Complementa o CL50 na garde manger. O duplo bowl e as duas velocidades permitem trabalhar com preparações delicadas (mousses) e cortes rápidos (ragù, chimichurri). Standard ouro em cozinhas de referência.',
    links: [
      { label: '→ Robot Coupe oficial internacional', url: 'https://www.robot-coupe.com/export/en' },
      { label: '→ Distribuidor Brasil — Pucci Cozinhas', url: 'https://robotcoupe.puccicozinhas.com.br/' },
      { label: '→ Compra EUA — WebstaurantStore', url: 'https://www.webstaurantstore.com/robot-coupe-r301-ultra-3-7-qt-commercial-food-processor/389R301ULTRA.html' },
      { label: '→ [NL] Horeca.com (NL) — Robot Coupe R301', url: 'https://www.horeca.com/en/merk/43/robot-coupe' }
    ]
  },
  hobart: {
    badge: 'Hobart · EUA · Modelo Legacy+ HL200 — 20 Qt.',
    name: 'Batedeira Planetária 20 Qt / 18L',
    role: 'Confeitaria, Padaria e Massas Artesanais',
    specs: [
      ['Capacidade', '20 Qt (18,9 L) — bowl de inox'],
      ['Motor', '3/4 HP · sistema VFDadvantage'],
      ['Velocidades', '3 velocidades + Stir Speed + Shift-on-the-Fly'],
      ['Tensão', '120V / 60Hz · monofásico'],
      ['Acessórios', 'Gancho · pá misturadora · batedor (arame) inclusos'],
      ['Aplicações', 'Pão artesanal · massa de empanada · chantilly · pappardelle · tiramisu'],
    ],
    desc: 'Suporta o padeiro e confeiteiro na produção diária de pão artesanal, massa fresca de tagliatelle, pappardelle, chantilly e massa de empanada argentina. Hobart é o padrão ouro em batedeiras planetárias comerciais com décadas de uso em cozinhas profissionais.',
    links: [
      { label: '→ Hobart Legacy+ Countertop Mixers (hobartcorp.com)', url: 'https://www.hobartcorp.com/products/food-prep/mixers/legacy-plus-countertop-mixer' },
      { label: '→ Compra EUA — WebstaurantStore', url: 'https://www.webstaurantstore.com/hobart-hl200-legacy-20-qt-mixer-with-standard-attachments/494HL200.html' },
      { label: '→ [NL] Horeca.com (NL) — Batedeiras Planetárias', url: 'https://www.horeca.com/en/mixers' }
    ]
  },
  laminador: {
    badge: 'Berkel · EUA/Itália · Linha Commercial',
    name: 'Laminador de Frios Automático',
    role: 'Fatiamento de Frios, Charcutaria e Presunto Cru',
    specs: [
      ['Lâmina', '300 a 350 mm · inox temperado afiado'],
      ['Espessura', '0 a 15 mm regulável'],
      ['Motor', '0,3 HP · automático'],
      ['Tensão', '220V / 60Hz'],
      ['Aplicações', 'Presunto cru · copa · salame · fatiados para tábua de charcutaria'],
    ],
    desc: 'Necessário para a tábua de queijos e charcutaria (item do cardápio) e para o mise en place da brigada de garde manger. O laminador automático garante espessura uniforme e segurança operacional.',
    links: [
      { label: '→ Berkel Commercial Slicers (berkelpro.com)', url: 'https://www.berkelpro.com/commercial-slicers' },
      { label: '→ Compra EUA — WebstaurantStore', url: 'https://www.webstaurantstore.com/berkel-slicers/' },
      { label: '→ [NL] Horeca.com (NL) — Fatiadores / Slicers', url: 'https://www.horeca.com/en/slicers' }
    ]
  },
  moedor: {
    badge: 'Weston / LEM Products · EUA',
    name: 'Moedor de Carne Profissional',
    role: 'Steak Tartare, Hambúrguer Artesanal e Ragù Fresco',
    specs: [
      ['Capacidade Weston 22', '#22 · 720 kg/h · motor 3/4 HP'],
      ['LEM BigBite 32', '#32 · 1.360 kg/h · dupla moagem'],
      ['Tensão', '110/120V · monofásico'],
      ['Discos inclusos', 'Fino 3mm · médio 6mm · grosso 10mm'],
      ['Aplicações', 'Steak Tartare · Ragù al Tagliatelle · hambúrguer da casa'],
    ],
    desc: 'O Steak Tartare é item nobre do cardápio AURA. O moedor garante carne cortada sempre fresca — sem oxidação. Dois modelos indicados: Weston Pro #22 para uso moderado ou LEM BigBite #32 para maior volume com dupla moagem.',
    links: [
      { label: '→ Weston Pro Series #22 (westonbrands.com)', url: 'https://westonbrands.com/products/weston-pro-series-22-meat-grinder-10-2201-w' },
      { label: '→ LEM BigBite #32 DualGrind (lemproducts.com)', url: 'https://lemproducts.com/products/32-bigbite-dualgrind-bundle.html' },
      { label: '→ [NL] Horeca.com (NL) — Moedores de Carne', url: 'https://www.horeca.com/en/meat-mincers' }
    ]
  },
  seladora: {
    badge: 'Henkelman · Holanda · Modelo Aura',
    name: 'Seladora a Vácuo Henkelman Aura',
    role: 'Conservação, Sous Vide e Organização de Estoque',
    specs: [
      ['Modelo', 'Henkelman Aura (linha profissional para gastronomia)'],
      ['Vácuo máximo', '99,8% de remoção de oxigênio'],
      ['Painel', 'H-touch · touchscreen com produtos pré-programados · I-vac'],
      ['Opções', 'Liquid Control · marinating · multistep vacuum'],
      ['Tensão', '220V / 50-60Hz · monofásico (plug & play)'],
      ['País', 'Fabricado na Holanda — parceiro estratégico da Guiana'],
      ['Integração', 'Funciona com o Termocirculador Sous Vide'],
    ],
    desc: 'A Henkelman tem um modelo chamado "Aura" — coincidência feliz. O painel H-touch seleciona o produto e configura automaticamente o vácuo ideal. Essencial para FIFO, Sous Vide e conservação de proteínas premium. Compra direta da Holanda ou via distribuidor nos EUA.',
    links: [
      { label: '→ Henkelman Aura — Fabricante Holanda', url: 'https://henkelman.com/en/products/table-vacuuming-machine/aura' },
      { label: '→ Henkelman — Máquinas profissionais para gastronomia', url: 'https://henkelman.com/en/applications/food-service' },
      { label: '→ [NL] Henkelman (NL) — sede em Den Bosch', url: 'https://henkelman.com/en/products/table-vacuuming-machine/aura' },
      { label: '→ [NL] Horeca.com (NL) — Seladoras a Vácuo', url: 'https://www.horeca.com/en/vacuum-sealers' }
    ]
  },
  termomix: {
    badge: 'Vorwerk · Alemanha · Thermomix TM7',
    name: 'Thermomix TM7',
    role: 'Sobremesas, Molhos Finos e Preparações de Precisão',
    specs: [
      ['Capacidade', '2,2 litros · copo de inox com escala integrada'],
      ['Temperatura', '37°C a 130°C · controle preciso'],
      ['Velocidades', '10 velocidades + Turbo'],
      ['Funções', 'Cozinhar · misturar · moer · emulsionar · fermentar · pesar'],
      ['Tensão', '220V / 60Hz · 1.500W'],
      ['Aplicações', 'Crème brûlée · pudim de leite · Béarnaise · chimichurri fino'],
    ],
    desc: 'No AURA, será a estação do confeiteiro para sobremesas de precisão (crème brûlée, pudim, mousses) e do cozinheiro para molhos finos de alta margem como a Béarnaise e o Jus de Vinho Tinto.',
    links: [
      { label: '→ Thermomix TM7 — Site oficial Vorwerk', url: 'https://www.thermomix.com/products/thermomix%C2%AE-tm7%E2%84%A2' },
      { label: '→ [NL] Thermomix NL/EU', url: 'https://www.thermomix.com/products/thermomix%C2%AE-tm7%E2%84%A2' },
      { label: '→ [NL] Horeca.com (NL) — Equipamentos de cozinha', url: 'https://www.horeca.com/en' }
    ]
  },
  sousvide: {
    badge: 'PolyScience (Breville Commercial) · EUA',
    name: 'HydroPro Plus — Termocirculador Sous Vide',
    role: 'Cocção de Precisão — Proteínas, Ovos e Preparações de Temperatura Crítica',
    specs: [
      ['Modelo', 'HydroPro Plus Immersion Circulator'],
      ['Temperatura', '5°C a 99°C · precisão ±0,1°C'],
      ['Potência', '1.200W'],
      ['Vazão', '12 litros/minuto'],
      ['Tensão', '120V / 60Hz (verificar adaptador para Guiana)'],
      ['Container', '20 a 30 litros · integra com seladora Henkelman'],
      ['Aplicações', 'Costela 24h · codorna · salmão · ovos 63°C · proteínas pré-cozidas'],
    ],
    desc: 'Fundamental para o volume de 120 lugares. Permite pré-cozinhar proteínas com precisão e regenerar na parrilla na hora do serviço, garantindo ponto exato independentemente do volume. A costela 24h e o salmão são os pratos de maior benefício.',
    links: [
      { label: '→ HydroPro Plus — PolyScience Culinary (EUA)', url: 'https://polyscienceculinary.com/products/the-hydro-pro-plus-immersion-circulator' },
      { label: '→ Linha completa Sous Vide Circulators', url: 'https://polyscienceculinary.com/collections/sous-vide-circulators' },
      { label: '→ [NL] Horeca.com (NL) — Sous Vide Equipment', url: 'https://www.horeca.com/en/sous-vide' }
    ]
  },
  inducao: {
    badge: 'Bartscher · Alemanha / Linha Profissional',
    name: 'Fogão Portátil de Indução',
    role: 'Estações Auxiliares e Acabamento à Mesa',
    specs: [
      ['Potência', '3.500W · 9 níveis de potência'],
      ['Temperatura', '60°C a 240°C'],
      ['Dimensões', '290 × 360 × 64 mm (compacto, portátil)'],
      ['Tensão', '220V / 60Hz · monofásico'],
      ['Aplicações', 'Estação de finishing · molhos à la minute · flambe · fondue de mesa'],
    ],
    desc: 'Compacto e portátil. No AURA, usado para flambe de sobremesa, estação de molhos à la minute e suporte em horários de pico sem ocupar espaço fixo na linha de cocção.',
    links: [
      { label: '→ Bartscher — Fogões de Indução Profissionais', url: 'https://www.bartscher.com/en/products/induction-cookers' },
      { label: '→ Compra EUA — WebstaurantStore (indução comercial)', url: 'https://www.webstaurantstore.com/induction-ranges/' },
      { label: '→ [NL] Bartscher (DE/NL) — Indução Profissional', url: 'https://www.bartscher.com/en/products/induction-cookers' },
      { label: '→ [NL] Horeca.com (NL) — Fogões de Indução', url: 'https://www.horeca.com/en/induction-cookers' }
    ]
  },
  mixer: {
    badge: 'Robot Coupe · França · Modelo MP350 Combi Ultra',
    name: 'Robot Coupe MP350 Combi Ultra — Mixer de Imersão',
    role: 'Sopas, Purês e Emulsões em Volume',
    specs: [
      ['Modelo', 'MP350 Combi Ultra — haste profissional 350mm'],
      ['Motor', '0,5 HP — uso contínuo'],
      ['Velocidade', 'Variável com gatilho de precisão'],
      ['Tensão', '220V / 60Hz'],
      ['Acessórios', 'Haste inox 350mm · batedor · mini-cutter opcional'],
      ['Aplicações', 'Sopa de Cebola Gratinada · Purê de Batata aveludado · emulsões em panelão'],
    ],
    desc: 'O Robot Coupe MP350 Combi Ultra é o mixer de imersão mais completo do mercado profissional. O Purê de Batata aveludado e a Sopa de Cebola Gratinada — ambos no cardápio AURA — exigem emulsificação em volume dentro da própria panela.',
    links: [
      { label: '→ MP350 Combi Ultra — Pucci Cozinhas Brasil', url: 'https://robotcoupe.puccicozinhas.com.br/produto/mp-350-combi-ultra/' },
      { label: '→ Robot Coupe oficial internacional', url: 'https://www.robot-coupe.com/export/en' },
      { label: '→ [NL] Horeca.com (NL) — Robot Coupe MP350', url: 'https://www.horeca.com/nl/merk/43/robot-coupe' }
    ]
  },
  liqbr: {
    badge: 'Vitamix / Robot Coupe / Caterchef',
    name: 'Liquidificador Alta Rotação 2L',
    role: 'Molhos Finos, Vinaigrettes e Suco Premium',
    specs: [
      ['Velocidade', 'Até 37.000 a 45.000 RPM'],
      ['Copo', '2 Litros em Tritan (BPA-free) ou Inox'],
      ['Motor', '2.0 HP a 3.5 HP (Peak)'],
      ['Voltagem', '220V/60Hz']
    ],
    desc: 'Alta rotação garante molhos completamente lisos sem coar. Fundamental para processar emulsões rápidas e smoothies premium.',
    links: [
      { label: '→ Waring Commercial (Xtreme)', url: 'https://www.waringcommercialproducts.com' },
      { label: '→ Robot Coupe Kitchen Blender BL-3', url: 'https://www.horeca.com/nl/product/92746/robot-coupe-kitchen-blender-bl-3-230v-500-tot-12600-tpm' },
      { label: '→ Caterchef Blender 2-Liter', url: 'https://www.horeca.com/nl/product/29170/caterchef-blender-2-liter-537025' }
    ]
  },
  liqlenta: {
    badge: 'Vitamix Commercial · EUA',
    name: 'Vitamix Commercial — Liquidificador Baixa Rotação',
    role: 'Sucos Naturais, Chimichurri em Volume e Pré-preparo',
    specs: [
      ['Capacidade', 'Jarra 3L'],
      ['Uso', 'Baixa rotação — preserva fibras e vitaminas'],
      ['Tensão', '220V / 60Hz'],
      ['Aplicações', 'Sucos tropicais da Guiana · chimichurri base · molho cocktail'],
    ],
    desc: 'Ideal para produções em volume de pré-preparo — chimichurri base, molho cocktail, sucos naturais de frutas tropicais (maracujá, goiaba, carambola) para a caipirinha e o Rooftop Spritz.',
    links: [
      { label: '→ Vitamix Commercial — Site oficial', url: 'https://www.vitamix.com/us/en_us/commercial' },
      { label: '→ [NL] Horeca.com (NL) — Liquidificadores', url: 'https://www.horeca.com/en/blenders' }
    ]
  },
  gratinador: {
    badge: 'Bartscher / Saro · Alemanha',
    name: 'Gratinador / Salamandra Profissional',
    role: 'Crème Brûlée, Gratinados e Acabamento Premium',
    specs: [
      ['Temperatura', '50°C a 300°C · radiação infravermelha superior'],
      ['Elemento', 'Resistência de quartzo'],
      ['Dimensões', '~560 × 460 × 380 mm'],
      ['Tensão', '220V / 60Hz · 3,5 kW'],
      ['Aplicações', 'Crème Brûlée · Sopa de Cebola Gratinada · espinafre · peixes'],
    ],
    desc: 'A salamandra é o equipamento de finalização por excelência de um steakhouse premium. No AURA, usada para o Crème Brûlée, Sopa de Cebola e Espinafre Gratinado. Garante cor e textura de superfície sem continuar cozinhando o interior.',
    links: [
      { label: '→ Bartscher — Salamanders / Gratinadores', url: 'https://www.bartscher.com/en/products/salamanders' },
      { label: '→ Compra EUA — WebstaurantStore', url: 'https://www.webstaurantstore.com/salamander-broilers/' },
      { label: '→ [NL] Bartscher (DE/NL) — Salamanders', url: 'https://www.bartscher.com/en/products/salamanders' },
      { label: '→ [NL] Horeca.com (NL) — Gratinadores', url: 'https://www.horeca.com/en/salamanders' }
    ]
  },
  microondas: {
    badge: 'Samsung / Sharp · Commercial Line',
    name: 'Microondas 40L Profissional',
    role: 'Regeneração Rápida e Serviço de Mesa',
    specs: [
      ['Capacidade', '40 litros · uso comercial contínuo'],
      ['Potência', '1.000 a 1.600W'],
      ['Tensão', '220V / 60Hz · monofásico'],
      ['Ciclos diários', 'Certificado para uso comercial intensivo'],
      ['Aplicações', 'Regeneração de molhos · manteiga de ervas · pão de alho · mise en place'],
    ],
    desc: 'Crítico para o ritmo de serviço. No AURA, usado para regenerar molhos e manteigas compostas entre os turnos e manter mise en place aquecida sem comprometer os equipamentos principais.',
    links: [
      { label: '→ Microondas Comerciais — WebstaurantStore EUA', url: 'https://www.webstaurantstore.com/commercial-microwaves/' },
      { label: '→ [NL] Horeca.com (NL) — Microondas Comerciais', url: 'https://www.horeca.com/en/microwaves' }
    ]
  }
}
```

## 2. DADOS BRUTOS (Injeções Visuais dos Cartões HTML)
O código abaixo comprova as alterações de front-end feitas hoje com base em suas instruções para os novos cartões:

```html
id="cozinha">
  <div class="cozinha-inner">

    <!-- INTRO -->
    <div class="cozinha-top">
      <div>
        <p class="s-label rv" data-pt="A Cozinha" data-en="The Kitchen">A Cozinha</p>
        <h2 class="s-title rv rv-d1">
          <span data-pt="Infraestrutura de<br><em>alta performance</em>" data-en="<em>High performance</em><br>infrastructure">
            Infraestrutura de<br><em>alta performance</em>
          </span>
        </h2>
        <p class="s-body rv rv-d2"
           data-pt="Dois fornos Rational iCombi Pro (10GN + 6GN c/ VarioSmoker), parrilla a lenha com espeto rotativo, bancadas de inox por parceiro holandês. Cozinha 62,97 m² · 120 lugaresgentina a lenha com espeto rotativo motorizado e bancadas de equipamentos profissionais. Cozinha de 62,97 m² para 120 lugares em 2 turnos diários. Clique em qualquer equipamento para ver a ficha técnica."
           data-en="Two Rational iCombi Pro ovens (10GN + 6GN w/ VarioSmoker), wood-fired Argentine parrilla with rotisserie, inox counters by Dutch partner. 62.97 m² kitchen · 120 coversred parrilla with motorized rotisserie, and professional countertop equipment. A 62.97 m² kitchen for 120 covers in 2 daily shifts. Click any item for the technical sheet.">
          Dois fornos Rational iCombi Pro (10GN + 6GN c/ defumador VarioSmoker), parrilla argentina a lenha com espeto rotativo, bancadas de inox projetadas por parceiro holandês. Cozinha de 62,97 m² · 120 lugares · 2 turnos. Clique para a ficha técnica.
        </p>
      </div>
      <div class="cozinha-img rv rv-d2">
        <img src="Gemini_Generated_Image_407d32407d32407d.jpg" alt="Parrilla AURA — Cozinha Show">
      </div>
    </div>

    <!-- EQUIPMENT GRID — compact 4-col, all clickable -->
    <p class="s-label rv" style="margin-bottom:1.25rem;" data-pt="Equipamentos — Clique para Ficha Técnica" data-en="Equipment — Click for Spec Sheet">Equipamentos — Clique para Ficha Técnica</p>

    <div class="eq-compact-grid rv rv-d1" id="eqGrid">

      <!-- ── COCÇÃO PRINCIPAL ── -->
      <div class="eq-cat-label" data-pt="Cocção Principal" data-en="Main Cooking">Cocção Principal</div>

      <div class="eqc" onclick="openSpec('rational10')">
        <div class="eqc-badge">Rational · DE</div>
        <div class="eqc-name">iCombi Pro 10 GN 1/1</div>
        <div class="eqc-role" data-pt="Forno Combinado Principal" data-en="Main Combi Oven">Forno Combinado Principal</div>
        <div class="eqc-foot">→ rational-online.com</div>
        <div class="card-actions">
          <button class="card-btn" onclick="printCard(this)" title="Imprimir"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="6" width="10" height="7" rx="1"/><path d="M5 6V3h6v3"/><path d="M5 10h6"/></svg>Imprimir</button>
          <button class="card-btn" onclick="shareCard(this)" title="Compartilhar"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="4" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="4" cy="8" r="1.5"/><line x1="10.5" y1="4.75" x2="5.5" y2="7.5"/><line x1="5.5" y1="8.5" x2="10.5" y2="11.25"/></svg>Compartilhar</button>
        </div>
      </div>

      <div class="eqc" onclick="openSpec('rational6')">
        <div class="eqc-badge">Rational · DE</div>
        <div class="eqc-name">iCombi Pro 6 GN + VarioSmoker</div>
        <div class="eqc-role" data-pt="Forno c/ Defumador Integrado" data-en="Oven with Integrated Smoker">Forno c/ Defumador Integrado</div>
        <div class="eqc-foot">→ rational-online.com</div>
        <div class="card-actions">
          <button class="card-btn" onclick="printCard(this)" title="Imprimir"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="6" width="10" height="7" rx="1"/><path d="M5 6V3h6v3"/><path d="M5 10h6"/></svg>Imprimir</button>
          <button class="card-btn" onclick="shareCard(this)" title="Compartilhar"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="4" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="4" cy="8" r="1.5"/><line x1="10.5" y1="4.75" x2="5.5" y2="7.5"/><line x1="5.5" y1="8.5" x2="10.5" y2="11.25"/></svg>Compartilhar</button>
        </div>
      </div>

      </div>

      <div class="eqc" onclick="openSpec('espeto')">
        <div class="eqc-badge">Argusto · NL/DE</div>
        <div class="eqc-name">Espeto Rotativo Motorizado</div>
        <div class="eqc-role" data-pt="4–6 Espetos · Rodízio Parrilla" data-en="4–6 Spits · Parrilla Rodízio">4–6 Espetos · Rodízio Parrilla</div>
        <div class="eqc-foot">→ maxima-kitchen.nl</div>
        <div class="card-actions">
          <button class="card-btn" onclick="printCard(this)" title="Imprimir"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="6" width="10" height="7" rx="1"/><path d="M5 6V3h6v3"/><path d="M5 10h6"/></svg>Imprimir</button>
          <button class="card-btn" onclick="shareCard(this)" title="Compartilhar"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="4" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="4" cy="8" r="1.5"/><line x1="10.5" y1="4.75" x2="5.5" y2="7.5"/><line x1="5.5" y1="8.5" x2="10.5" y2="11.25"/></svg>Compartilhar</button>
        </div>
      </div>

      <!-- ── PROCESSAMENTO ── -->
      <div class="eq-cat-label" data-pt="Processamento & Preparo" data-en="Processing & Prep">Processamento & Preparo</div>

      <div class="eqc" onclick="openSpec('robotcoupe_cl50')">
        <div class="eqc-badge">Robot Coupe · FR</div>
        <div class="eqc-name">Robot Coupe CL50</div>
        <div class="eqc-role" data-pt="Robô de Cortes — Garde Manger / Saladas" data-en="Vegetable Cutter — Garde Manger / Salads">Robô de Cortes · Garde Manger</div>
        <div class="eqc-foot">→ robotcoupe.com</div>
        <div class="card-actions">
          <button class="card-btn" onclick="printCard(this)" title="Imprimir"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="6" width="10" height="7" rx="1"/><path d="M5 6V3h6v3"/><path d="M5 10h6"/></svg>Imprimir</button>
          <button class="card-btn" onclick="shareCard(this)" title="Compartilhar"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="4" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="4" cy="8" r="1.5"/><line x1="10.5" y1="4.75" x2="5.5" y2="7.5"/><line x1="5.5" y1="8.5" x2="10.5" y2="11.25"/></svg>Compartilhar</button>
        </div>
      </div>

      <div class="eqc" onclick="openSpec('robotcoupe_r301')">
        <div class="eqc-badge">Robot Coupe · FR</div>
        <div class="eqc-name">Robot Coupe R301</div>
        <div class="eqc-role" data-pt="Cutter / Bowl 3,7L — Emulsões & Fondos" data-en="Cutter / 3.7L Bowl — Emulsions & Stocks">Cutter · Emulsões & Mise en Place</div>
        <div class="eqc-foot">→ robotcoupe.com</div>
        <div class="card-actions">
          <button class="card-btn" onclick="printCard(this)" title="Imprimir"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="6" width="10" height="7" rx="1"/><path d="M5 6V3h6v3"/><path d="M5 10h6"/></svg>Imprimir</button>
          <button class="card-btn" onclick="shareCard(this)" title="Compartilhar"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="4" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="4" cy="8" r="1.5"/><line x1="10.5" y1="4.75" x2="5.5" y2="7.5"/><line x1="5.5" y1="8.5" x2="10.5" y2="11.25"/></svg>Compartilhar</button>
        </div>
      </div>

      <div class="eqc" onclick="openSpec('hobart')">
        <div class="eqc-badge">Hobart · US</div>
        <div class="eqc-name">Batedeira Planetária 18L</div>
        <div class="eqc-role" data-pt="Massas, Chantilly, Pastelaria" data-en="Dough, Cream, Pastry">Confeitaria · Massas · Padaria</div>
        <div class="eqc-foot">→ hobartcorp.com</div>
        <div class="card-actions">
          <button class="card-btn" onclick="printCard(this)" title="Imprimir"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="6" width="10" height="7" rx="1"/><path d="M5 6V3h6v3"/><path d="M5 10h6"/></svg>Imprimir</button>
          <button class="card-btn" onclick="shareCard(this)" title="Compartilhar"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="4" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="4" cy="8" r="1.5"/><line x1="10.5" y1="4.75" x2="5.5" y2="7.5"/><line x1="5.5" y1="8.5" x2="10.5" y2="11.25"/></svg>Compartilhar</button>
        </div>
      </div>

      <div class="eqc" onclick="openSpec('laminador')">
        <div class="eqc-badge">Berkel / Sirman · IT</div>
        <div class="eqc-name">Laminador de Frios Automático</div>
        <div class="eqc-role" data-pt="Fatiamento de Frios e Charcutaria" data-en="Cold Cuts & Charcuterie Slicer">Frios · Charcutaria · Presunto</div>
        <div class="eqc-foot">→ berkelpro.com</div>
        <div class="card-actions">
          <button class="card-btn" onclick="printCard(this)" title="Imprimir"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="6" width="10" height="7" rx="1"/><path d="M5 6V3h6v3"/><path d="M5 10h6"/></svg>Imprimir</button>
          <button class="card-btn" onclick="shareCard(this)" title="Compartilhar"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="4" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="4" cy="8" r="1.5"/><line x1="10.5" y1="4.75" x2="5.5" y2="7.5"/><line x1="5.5" y1="8.5" x2="10.5" y2="11.25"/></svg>Compartilhar</button>
        </div>
      </div>

      <div class="eqc" onclick="openSpec('moedor')">
        <div class="eqc-badge">Tre Spade / Reber · IT</div>
        <div class="eqc-name">Moedor de Carne</div>
        <div class="eqc-role" data-pt="Tartare · Hambúrguer Artesanal · Ragù" data-en="Tartare · Artisan Burger · Ragù">Tartare · Hambúrguer Artesanal · Ragù</div>
        <div class="eqc-foot">→ trespade.it</div>
        <div class="card-actions">
          <button class="card-btn" onclick="printCard(this)" title="Imprimir"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="6" width="10" height="7" rx="1"/><path d="M5 6V3h6v3"/><path d="M5 10h6"/></svg>Imprimir</button>
          <button class="card-btn" onclick="shareCard(this)" title="Compartilhar"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="4" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="4" cy="8" r="1.5"/><line x1="10.5" y1="4.75" x2="5.5" y2="7.5"/><line x1="5.5" y1="8.5" x2="10.5" y2="11.25"/></svg>Compartilhar</button>
        </div>
      </div>

      <div class="eqc" onclick="openSpec('seladora')">
        <div class="eqc-badge">Henkelman / Multivac · NL</div>
        <div class="eqc-name">Seladora a Vácuo</div>
        <div class="eqc-role" data-pt="Conservação · Sous Vide · Pré-preparo" data-en="Preservation · Sous Vide · Pre-prep">Conservação · Sous Vide · Pré-preparo</div>
        <div class="eqc-foot">→ henkelman.com</div>
        <div class="card-actions">
          <button class="card-btn" onclick="printCard(this)" title="Imprimir"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="6" width="10" height="7" rx="1"/><path d="M5 6V3h6v3"/><path d="M5 10h6"/></svg>Imprimir</button>
          <button class="card-btn" onclick="shareCard(this)" title="Compartilhar"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="4" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="4" cy="8" r="1.5"/><line x1="10.5" y1="4.75" x2="5.5" y2="7.5"/><line x1="5.5" y1="8.5" x2="10.5" y2="11.25"/></svg>Compartilhar</button>
        </div>
      </div>

      <div class="eqc" onclick="openSpec('termomix')">
        <div class="eqc-badge">Vorwerk · DE</div>
        <div class="eqc-name">Thermomix TM7</div>
        <div class="eqc-role" data-pt="Sobremesas · Mousses · Molhos Finos" data-en="Desserts · Mousses · Fine Sauces">Sobremesas · Mousses · Molhos Finos</div>
        <div class="eqc-foot">→ thermomix.com</div>
        <div class="card-actions">
          <button class="card-btn" onclick="printCard(this)" title="Imprimir"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="6" width="10" height="7" rx="1"/><path d="M5 6V3h6v3"/><path d="M5 10h6"/></svg>Imprimir</button>
          <button class="card-btn" onclick="shareCard(this)" title="Compartilhar"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="4" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="4" cy="8" r="1.5"/><line x1="10.5" y1="4.75" x2="5.5" y2="7.5"/><line x1="5.5" y1="8.5" x2="10.5" y2="11.25"/></svg>Compartilhar</button>
        </div>
      </div>

      <!-- ── COCÇÃO AUXILIAR ── -->
      <div class="eq-cat-label" data-pt="Cocção Auxiliar & Técnica" data-en="Auxiliary & Technical Cooking">Cocção Auxiliar & Técnica</div>

      <div class="eqc" onclick="openSpec('sousvide')">
        <div class="eqc-badge">PolyScience / Anova · US</div>
        <div class="eqc-name">Termocirculador Sous Vide</div>
        <div class="eqc-role" data-pt="Cocção de Precisão · Proteínas e Ovos" data-en="Precision Cooking · Proteins and Eggs">Cocção de Precisão · Proteínas · Ovos</div>
        <div class="eqc-foot">→ polyscienceculinary.com</div>
        <div class="card-actions">
          <button class="card-btn" onclick="printCard(this)" title="Imprimir"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="6" width="10" height="7" rx="1"/><path d="M5 6V3h6v3"/><path d="M5 10h6"/></svg>Imprimir</button>
          <button class="card-btn" onclick="shareCard(this)" title="Compartilhar"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="4" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="4" cy="8" r="1.5"/><line x1="10.5" y1="4.75" x2="5.5" y2="7.5"/><line x1="5.5" y1="8.5" x2="10.5" y2="11.25"/></svg>Compartilhar</button>
        </div>
      </div>

      <div class="eqc" onclick="openSpec('inducao')">
        <div class="eqc-badge">Bora / Bartscher · DE</div>
        <div class="eqc-name">Fogão Portátil de Indução</div>
        <div class="eqc-role" data-pt="Estações Auxiliares · Acabamento à Mesa" data-en="Auxiliary Stations · Tableside Finishing">Estações Auxiliares · Acabamento</div>
        <div class="eqc-foot">→ bartscher.com</div>
        <div class="card-actions">
          <button class="card-btn" onclick="printCard(this)" title="Imprimir"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="6" width="10" height="7" rx="1"/><path d="M5 6V3h6v3"/><path d="M5 10h6"/></svg>Imprimir</button>
          <button class="card-btn" onclick="shareCard(this)" title="Compartilhar"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="4" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="4" cy="8" r="1.5"/><line x1="10.5" y1="4.75" x2="5.5" y2="7.5"/><line x1="5.5" y1="8.5" x2="10.5" y2="11.25"/></svg>Compartilhar</button>
        </div>
      </div>

      <div class="eqc" onclick="openSpec('mixer')">
        <div class="eqc-badge">Robot Coupe · FR</div>
        <div class="eqc-name">Mixer de Imersão</div>
        <div class="eqc-role" data-pt="Sopas · Purês · Emulsões em Volume" data-en="Soups · Purées · Volume Emulsions">Sopas · Purês · Emulsões</div>
        <div class="eqc-foot">→ robotcoupe.com</div>
        <div class="card-actions">
          <button class="card-btn" onclick="printCard(this)" title="Imprimir"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="6" width="10" height="7" rx="1"/><path d="M5 6V3h6v3"/><path d="M5 10h6"/></svg>Imprimir</button>
          <button class="card-btn" onclick="shareCard(this)" title="Compartilhar"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="4" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="4" cy="8" r="1.5"/><line x1="10.5" y1="4.75" x2="5.5" y2="7.5"/><line x1="5.5" y1="8.5" x2="10.5" y2="11.25"/></svg>Compartilhar</button>
        </div>
      </div>

      <div class="eqc" onclick="openSpec('liqbr')">
        <div class="eqc-badge">Waring / Vitamix · US</div>
        <div class="eqc-name">Liquidificador Alta Rotação 2L</div>
        <div class="eqc-role" data-pt="Molhos Finos · Vinaigrettes · Smoothies" data-en="Fine Sauces · Vinaigrettes · Smoothies">Molhos Finos · Vinaigrettes</div>
        <div class="eqc-foot">→ vitamix.com/commercial</div>
        <div class="card-actions">
          <button class="card-btn" onclick="printCard(this)" title="Imprimir"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="6" width="10" height="7" rx="1"/><path d="M5 6V3h6v3"/><path d="M5 10h6"/></svg>Imprimir</button>
          <button class="card-btn" onclick="shareCard(this)" title="Compartilhar"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="4" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="4" cy="8" r="1.5"/><line x1="10.5" y1="4.75" x2="5.5" y2="7.5"/><line x1="5.5" y1="8.5" x2="10.5" y2="11.25"/></svg>Compartilhar</button>
        </div>
      </div>

      <div class="eqc" onclick="openSpec('liqlenta')">
        <div class="eqc-badge">Bravilor / Vitamix · EU</div>
        <div class="eqc-name">Liquidificador 3L Baixa Rotação</div>
        <div class="eqc-role" data-pt="Sucos Naturais · Chimichurri em Volume" data-en="Natural Juices · Volume Chimichurri">Sucos · Chimichurri · Pré-preparo</div>
        <div class="eqc-foot">→ vitamix.com/commercial</div>
        <div class="card-actions">
          <button class="card-btn" onclick="printCard(this)" title="Imprimir"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="6" width="10" height="7" rx="1"/><path d="M5 6V3h6v3"/><path d="M5 10h6"/></svg>Imprimir</button>
          <button class="card-btn" onclick="shareCard(this)" title="Compartilhar"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="4" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="4" cy="8" r="1.5"/><line x1="10.5" y1="4.75" x2="5.5" y2="7.5"/><line x1="5.5" y1="8.5" x2="10.5" y2="11.25"/></svg>Compartilhar</button>
        </div>
      </div>

      <div class="eqc" onclick="openSpec('gratinador')">
        <div class="eqc-badge">Saro / Bartscher · DE</div>
        <div class="eqc-name">Gratinador (Salamandra)</div>
        <div class="eqc-role" data-pt="Crème Brûlée · Gratinados · Finalização" data-en="Crème Brûlée · Gratins · Finishing">Crème Brûlée · Gratinados · Finalização</div>
        <div class="eqc-foot">→ bartscher.com</div>
        <div class="card-actions">
          <button class="card-btn" onclick="printCard(this)" title="Imprimir"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="6" width="10" height="7" rx="1"/><path d="M5 6V3h6v3"/><path d="M5 10h6"/></svg>Imprimir</button>
          <button class="card-btn" onclick="shareCard(this)" title="Compartilhar"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="4" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="4" cy="8" r="1.5"/><line x1="10.5" y1="4.75" x2="5.5" y2="7.5"/><line x1="5.5" y1="8.5" x2="10.5" y2="11.25"/></svg>Compartilhar</button>
        </div>
      </div>

      <div class="eqc" onclick="openSpec('microondas')">
        <div class="eqc-badge">Samsung / Sharp · Commercial</div>
        <div class="eqc-name">Microondas 40L Profissional</div>
        <div class="eqc-role" data-pt="Regeneração Rápida · Serviço de Mesa" data-en="Quick Regen · Table Service">Regeneração Rápida · Serviço</div>
        <div class="eqc-foot">→ restaurantsupply.com</div>
        <div class="card-actions">
          <button class="card-btn" onclick="printCard(this)" title="Imprimir"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="6" width="10" height="7" rx="1"/><path d="M5 6V3h6v3"/><path d="M5 10h6"/></svg>Imprimir</button>
          <button class="card-btn" onclick="shareCard(this)" title="Compartilhar"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="4" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="4" cy="8" r="1.5"/><line x1="10.5" y1="4.75" x2="5.5" y2="7.5"/><line x1="5.5" y1="8.5" x2="10.5" y2="11.25"/></svg>Compartilhar</button>
        </div>
      </div>

      <div class="eqc" onclick="openSpec('hobart_amtl')">
        <div class="eqc-badge">Hobart · US</div>
        <div class="eqc-name">Lavadora Hobart AMTL</div>
        <div class="eqc-role" data-pt="Lavagem Avançada · 80 racks/h" data-en="Advanced Washing · 80 racks/h">Lavagem Avançada · 80 racks/h</div>
      </div>
      <div class="eqc" onclick="openSpec('ecomax_gw')">
        <div class="eqc-badge">Hobart · US</div>
        <div class="eqc-name">Hobart Ecomax 403</div>
        <div class="eqc-role" data-pt="Lavadora de Copos · 60 Gavetas/h" data-en="Glasswasher · 60 Racks/h">Lavadora de Copos · 60 Gavetas/h</div>
      </div>
      <div class="eqc" onclick="openSpec('ice_machine')">
        <div class="eqc-badge">Manitowoc / Avantco · US</div>
        <div class="eqc-name">Máquina de Gelo Profissional</div>
        <div class="eqc-role" data-pt="Gelo em Cubo · Até 530 lbs/dia" data-en="Cube Ice · Up to 530 lbs/day">Gelo em Cubo · Até 530 lbs/dia</div>
      </div>
      <div class="eqc" onclick="openSpec('quiet_blender')">
        <div class="eqc-badge">Vitamix · US</div>
        <div class="eqc-name">Vitamix The Quiet One</div>
        <div class="eqc-role" data-pt="Liquidificador Silencioso · Bar" data-en="Silent Blender · Bar">Liquidificador Silencioso · Bar</div>
      </div>


    </div><!-- /eq-compact-grid -->

  </div><!-- /cozinha-inner -->

```

## 3. HISTÓRICO DE LOG DE IMPLEMENTAÇÃO BRUTA
- Todos os links (Katom, Horeca, WebstaurantStore, HobartCorp, Waring) que você me colou no chat foram injetados nativamente conforme o código acima.
- O texto `Liquidificador Alta Rotação 2L` foi revisado para conter `Caterchef` conforme sua exata correção.
- Os links das máquinas de Gelo da Manitowoc e Avantco foram agrupados no card `ice_machine`.
- As especificações exatas (`80 racks/h`, `530 lbs/day`, `60 Gavetas/h`, `3 HP Peak`) passadas nos prompts anteriores estão indexadas acima para carregamento dinâmico.
