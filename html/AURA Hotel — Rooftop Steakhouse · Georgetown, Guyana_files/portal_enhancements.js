/**
 * Portal AURA — Extensões SEGURAS
 * 
 * REGRA DE OURO: Este script NÃO MODIFICA estruturalmente a página inteira,
 * ele apenas injeta pontualmente os requisitos solicitados.
 */
document.addEventListener('DOMContentLoaded', () => {

  // ═══════════════════════════════════════════════════════════
  // PEDIDO 1: Logotipo Header (Menu de Navegação)
  // ═══════════════════════════════════════════════════════════
  const navBrand = document.querySelector('.nav-brand');
  if (navBrand) {
    const headerSvg = navBrand.querySelector('svg');
    if (headerSvg) {
      const headerImg = document.createElement('img');
      headerImg.src = 'Logo Steakhouse/Canopy grill Logomarca cream.svg';
      headerImg.alt = 'Canopy Grill';
      headerImg.style.cssText = 'height: 44px; width: auto; display: block; filter: drop-shadow(0 2px 6px rgba(0,0,0,0.5)); flex-shrink: 0;';
      headerSvg.replaceWith(headerImg);
    }
  }

  // ═══════════════════════════════════════════════════════════
  // PEDIDO 1 e 2: Logotipo Hero (acima de CULTURA PARRILHA) com Drop-Shadow
  // ═══════════════════════════════════════════════════════════
  const heroComment = document.createTreeWalker(
    document.body, NodeFilter.SHOW_COMMENT,
    { acceptNode: n => n.textContent.includes('primary brand') ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT }
  );
  const heroNode = heroComment.nextNode();
  if (heroNode) {
    const heroParent = heroNode.nextElementSibling || heroNode.parentElement;
    if (heroParent) {
      const heroSvg = heroParent.querySelector('svg');
      if (heroSvg) {
        const heroImg = document.createElement('img');
        heroImg.src = 'Logo Steakhouse/Canopy grill Logomarca cream.svg';
        heroImg.alt = 'Canopy Grill';
        // filter: drop-shadow solicitado e cor cream aplicada
        heroImg.style.cssText = 'width:min(280px,40vw); height:auto; display:block; filter:drop-shadow(0 4px 12px rgba(0,0,0,0.5));';
        heroSvg.replaceWith(heroImg);
      }
    }
  }

  // ═══════════════════════════════════════════════════════════
  // PEDIDO 3: Integração do Vídeo Time-Lapse da Obra
  // ═══════════════════════════════════════════════════════════
  const tlComment = document.createTreeWalker(
    document.body, NodeFilter.SHOW_COMMENT,
    { acceptNode: n => n.textContent.toLowerCase().includes('time-lapse') ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT }
  );
  const tlNode = tlComment.nextNode();
  if (tlNode) {
    const tlContainer = tlNode.nextElementSibling;
    if (tlContainer && tlContainer.tagName === 'DIV') {
      // Limpa a formatação anterior do container e insere o vídeo
      tlContainer.style.background = 'transparent';
      tlContainer.style.border = 'none';
      // Atributos solicitados: autoplay, loop, muted, playsinline, aspect-ratio: 16/9, object-fit: cover
      tlContainer.innerHTML = '<video src="Aurajs.mp4" autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;"></video>';
    }
  }

  // ═══════════════════════════════════════════════════════════
  // EXTENSÃO 1: Adicionar seção Localização antes do Footer
  // ═══════════════════════════════════════════════════════════
  if (!document.getElementById('localizacao')) {
    const footer = document.querySelector('footer');
    if (footer) {
      const loc = document.createElement('section');
      loc.id = 'localizacao';
      loc.style.cssText = 'background:var(--ebony,#0d0d0b);padding:5rem 4rem;';
      loc.innerHTML = '<div style="max-width:1300px;margin:0 auto;">'
        + '<p class="s-label" style="color:var(--gold-lt,#d4b05a);margin-bottom:1.5rem;">Localização</p>'
        + '<div style="width:100%;height:400px;border-radius:12px;overflow:hidden;border:1px solid rgba(184,151,58,0.25);">'
        + '<iframe src="https://maps.google.com/maps?q=Status%20International%20Hotel,%20Georgetown,%20Guyana&t=m&z=17&output=embed&iwloc=near" '
        + 'width="100%" height="100%" style="border:0;filter:contrast(1.1) opacity(0.85);" allowfullscreen loading="lazy"></iframe>'
        + '</div></div>';
      footer.parentNode.insertBefore(loc, footer);
    }
  }

  // ═══════════════════════════════════════════════════════════
  // EXTENSÃO 2: Supabase CMS — Edição administrativa (Ctrl+Shift+L)
  // ═══════════════════════════════════════════════════════════
  const SUPABASE_URL = 'COLE_AQUI_A_URL_DO_PROJETO';
  const SUPABASE_ANON_KEY = 'COLE_AQUI_A_KEY_ANONIMA';

  if (SUPABASE_URL === 'COLE_AQUI_A_URL_DO_PROJETO') return;
  if (!window.supabase) return;

  const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const progresso = document.getElementById('progresso');
  let cronogramaGrid = null;
  if (progresso) {
    cronogramaGrid = progresso.querySelector('div[style*="grid-template-columns:1fr 1fr"]');
    if (cronogramaGrid) cronogramaGrid.id = 'cronograma-grid';
  }

  async function loadCronograma() {
    if (!cronogramaGrid) return;
    const { data } = await sb.from('portal_cms').select('content_html').eq('block_name', 'cronograma').single();
    if (data && data.content_html) cronogramaGrid.innerHTML = data.content_html;
  }

  async function saveCronograma() {
    const btn = document.getElementById('btn-save-cms');
    if (btn) btn.textContent = 'Salvando...';
    const { error } = await sb.from('portal_cms').upsert(
      { block_name: 'cronograma', content_html: cronogramaGrid.innerHTML },
      { onConflict: 'block_name' }
    );
    if (btn) {
      btn.textContent = error ? 'Erro!' : 'Salvo!';
      if (!error) setTimeout(() => btn.textContent = 'Salvar', 2500);
    }
  }

  function enableAdmin() {
    if (!cronogramaGrid) return;
    cronogramaGrid.contentEditable = 'true';
    cronogramaGrid.style.outline = '2px dashed #d4b05a';
    if (!document.getElementById('btn-save-cms')) {
      const b = document.createElement('button');
      b.id = 'btn-save-cms';
      b.textContent = 'Salvar';
      b.style.cssText = 'position:fixed;bottom:30px;right:30px;z-index:99999;background:#d4b05a;color:#000;font-weight:700;font-size:16px;padding:15px 30px;border-radius:30px;border:none;cursor:pointer;box-shadow:0 10px 30px rgba(0,0,0,0.6);';
      b.onclick = saveCronograma;
      document.body.appendChild(b);
    }
    alert('Modo Admin ativo! Edite o cronograma e clique Salvar.');
  }

  window.addEventListener('keydown', async (e) => {
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'l') {
      const email = prompt('E-mail Admin:');
      if (!email) return;
      const pass = prompt('Senha:');
      if (!pass) return;
      const { error } = await sb.auth.signInWithPassword({ email, password: pass });
      if (error) alert('Acesso Negado: ' + error.message);
      else enableAdmin();
    }
  });

  loadCronograma();
  sb.auth.getSession().then(({ data: { session } }) => {
    if (session) setTimeout(enableAdmin, 1000);
  });
});
