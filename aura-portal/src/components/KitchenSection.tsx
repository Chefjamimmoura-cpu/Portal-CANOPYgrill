import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Play, ShieldCheck, Zap, Flame, BookOpen, ChefHat, ChevronDown } from 'lucide-react';

// ─── Categorias de imagens mapeadas pelas pastas do projeto ───────────────────

type GalleryImage = { src: string; alt: string };

type GalleryCategory = {
  id: string;
  /** Título exibido na pasta original */
  folderName: string;
  /** Título refinado para o portal */
  title: string;
  subtitle: string;
  images: GalleryImage[];
};

const galleryCategories: GalleryCategory[] = [
  {
    id: 'conceito-arq',
    folderName: 'Conceito Arq',
    title: 'Conceito Arquitetônico',
    subtitle: 'Estética espacial e identidade visual do ambiente Moods — renders, versão noturna e estado original do edifício',
    images: [
      { src: '/assets/images/Hero_site.png', alt: 'Moods Steakhouse — Capa do site' },
      { src: '/assets/images/Bar.png', alt: 'Bar AURA — Lounge de acolhimento' },
      { src: '/assets/images/Hall.png', alt: 'Hall de entrada e transição' },
      { src: '/assets/images/Salão%20vista.png', alt: 'Salão principal com vista ampla' },
      { src: '/assets/images/Salão%20área%20vip.png', alt: 'Área VIP do salão' },
      { src: '/assets/images/Salão_bar.png', alt: 'Integração entre o salão e o Bar' },
      { src: '/assets/images/sobremesa%20e%20detalhes.png', alt: 'Detalhes de mesa e sobremesa' },
      { src: '/assets/images/Gemini_Generated_Image_wdb9q3wdb9q3wdb9.jpg', alt: 'Conceito arquitetônico — fachada externa do AURA Hotel' },
      { src: '/assets/images/versao_noturna.jpg', alt: 'Versão noturna — ambiente' },
      { src: '/assets/images/image3.png', alt: 'Edificação original — estado anterior à reforma e rebranding para AURA Hotel' },
    ],
  },
  {
    id: 'proposta-gastronomica',
    folderName: 'proposta_gastronomica',
    title: 'Proposta Gastronômica',
    subtitle: 'Curadoria visual dos pratos, cortes e experiências de mesa do Moods',
    images: [
      { src: '/assets/images/Gemini_Generated_Image_40thro40thro40th.jpg', alt: 'Proposta gastronômica — cortes e brasa' },
      { src: '/assets/images/Gemini_Generated_Image_6npeph6npeph6npe.jpg', alt: 'Proposta gastronômica — prato premium' },
      { src: '/assets/images/Gemini_Generated_Image_v4fiukv4fiukv4fi.jpg', alt: 'Proposta gastronômica — mise en scène' },
      { src: '/assets/images/ChatGPT%20Image%2022%20de%20jan.%20de%202026%2C%2019_03_14.png', alt: 'Proposta gastronômica — composição de mesa' },
      { src: '/assets/images/gerar%20imagem%20de%20um%20prato%20gourmet%20de%20massa%20italiana%20com%20mignon%20encima%20de%20uma%20mesa%20de%20madeira%20com%20restaurante%20ao%20fundo%20em%20desfoque..jpg', alt: 'Fusão clássica — massa italiana com mignon' },
      { src: '/assets/images/image2.png', alt: 'Proposta gastronômica — detalhe de prato' },
    ],
  },
  {
    id: 'cozinha',
    folderName: 'Cozinha',
    title: 'A Cozinha',
    subtitle: 'Infraestrutura, equipamentos e dinâmica de operação da cozinha do Rooftop — projetada para 120 pessoas em dois turnos',
    images: [
      { src: '/assets/images/Gemini_Generated_Image_407d32407d32407d.jpg', alt: 'Equipamentos de última geração para os preparos da cozinha Moods' },
      { src: '/assets/images/Gemini_Generated_Image_f2qj66f2qj66f2qj.jpg', alt: 'Cozinha — linha de produção e bancadas de preparo' },
      { src: '/assets/images/Gemini_Generated_Image_gu5a09gu5a09gu5a.jpg', alt: 'Cozinha — ambiente e fluxo operacional' },
      { src: '/assets/images/Gemini_Generated_Image_utvnlcutvnlcutvn.jpg', alt: 'Cozinha — fluxo de serviço e finalização' },
      { src: '/assets/images/Gemini_Generated_Image_vkgl5ovkgl5ovkgl.jpg', alt: 'Cozinha — acabamento e emplatamento' },
    ],
  },
  {
    id: 'pivotar-ab',
    folderName: 'Cozinha / Pivotar entre A e B',
    title: 'Parrilla Show · Pivot A ↔ B',
    subtitle: 'Conceito de operação híbrida — parrilha aberta com espetos rotativos, pivô central do Modo B · Rodízio Premium',
    images: [
      { src: '/assets/images/Gemini_Generated_Image_heoyddheoyddheoy.jpg', alt: 'Parrilla Show — estação aberta de cortes ao vivo, pivô do Modo B' },
      { src: '/assets/images/Gemini_Generated_Image_opxf01opxf01opxf.jpg', alt: 'Parrilla Show — parrilha e espetos rotativos integrados à brasa' },
      { src: '/assets/images/Gemini_Generated_Image_hvo20mhvo20mhvo2.jpg', alt: 'Pivot A ↔ B — transição de formato de serviço' },
      { src: '/assets/images/Gemini_Generated_Image_v1s4ufv1s4ufv1s4.jpg', alt: 'Pivot A ↔ B — configuração do salão' },
    ],
  },
  {
    id: 'aplicacao-marca',
    folderName: 'aplicação_marca',
    title: 'Aplicação da Marca',
    subtitle: 'Moods em contexto — tableside, uniformes, sinalização e identidade aplicada',
    images: [
      { src: '/assets/images/Gemini_Generated_Image_41jojw41jojw41jo.jpg', alt: 'Identidade de marca — ambiente e experiência de salão' },
      { src: '/assets/images/Gemini_Generated_Image_41jojw41jojw41jo%20(1).jpg', alt: 'Identidade de marca — iluminação e atmosfera' },
      { src: '/assets/images/Gemini_Generated_Image_4dvzqv4dvzqv4dvz.jpg', alt: 'Identidade de marca — detalhe de serviço' },
      { src: '/assets/images/Gemini_Generated_Image_h9h6zvh9h6zvh9h6.jpg', alt: 'Identidade de marca — tabletop e mise en place' },
    ],
  },
  {
    id: 'conceitos-descartados',
    folderName: 'Conceitos Descartados',
    title: 'Referências Descartadas',
    subtitle: 'Alternativas exploradas durante o processo criativo — mantidas como referência de curadoria e decisão de projeto',
    images: [
      { src: '/assets/images/descartado_grill_4k.jpeg', alt: 'Referência descartada — grill 4K' },
      { src: '/assets/images/descartado_chatgpt_jan20_1.png', alt: 'Referência descartada — conceito jan/20 v1' },
      { src: '/assets/images/descartado_chatgpt_fev5_1.png', alt: 'Referência descartada — conceito fev/05 v1' },
      { src: '/assets/images/descartado_chatgpt_fev5_2.png', alt: 'Referência descartada — conceito fev/05 v2' },
      { src: '/assets/images/Gemini_Generated_Image_2s2ilj2s2ilj2s2i.jpg', alt: 'Referência descartada — exploração visual 1' },
      { src: '/assets/images/Gemini_Generated_Image_7su5447su5447su5.jpg', alt: 'Referência descartada — exploração visual 2' },
      { src: '/assets/images/Gemini_Generated_Image_b9i1i4b9i1i4b9i1.jpg', alt: 'Referência descartada — exploração visual 3' },
      { src: '/assets/images/Gemini_Generated_Image_efizjefizjefizje.jpg', alt: 'Referência descartada — exploração visual 4' },
      { src: '/assets/images/Gemini_Generated_Image_f5q3uif5q3uif5q3.jpg', alt: 'Referência descartada — exploração visual 5' },
    ],
  },
  {
    id: 'projeto-bks',
    folderName: 'Apresentação — Projeto BKS',
    title: 'Projeto Técnico — BKS',
    subtitle: 'Apresentação completa do dimensionamento, layout e fluxo da cozinha Steakhouse',
    images: Array.from({ length: 16 }, (_, i) => ({
      src: `/assets/images/${i + 1}.png`,
      alt: `Projeto BKS — prancha ${String(i + 1).padStart(2, '0')}`,
    })),
  },
];

// ─── Equipamentos ─────────────────────────────────────────────────────────────

type EquipmentLink = { label: string; url: string; region: 'USA' | 'EU' | 'BR' };

type Equipment = {
  id: string; name: string; category: string;
  desc: string; specs: string[]; voltage: string; power: string;
  links?: EquipmentLink[];
};

const equipments: Equipment[] = [
  {
    id: "EQ01", name: "Rational iCombi Pro 6 GN 1/1 + VarioSmoker", category: "Cocção",
    desc: "Forno combinado inteligente de 6 GN 1/1 com controle de umidade, sonda térmica e acessório VarioSmoker USB para defumação a frio e quente. Referência absoluta para cocção de proteínas nobres.",
    specs: ["6 GN 1/1", "Lavagem Autônoma iCare", "Sonda Térmica", "VarioSmoker Defumação"],
    voltage: "380V Trifásico", power: "10.8 kW",
    links: [
      { label: "WebstaurantStore (EUA)", url: "https://www.webstaurantstore.com/rational-icombi-pro-6-pan-full-size-natural-gas-combi-oven-208-240v-1-phase/645ICP62NI.html", region: "USA" },
      { label: "KaTom (EUA)", url: "https://www.katom.com/703-CB1ERRA0000213.html", region: "USA" },
      { label: "AC Müller (Brasil)", url: "https://acmuller.com.br/forno-combinado-eletrico-icombi-pro-para-6-gns-1-1-trifasico-380-volts-rational.html", region: "BR" },
      { label: "EngéFood (Brasil)", url: "https://engefood.com.br/produto/forno-rational-icombi-pro-6-1-1-gas-natural/", region: "BR" },
    ],
  },
  {
    id: "EQ02", name: "Rational iCombi Pro 10 GN 1/1", category: "Cocção",
    desc: "Forno combinado de 10 GN 1/1 para produção de alto volume — ideal para banquetes, rodízio e serviço de dois turnos com 120 pessoas por expediente.",
    specs: ["10 GN 1/1", "Lavagem Autônoma iCare", "Sonda Térmica MultiPoint", "iProductionManager"],
    voltage: "380V Trifásico", power: "18.5 kW",
    links: [
      { label: "WebstaurantStore (EUA)", url: "https://www.webstaurantstore.com/rational-icombi-pro-10-pan-full-size-natural-gas-combi-oven-208-240v-1-phase/645ICP102NI.html", region: "USA" },
      { label: "KaTom (EUA)", url: "https://www.katom.com/703-CD1GRRA0000237.html", region: "USA" },
      { label: "Frigo (Brasil)", url: "https://www.frigo.com.br/forno-combinado-rational-10-gns-icombi-pro-eletrico-220v-trifasico", region: "BR" },
      { label: "Rational (Linha iCombi)", url: "https://www.rational-online.com/en_us/icombi-pro/models/", region: "USA" },
    ],
  },
  {
    id: "EQ03", name: "Thermomix TM7 — Vorwerk", category: "Preparo",
    desc: "Processador térmico de altíssima precisão para bases, molhos, emulsões e fundos. Temperatura exata ao décimo de grau com balança integrada e receituário digital.",
    specs: ["Copo 2.2L", "Balança Integrada", "Temperatura ±0.5°C", "Conectividade WiFi"],
    voltage: "220V", power: "1.5 kW",
    links: [
      { label: "Thermomix Oficial (EUA)", url: "https://www.thermomix.com/products/thermomix%C2%AE-tm7%E2%84%A2", region: "USA" },
      { label: "Vorwerk Benelux (Holanda)", url: "https://benelux.thermomix.com/en/products/thermomix-tm7", region: "EU" },
      { label: "Vorwerk Brasil", url: "https://brazil.vorwerk-thermomix.com/en/thermomix-tm7/", region: "BR" },
    ],
  },
  {
    id: "EQ04", name: "Seladora a Vácuo Henkelman Jumbo 42", category: "Conservação",
    desc: "Máquina de câmara para vácuo e atmosfera modificada (MAP). Essencial para Sous-Vide, conservação de cortes nobres e mise en place de longa duração.",
    specs: ["Barra de Selagem 420mm", "Bomba Busch 20m³/h", "Atmosfera Modificada MAP", "Ciclos programáveis"],
    voltage: "220V Monofásico", power: "900W",
    links: [
      { label: "WebstaurantStore — Jumbo 42XL (EUA)", url: "https://www.webstaurantstore.com/henkelman-jumbo42xl-chamber-vacuum-packaging-machine-with-2-16/523JUMBO42XL.html", region: "USA" },
      { label: "WebstaurantStore — Jumbo 42 (EUA)", url: "https://www.webstaurantstore.com/henkelman-jumbo42-chamber-vacuum-packaging-machine-with-16/523JUMBO42.html", region: "USA" },
      { label: "Henkelman Oficial (Europa)", url: "https://www.henkelman.com", region: "EU" },
    ],
  },
  {
    id: "EQ05", name: "Robot Coupe CL 52 — Robô de Cortes", category: "Processamento",
    desc: "Cortador contínuo de vegetais de alto desempenho para mise en place de grande volume — fatiados, julienne, brunoise e rallados com discos intercambiáveis.",
    specs: ["Motor 1.5 HP", "Discos Intercambiáveis", "Corte Contínuo", "Tampa de segurança"],
    voltage: "220V", power: "1.1 kW",
    links: [
      { label: "Robot Coupe CL 52 (EUA)", url: "https://www.robot-coupe.com/usa/en_US/p/vegetable-preparation-machines-cl-52-1v/18355", region: "USA" },
      { label: "WebstaurantStore — CL52E (EUA)", url: "https://www.webstaurantstore.com/robot-coupe-cl52-continuous-feed-food-processor-2-hp/649CL52E.html", region: "USA" },
      { label: "Pucci Cozinhas (Brasil)", url: "https://puccicozinhas.com.br/produto/robot-coupe-cl52-ultra/", region: "BR" },
      { label: "Ponto das Máquinas — CL60 (Brasil)", url: "https://www.pontodasmaquinas.com.br/processamento/processadores/processador-de-alimentos-cl-60-workstation-robot-coupe", region: "BR" },
    ],
  },
  {
    id: "EQ06", name: "Robot Coupe R6 V.V. — Cutter Mixer", category: "Processamento",
    desc: "Processador de cuba para farsas, massas, pastas finas e emulsificação. Velocidade variável de 300 a 3500 RPM para controle de textura de precisão.",
    specs: ["Cuba 6 Litros", "300–3500 RPM variável", "Facas lisas e serrilhadas", "Tampa com dosador"],
    voltage: "220V", power: "1.5 kW",
    links: [
      { label: "Robot Coupe R6 V.V. (Exportação)", url: "https://www.robot-coupe.com/export/en/p/cutters-r-6-v-v/25121", region: "EU" },
      { label: "Robot Coupe R7 (Exportação)", url: "https://www.robot-coupe.com/export/en/p/cutters-r-7/18242", region: "EU" },
      { label: "Robot Coupe R602 V.V. (EUA)", url: "https://www.robot-coupe.com/usa/en_US/p/combination-processors-r-602-v-v/18428", region: "USA" },
      { label: "WebstaurantStore — R5VV (EUA)", url: "https://www.webstaurantstore.com/robot-coupe-r5vv-6-qt-59-liter-variable-speed-tabletop-cutter-mixer-food-processor-120v-1-phase-2-hp/649R5VV.html", region: "USA" },
    ],
  },
  {
    id: "EQ07", name: "Robot Coupe MP 450 Turbo — Mixer de Imersão", category: "Preparo",
    desc: "Mixer de braço de 45cm para emulsões, sopas e fundos diretamente na panela — até 60L de capacidade de processamento.",
    specs: ["Haste 450mm", "Velocidade Variável", "1.1 HP", "Copo medidor incluído"],
    voltage: "220V", power: "750W",
    links: [
      { label: "WebstaurantStore — MP450 Turbo (EUA)", url: "https://www.webstaurantstore.com/robot-coupe-mp450-turbo-18-immersion-blender-120v/649MP450TURB.html", region: "USA" },
      { label: "KaTom — MP450 Turbo (EUA)", url: "https://www.katom.com/126-MP450TURBO.html", region: "USA" },
      { label: "Narcel (Brasil)", url: "https://www.narcel.com.br/mixer-robot-coupe-mp450-ultra/p", region: "BR" },
      { label: "EngéFood (Brasil)", url: "https://engefood.com.br/produto/mixer-robot-coupe-mp-450-ultra/", region: "BR" },
    ],
  },
  {
    id: "EQ08", name: "Vitamix XL 5201 — Liquidificador Profissional", category: "Preparo",
    desc: "Liquidificador de alto desempenho para molhos densos, cremes pesados, fondues e maioneses em grande volume. Recipiente de 1,5 galão (5,7L).",
    specs: ["Cuba 5.7L (1.5 gal)", "4.2 HP", "Velocidade Variável", "Inox Inquebrável"],
    voltage: "220V", power: "3.0 kW",
    links: [
      { label: "WebstaurantStore — XL 5201 (EUA)", url: "https://www.webstaurantstore.com/vitamix-5201-xl-4-2-hp-variable-speed-blender-with-1-5-gallon-and-64-oz-containers-120v/9655201.html", region: "USA" },
      { label: "Vitamix Oficial (EUA)", url: "https://www.vitamix.com/us/en_us/shop/vitamix-xl", region: "USA" },
    ],
  },
  {
    id: "EQ09", name: "Gratinador Salamandra Garland GIR36C", category: "Finalização",
    desc: "Salamandra a gás de infravermelho para gratinar, caramelizar e finalizar pratos com precisão de temperatura e ajuste de altura.",
    specs: ["Infravermelho", "Ajuste de Altura", "Aço Inox AISI 430", "Countertop ou Range Mount"],
    voltage: "N/A (Gás)", power: "40.000 BTU",
    links: [
      { label: "KaTom — GIR36C (EUA)", url: "https://www.katom.com/451-GIR36CNG.html", region: "USA" },
      { label: "WebstaurantStore — GFIR36CM (EUA)", url: "https://www.webstaurantstore.com/garland-gfir36c-natural-gas-countertop-infra-red-salamander-broiler-for-gf-gfe36-series-ranges-40-000-btu/372GFIR36CN.html", region: "USA" },
    ],
  },
  {
    id: "EQ10", name: "Panasonic NE-3280 — Microondas Comercial 40L", category: "Apoio",
    desc: "Microondas sem prato giratório com duplo magnetron para regeneração rápida e homogênea. Fundo cerâmico de fácil higienização.",
    specs: ["3200W", "Duplo Magnetron", "Fundo Cerâmico", "Sem prato giratório"],
    voltage: "208–240V", power: "3.2 kW",
    links: [
      { label: "WebstaurantStore — NE-3280 (EUA)", url: "https://www.webstaurantstore.com/panasonic-ne-3280-sonic-steamer-commercial-microwave-oven-208-240v-3200w/609NE3280.html", region: "USA" },
      { label: "KaTom — NE-3280 (EUA)", url: "https://www.katom.com/182-NE3280.html", region: "USA" },
    ],
  },
  {
    id: "EQ11", name: "Hobart HL200 — Batedeira Planetária 20L", category: "Panificação",
    desc: "Batedeira robusta Legacy+ para massas pesadas, confeitaria e chantilly. Padrão de referência em cozinhas de alto volume.",
    specs: ["20 Litros (Legacy+)", "3 Velocidades", "Tigela Inox", "Batedor, Globo e Gancho"],
    voltage: "220V", power: "1.1 kW",
    links: [
      { label: "WebstaurantStore — HL200-1STD (EUA)", url: "https://www.webstaurantstore.com/hobart-legacy-hl200-1std-20-qt-commercial-planetary-stand-mixer-with-accessories-120v-1-2-hp/425HL2001STD.html", region: "USA" },
      { label: "KaTom — HL200-1STD (EUA)", url: "https://www.katom.com/617-HL2001STD.html", region: "USA" },
      { label: "ITW FEG Brasil — Hobart Oficial", url: "https://www.itwfeg.com.br/hobart/produto/batedeira-planetaria-hl300", region: "BR" },
    ],
  },
  {
    id: "EQ12", name: "Berkel X13A-PLUS — Laminador Automático de Frios", category: "Preparo Frio",
    desc: "Fatiador automático de embutidos, carpaccios e queijos com precisão milimétrica. Lâmina de 330mm com afiador integrado.",
    specs: ["Lâmina 330mm", "Afiador Integrado", "Automático / Manual", "Espessura 0–15mm"],
    voltage: "220V", power: "300W",
    links: [
      { label: "WebstaurantStore — X13A-PLUS (EUA)", url: "https://www.webstaurantstore.com/berkel-x13a-plus-13-automatic-gravity-feed-meat-slicer-1-2-hp/165X13A.html", region: "USA" },
      { label: "KaTom — X13A-PLUS (EUA)", url: "https://www.katom.com/105-X13APLUS.html", region: "USA" },
    ],
  },
  {
    id: "EQ13", name: "Vitamix The Quiet One — Liquidificador Bar", category: "Bar",
    desc: "Liquidificador de alta rotação com capa de isolamento acústico para uso em bar aberto — ideal para drinques, sucos e caldas sem interromper o ambiente.",
    specs: ["3 HP", "48oz (1.4L)", "Capa Acústica", "6 Programas Automáticos"],
    voltage: "220V", power: "2.2 kW",
    links: [
      { label: "WebstaurantStore — Quiet One (EUA)", url: "https://www.webstaurantstore.com/vitamix-36019-abab-the-quiet-one-3-hp-blender-with-cover-and-48-oz-container-120v/96536019.html", region: "USA" },
      { label: "Vitamix Comercial (EUA)", url: "https://www.vitamix.com/us/en_us/commercial/products?catalog_product_type=115", region: "USA" },
    ],
  },
  {
    id: "EQ14", name: "Sirman TC-22 Colorado — Moedor de Carne", category: "Açougue",
    desc: "Moedor boca 22 para blends exclusivos de hambúrguer artesanal, linguiças e farsas. Alta produção com inversão de giro para desobstrução.",
    specs: ["Boca 22", "2 HP", "Inversão de Giro", "Inox AISI 304"],
    voltage: "220V", power: "1.5 kW",
    links: [
      { label: "WebstaurantStore — TC-22 Colorado (EUA)", url: "https://www.webstaurantstore.com/sirman-2122965320018-tc-22-colorado-electric-meat-grinder/751229653218.html", region: "USA" },
      { label: "Alcalá (Brasil)", url: "https://www.alcala.com.br/produto/moedor-de-carne-colorado-22tc-sirman-alcala/", region: "BR" },
    ],
  },
  {
    id: "EQ15", name: "Waring WIH800 — Cooktop de Indução Duplo", category: "Apoio Quente",
    desc: "Cooktop de indução duplo para cocção limpa sem irradiação de calor — reduções, molhos e finalizações de pratos sem comprometer o ambiente da cozinha.",
    specs: ["2 Zonas independentes", "3600W total", "208–240V", "Painel Touch"],
    voltage: "208–240V", power: "3.6 kW",
    links: [
      { label: "WebstaurantStore — WIH800 (EUA)", url: "https://www.webstaurantstore.com/waring-wih800-double-commercial-induction-range-with-step-up-208-240v-3600w/929WIH800.html", region: "USA" },
      { label: "WebstaurantStore — WIH400 simples (EUA)", url: "https://www.webstaurantstore.com/waring-wih400-commercial-induction-range-120v-1800w/929WIH400.html", region: "USA" },
      { label: "Waring Oficial", url: "https://www.waring.com/heavy-duty-single-induction-range/WIH400.html", region: "USA" },
    ],
  },
  {
    id: "EQ16", name: "PolyScience Chef Series — Termocirculador Sous-Vide", category: "Cocção",
    desc: "Termocirculador de imersão com controle de ±0,05°C para cocção Sous-Vide de cortes nobres. Precisão absoluta para proteínas de alta performance.",
    specs: ["±0.05°C precisão", "Agitador de Água", "Até 40L", "Display Digital"],
    voltage: "220V", power: "1.1 kW",
    links: [
      { label: "WebstaurantStore — Chef Series (EUA)", url: "https://www.webstaurantstore.com/polyscience-svc-ac1b-sous-vide-circulator-120v-1100w/981SVCAC1B.html", region: "USA" },
      { label: "KaTom — SVC-AC1B (EUA)", url: "https://www.katom.com/811-SVCAC1B.html", region: "USA" },
      { label: "Amazon Brasil", url: "https://www.amazon.com.br/Circulador-imers%C3%A3o-Sous-PolyScience-CREATIVE/dp/B00NPYDAW8", region: "BR" },
    ],
  },
  {
    id: "EQ17", name: "Hobart AM-15 — Máquina de Lavar Louça (Porta)", category: "Higienização",
    desc: "Lavadora de louça tipo porta (door-type/basculante) de alto desempenho para serviço de dois turnos com 120 pessoas — ciclo de 60s, alta temperatura sanitizante.",
    specs: ["Tipo Porta (Basculante)", "Ciclo 60s", "Alta Temperatura", "Rack único 500×500mm"],
    voltage: "208–240V Trifásico", power: "9.0 kW",
    links: [
      { label: "WebstaurantStore — AM15-1 (EUA)", url: "https://www.webstaurantstore.com/hobart-am15-1-select-single-rack-high-low-temperature-straight-corner-dishwasher-208-240v-3-phase/425AM15-1.html", region: "USA" },
      { label: "KaTom — MDDTHTB60P (EUA)", url: "https://www.katom.com/997-MDDTHTB60P.html", region: "USA" },
      { label: "AC Müller — Hobart Ecomax 503 (Brasil)", url: "https://acmuller.com.br/maquina-de-lavar-loucas-ecomax503-380v-hobart.html", region: "BR" },
      { label: "Narcel — Hobart Ecomax 603 (Brasil)", url: "https://www.narcel.com.br/lavadora-de-louca-hobart-trifasico-ecomax-603-220/p", region: "BR" },
    ],
  },
  {
    id: "EQ18", name: "Winterhalter UC-M — Máquina de Lavar Copos (Bar)", category: "Bar",
    desc: "Lavadora de copos undercounter de alta eficiência para o bar do Moods — 48 racks/hora, padrão premium para copos de cristal e taças de vinho.",
    specs: ["48 racks/hora", "Undercounter", "Copos e Taças Cristal", "Detergente dosagem automática"],
    voltage: "380–400V Trifásico", power: "3.4 kW",
    links: [
      { label: "HorecaTraders — UC-M (Europa/Holanda)", url: "https://www.horecatraders.com/en/uc-m-400-v-energy-glass-washer.html", region: "EU" },
      { label: "HorecaTraders — UC-L (Europa)", url: "https://www.horecatraders.com/en/uc-l-400v-glasswasher.html", region: "EU" },
      { label: "Winterhalter Brasil (loja oficial)", url: "https://store-br.winterhalter.com/", region: "BR" },
    ],
  },
  {
    id: "EQ19", name: "Scotsman Prodigy Plus 500 lb — Máquina de Gelo (Bar)", category: "Bar",
    desc: "Máquina de gelo de alta produção (500 lb/dia) para atender os dois turnos com 120 pessoas no salão. Gelo em cubos médios ideais para copos e drinks premium.",
    specs: ["500 lb/dia (~227 kg)", "Cubo Médio", "Refrigeração a Água", "ENERGY STAR"],
    voltage: "208–230V", power: "1.3 kW",
    links: [
      { label: "WebstaurantStore — C0530MW-1 (EUA)", url: "https://www.webstaurantstore.com/scotsman-c0530mw-1e-prodigy-plus-series-30-water-cooled-medium-cube-ice-machine-500-lb/720C0530MW1.html", region: "USA" },
      { label: "KaTom — C0530 + Bin (EUA)", url: "https://www.katom.com/044-C0530MW1B530S.html", region: "USA" },
      { label: "WebstaurantStore — Hoshizaki KM-660MAJ 665lb (EUA)", url: "https://www.webstaurantstore.com/hoshizaki-km-660maj-slim-line-series-22-air-cooled-crescent-cube-ice-machine-115v-1-phase-665-lb/415KM660MAJA.html", region: "USA" },
      { label: "Pucci Cozinhas — Scotsman (Brasil)", url: "https://puccicozinhas.com.br/produto/maquina-de-gelo-scotsman-ac46/", region: "BR" },
    ],
  },
  {
    id: "EQ20", name: "Scotsman B330P — Baú de Estoque de Gelo", category: "Bar",
    desc: "Baú de armazenamento de gelo de 344 lb (156 kg) para estoque contínuo no bar — instalado ao lado da máquina de gelo Scotsman Prodigy Plus para garantir autonomia nos dois turnos com 120 pessoas.",
    specs: ["344 lb (156 kg) capacidade", "Isolamento de alta eficiência", "Compatível Scotsman Prodigy Plus", "Aço Inox exterior"],
    voltage: "N/A", power: "N/A",
    links: [
      { label: "WebstaurantStore — B330P (EUA)", url: "https://www.webstaurantstore.com/scotsman-b330p-ice-storage-bin-344-lb/720B330P.html", region: "USA" },
    ],
  },
];

const categoryColors: Record<string, string> = {
  "Cocção": "text-amber-700 bg-amber-50",
  "Preparo": "text-stone-600 bg-stone-100",
  "Conservação": "text-teal-700 bg-teal-50",
  "Processamento": "text-slate-600 bg-slate-100",
  "Finalização": "text-orange-700 bg-orange-50",
  "Apoio": "text-zinc-600 bg-zinc-100",
  "Panificação": "text-yellow-700 bg-yellow-50",
  "Preparo Frio": "text-sky-700 bg-sky-50",
  "Bar": "text-purple-700 bg-purple-50",
  "Açougue": "text-red-700 bg-red-50",
  "Apoio Quente": "text-orange-600 bg-orange-50",
  "Higienização": "text-emerald-700 bg-emerald-50",
};

const regionColors: Record<string, string> = {
  "USA": "text-blue-700 bg-blue-50",
  "EU": "text-indigo-700 bg-indigo-50",
  "BR": "text-green-700 bg-green-50",
};

// ─── Component ────────────────────────────────────────────────────────────────

type LightboxState = { categoryId: string; index: number } | null;

export function KitchenSection() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showVideo, setShowVideo] = useState(false);
  const [selectedEq, setSelectedEq] = useState<Equipment | null>(null);
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set(['projeto-bks', 'conceitos-descartados', 'pivotar-ab']));

  const toggleCollapse = (id: string) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  // Lightbox helpers
  const currentCategoryImages = lightbox
    ? galleryCategories.find((c) => c.id === lightbox.categoryId)?.images ?? []
    : [];

  const prevImg = () => {
    if (!lightbox) return;
    const total = currentCategoryImages.length;
    setLightbox({ ...lightbox, index: (lightbox.index - 1 + total) % total });
  };
  const nextImg = () => {
    if (!lightbox) return;
    const total = currentCategoryImages.length;
    setLightbox({ ...lightbox, index: (lightbox.index + 1) % total });
  };

  const visibleCategories =
    activeCategory === 'all'
      ? galleryCategories
      : galleryCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="cozinha" className="bg-aura-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-28">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-5 mb-6">
            <span className="section-label">A Cozinha & Galeria</span>
            <div className="section-divider" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-light text-aura-on-background leading-tight max-w-2xl">
            Ambiente, Técnica<br /><em className="italic">& Gastronomia</em>
          </h2>
          <p className="font-sans text-aura-on-surface-variant text-base mt-5 max-w-2xl leading-relaxed">
            Galeria visual organizada por categorias: do conceito arquitetônico à proposta gastronômica, passando pela aplicação da marca e pelo projeto técnico de cozinha.
          </p>
        </motion.div>

        {/* ── Vídeo em destaque — formato Stories 9:16 ── */}
        <div className="mb-16 flex items-start gap-8">
          {/* Container vertical 9:16, largura contida */}
          <div className="relative bg-aura-dark w-full max-w-[280px] aspect-[9/16] overflow-hidden shrink-0">
            {!showVideo ? (
              <>
                <div className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/assets/images/Hero_Cover_Steakhouse.jpg')" }} />
                <div className="absolute inset-0 bg-black/45" />
                <button
                  onClick={() => setShowVideo(true)}
                  className="absolute inset-0 flex flex-col items-center justify-center group"
                  aria-label="Reproduzir vídeo"
                >
                  <div className="w-14 h-14 border border-white/30 flex items-center justify-center bg-black/30 group-hover:bg-aura-primary-container/50 group-hover:border-aura-primary-container transition-all duration-300 mb-3">
                    <Play size={20} className="text-white ml-1" strokeWidth={1.5} />
                  </div>
                  <p className="font-sans text-[9px] tracking-[0.22em] uppercase text-white/40">Reproduzir</p>
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-sans text-[9px] tracking-[0.18em] uppercase text-white/35 leading-relaxed">
                    Moods<br />Conceito em Vídeo
                  </p>
                </div>
              </>
            ) : (
              <video
                autoPlay
                controls
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center' }}
              >
                <source src="/assets/images/Aurajs.mp4" type="video/mp4" />
              </video>
            )}
          </div>

          {/* Texto ao lado do vídeo */}
          <div className="hidden sm:flex flex-col justify-between py-2 flex-1">

            {/* Título */}
            <div>
              <div className="gold-line mb-5" />
              <h3 className="font-display text-2xl md:text-3xl font-light text-aura-on-background mb-3 leading-snug">
                O Moods<br /><em className="italic">em movimento</em>
              </h3>
              <p className="font-sans text-sm text-aura-on-surface-variant leading-relaxed max-w-sm">
                Uma visão imersiva do projeto — atmosfera do rooftop, identidade da brasa e a essência de uma cozinha concebida para operar com precisão de alto nível.
              </p>
            </div>

            {/* Pilares da cozinha */}
            <div className="mt-8 space-y-5">

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-aura-surface-container flex items-center justify-center shrink-0 mt-0.5">
                  <ChefHat size={15} className="text-aura-primary-container" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-[0.18em] uppercase font-semibold text-aura-on-background mb-1">Conceito Sofisticado</p>
                  <p className="font-sans text-xs text-aura-on-surface-variant leading-relaxed">
                    Cozinha projetada para um steakhouse de alto padrão — linha de cocção limpa, fluxo de serviço racionalizado e mise en place impecável como padrão de operação.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-aura-surface-container flex items-center justify-center shrink-0 mt-0.5">
                  <Zap size={15} className="text-aura-primary-container" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-[0.18em] uppercase font-semibold text-aura-on-background mb-1">Tecnologia de Ponta</p>
                  <p className="font-sans text-xs text-aura-on-surface-variant leading-relaxed">
                    Equipamentos de precisão — Rational iCombi Pro, termocirculador Sous-Vide, Thermomix TM7 — garantindo controle técnico rigoroso em cada etapa da produção.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-aura-surface-container flex items-center justify-center shrink-0 mt-0.5">
                  <Flame size={15} className="text-aura-primary-container" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-[0.18em] uppercase font-semibold text-aura-on-background mb-1">Engenharia de Serviço</p>
                  <p className="font-sans text-xs text-aura-on-surface-variant leading-relaxed">
                    Sequence of Service estruturada para ambos os modos operacionais — da parrilha aberta ao serviço à la carte — com tempo de prato, fluência de passagem e experiência do cliente como prioridade absoluta.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-aura-surface-container flex items-center justify-center shrink-0 mt-0.5">
                  <BookOpen size={15} className="text-aura-primary-container" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-[0.18em] uppercase font-semibold text-aura-on-background mb-1">Engenharia de Cardápio</p>
                  <p className="font-sans text-xs text-aura-on-surface-variant leading-relaxed">
                    Cardápio construído sobre análise de CMV, sazonalidade de insumos e rentabilidade por prato — cada item posicionado para maximizar a margem sem comprometer a identidade gastronômica.
                  </p>
                </div>
              </div>

            </div>

            <p className="font-sans text-[10px] tracking-[0.18em] uppercase text-aura-outline/40 mt-7">
              1 min 21 seg · Formato Stories · Vídeo Conceitual
            </p>
          </div>
        </div>

        {/* ── Tabs de categoria ── */}
        <div className="mb-10">
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-aura-outline/60 mb-5">Galeria por Categoria</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 font-sans text-xs tracking-[0.15em] uppercase font-medium transition-all duration-250 ${
                activeCategory === 'all'
                  ? 'bg-aura-primary-container text-aura-on-primary-container'
                  : 'bg-aura-surface border border-aura-outline/15 text-aura-on-surface-variant hover:border-aura-primary-container/40 hover:text-aura-on-background'
              }`}
            >
              Todas
            </button>
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 font-sans text-xs tracking-[0.15em] uppercase font-medium transition-all duration-250 ${
                  activeCategory === cat.id
                    ? 'bg-aura-primary-container text-aura-on-primary-container'
                    : 'bg-aura-surface border border-aura-outline/15 text-aura-on-surface-variant hover:border-aura-primary-container/40 hover:text-aura-on-background'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* ── Galeria categorizada ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-14 mb-20"
          >
            {visibleCategories.map((cat) => (
              <div key={cat.id}>
                {/* Cabeçalho da categoria */}
                {(cat.id === 'projeto-bks' || cat.id === 'conceitos-descartados' || cat.id === 'pivotar-ab') ? (
                  /* ── BKS / Descartados / Pivotar: header retrátil ── */
                  <button
                    onClick={() => toggleCollapse(cat.id)}
                    className="w-full flex items-center gap-4 mb-5 group text-left"
                  >
                    <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-aura-outline/30 group-hover:text-aura-outline/60 transition-colors">
                      {cat.folderName}
                    </span>
                    <div className="flex-1 h-px bg-aura-outline/8" />
                    <span className="font-mono text-[10px] text-aura-outline/25">
                      {cat.id === 'projeto-bks' ? `${cat.images.length} pranchas` : cat.id === 'pivotar-ab' ? `${cat.images.length} propostas` : `${cat.images.length} refs`}
                    </span>
                    <ChevronDown
                      size={14}
                      strokeWidth={1.5}
                      className={`text-aura-outline/30 group-hover:text-aura-outline/60 transition-all duration-300 ${collapsed.has(cat.id) ? '' : 'rotate-180'}`}
                    />
                  </button>
                ) : (
                  <div className="flex items-start justify-between mb-5 pb-4 border-b border-aura-outline/10">
                    <div>
                      <div className="flex items-center space-x-3 mb-1">
                        <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-aura-outline/40">
                          {cat.folderName}
                        </span>
                        <span className="text-aura-outline/20">→</span>
                      </div>
                      <h3 className="font-display text-xl font-light text-aura-on-background">{cat.title}</h3>
                      <p className="font-sans text-xs text-aura-on-surface-variant mt-1 leading-relaxed max-w-lg">{cat.subtitle}</p>
                    </div>
                    <span className="font-mono text-[11px] text-aura-outline/40 mt-1 shrink-0">
                      {String(cat.images.length).padStart(2, '0')} imagens
                    </span>
                  </div>
                )}

                {(cat.id === 'projeto-bks' || cat.id === 'conceitos-descartados' || cat.id === 'pivotar-ab') && collapsed.has(cat.id) ? null : cat.id === 'projeto-bks' ? (
                  /* ── BKS: carrossel horizontal estilo Netflix ── */
                  <div
                    className="flex gap-2 overflow-x-auto pb-3 -mx-2 px-2"
                    style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
                  >
                    {cat.images.map((img, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: Math.min(idx * 0.03, 0.3) }}
                        className="relative group shrink-0 cursor-pointer overflow-hidden bg-aura-surface-container"
                        style={{
                          scrollSnapAlign: 'start',
                          width: '160px',
                          aspectRatio: '3/4',
                        }}
                        onClick={() => setLightbox({ categoryId: cat.id, index: idx })}
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover transition-all duration-400 group-hover:scale-105 group-hover:brightness-90"
                          onError={(e) => {
                            const el = e.currentTarget as HTMLImageElement;
                            el.parentElement!.style.display = 'none';
                          }}
                        />
                        {/* número da prancha */}
                        <div className="absolute top-2 left-2 font-mono text-[10px] text-white/40 bg-black/30 px-1.5 py-0.5">
                          {String(idx + 1).padStart(2, '0')}
                        </div>
                        {/* overlay hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                          <ZoomIn size={16} className="text-white/80" strokeWidth={1.5} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  /* ── Demais categorias: grid normal ── */
                  <div className={`grid gap-2 ${
                    cat.images.length <= 3
                      ? 'grid-cols-1 sm:grid-cols-3'
                      : cat.images.length <= 4
                      ? 'grid-cols-2 sm:grid-cols-4'
                      : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
                  }`}>
                    {cat.images.map((img, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: idx * 0.04 }}
                        className="relative group aspect-square overflow-hidden bg-aura-surface-container cursor-pointer"
                        onClick={() => setLightbox({ categoryId: cat.id, index: idx })}
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            const el = e.currentTarget as HTMLImageElement;
                            el.parentElement!.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                          <ZoomIn size={18} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2">
                          <p className="font-sans text-[9px] text-white/70 truncate">{img.alt}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Engenharia de Equipamentos ── */}
        <div className="border-t border-aura-outline/10 pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-aura-outline/60 whitespace-nowrap">Engenharia de Equipamentos</p>
                <div className="section-divider" />
                <span className="font-sans text-[10px] text-aura-outline/40 whitespace-nowrap">20 itens · clique para specs e fornecedores</span>
              </div>
              <h3 className="font-display text-2xl font-light text-aura-on-background leading-snug">
                Seleção Técnica de<br /><em className="italic">Alto Padrão</em>
              </h3>
              <p className="font-sans text-xs text-aura-on-surface-variant mt-2 max-w-xl leading-relaxed">
                Cada equipamento foi especificado para atender a operação em dois turnos diários com capacidade de <strong className="text-aura-on-background font-semibold">120 pessoas por expediente</strong> — links para fabricantes e distribuidores nos EUA, Europa e Brasil disponíveis em cada card.
              </p>
            </div>
            {/* Capacidade badge */}
            <div className="flex items-center gap-6 shrink-0 border border-aura-outline/10 bg-aura-surface px-6 py-4">
              <div className="text-center">
                <p className="font-display text-3xl font-light text-aura-primary-container">120</p>
                <p className="font-sans text-[9px] uppercase tracking-widest text-aura-on-surface-variant mt-0.5">Pessoas / Turno</p>
              </div>
              <div className="w-px h-8 bg-aura-outline/15" />
              <div className="text-center">
                <p className="font-display text-3xl font-light text-aura-primary-container">2×</p>
                <p className="font-sans text-[9px] uppercase tracking-widest text-aura-on-surface-variant mt-0.5">Turnos / Dia</p>
              </div>
              <div className="w-px h-8 bg-aura-outline/15" />
              <div className="text-center">
                <p className="font-display text-3xl font-light text-aura-primary-container">240</p>
                <p className="font-sans text-[9px] uppercase tracking-widest text-aura-on-surface-variant mt-0.5">Cap. Diária</p>
              </div>
            </div>
          </div>

          {/* Observação sobre armazenamento refrigerado */}
          <div className="mb-6 border-l-2 border-aura-primary-container/40 pl-5 py-2">
            <p className="font-sans text-xs text-aura-on-surface-variant leading-relaxed">
              <span className="font-semibold text-aura-on-background">Nota sobre armazenamento refrigerado:</span>{' '}
              O sistema de armazenamento frigorífico primário está localizado no térreo na seção de câmaras frias. O armazenamento secundário refrigerado/congelados no restaurante será integrado aos monoblocos BKS. Para a engenharia de abastecimento — horários, frequência e fluxo de reposição — consultar o documento <em>Plano Mestre Operacional v2</em>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {equipments.map((eq, idx) => (
              <motion.div
                key={eq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (idx % 8) * 0.04 }}
                onClick={() => setSelectedEq(eq)}
                className="bg-aura-surface border border-aura-outline/10 p-5 cursor-pointer group hover:border-aura-primary-container/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="font-mono text-[10px] text-aura-outline/40">{eq.id}</span>
                  <span className={`text-[10px] uppercase tracking-wider font-sans font-semibold px-2 py-0.5 ${categoryColors[eq.category] ?? ''}`}>
                    {eq.category}
                  </span>
                </div>
                <h3 className="font-display text-base font-light text-aura-on-background leading-snug group-hover:text-aura-primary-container transition-colors">
                  {eq.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)} className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

            <motion.div initial={{ opacity: 0, scale: 0.93 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.93 }}
              transition={{ duration: 0.22 }} className="relative z-10 max-w-4xl w-full">
              <img
                src={currentCategoryImages[lightbox.index]?.src}
                alt={currentCategoryImages[lightbox.index]?.alt}
                className="w-full h-auto max-h-[78vh] object-contain"
              />
              {/* Caption */}
              <div className="flex items-center justify-between mt-4 px-1">
                <button onClick={(e) => { e.stopPropagation(); prevImg(); }}
                  className="text-white/50 hover:text-white font-sans text-xs tracking-widest uppercase transition-colors">← Anterior</button>
                <div className="text-center">
                  <p className="text-white/60 font-sans text-xs">{currentCategoryImages[lightbox.index]?.alt}</p>
                  <p className="text-white/25 font-mono text-[10px] mt-0.5">{lightbox.index + 1} / {currentCategoryImages.length}</p>
                </div>
                <button onClick={(e) => { e.stopPropagation(); nextImg(); }}
                  className="text-white/50 hover:text-white font-sans text-xs tracking-widest uppercase transition-colors">Próximo →</button>
              </div>
            </motion.div>

            <button onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 z-20 text-white/50 hover:text-white transition-colors">
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
        )}
      </AnimatePresence>

      {/* ── Modal Equipamento ── */}
      <AnimatePresence>
        {selectedEq && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedEq(null)} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative bg-aura-surface w-full max-w-xl p-8 md:p-10 shadow-2xl z-10 border border-aura-outline/15">
              <button onClick={() => setSelectedEq(null)}
                className="absolute top-5 right-5 text-aura-outline hover:text-aura-on-background transition-colors">
                <X size={20} strokeWidth={1.5} />
              </button>
              <div className="flex items-center space-x-3 mb-5">
                <span className="font-mono text-[10px] text-aura-outline/40">{selectedEq.id}</span>
                <span className="text-aura-outline/20">·</span>
                <span className={`text-[10px] uppercase tracking-wider font-sans font-semibold px-2 py-0.5 ${categoryColors[selectedEq.category] ?? ''}`}>
                  {selectedEq.category}
                </span>
              </div>
              <h3 className="text-2xl font-display font-light text-aura-on-background mb-4 pr-8">{selectedEq.name}</h3>
              <p className="font-sans text-aura-on-surface-variant text-sm leading-relaxed mb-7">{selectedEq.desc}</p>
              <div className="bg-aura-surface-container-low p-5 border-l-2 border-aura-primary-container/50 grid grid-cols-2 gap-5 mb-6">
                <div>
                  <div className="flex items-center mb-2 space-x-2">
                    <Zap size={12} className="text-aura-primary-container" />
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-aura-on-background">Potência / Tensão</span>
                  </div>
                  <p className="text-sm text-aura-on-surface-variant font-sans">{selectedEq.power} · {selectedEq.voltage}</p>
                </div>
                <div>
                  <div className="flex items-center mb-2 space-x-2">
                    <ShieldCheck size={12} className="text-aura-primary-container" />
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-aura-on-background">Highlights</span>
                  </div>
                  <ul className="text-sm text-aura-on-surface-variant font-sans space-y-0.5">
                    {selectedEq.specs.map((s, i) => <li key={i}><span className="text-aura-primary-container mr-1">·</span>{s}</li>)}
                  </ul>
                </div>
              </div>
              {selectedEq.links && selectedEq.links.length > 0 && (
                <div>
                  <p className="text-[10px] font-sans font-semibold uppercase tracking-wider text-aura-on-background mb-3">Fornecedores & Referências</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedEq.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 border border-aura-outline/15 bg-aura-surface-container-low hover:border-aura-primary-container/40 transition-colors group"
                      >
                        <span className={`text-[9px] font-sans font-semibold uppercase tracking-wider px-1.5 py-0.5 ${regionColors[link.region] ?? ''}`}>
                          {link.region}
                        </span>
                        <span className="font-sans text-xs text-aura-on-surface-variant group-hover:text-aura-on-background transition-colors">
                          {link.label}
                        </span>
                        <span className="text-aura-outline/40 text-xs">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
