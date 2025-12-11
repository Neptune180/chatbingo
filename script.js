// ====================================
// 20 CÓDIGOS SECRETOS PARA CADA BINGO
// ====================================
const CODIGOS_SECRETOS = {
  // Códigos únicos y secretos para cada bingo
  "GOTY2024": "bingo1.html",      // Bingo 1
  "GAMER2024": "bingo2.html",     // Bingo 2  
  "AWARDWIN": "bingo3.html",      // Bingo 3
  "PREMIOS24": "bingo4.html",     // Bingo 4
  "NEONPLAY": "bingo5.html",      // Bingo 5
  "CYBERGAME": "bingo6.html",     // Bingo 6
  "STREAMERX": "bingo7.html",     // Bingo 7
  "GAMINGFUN": "bingo8.html",     // Bingo 8
  "PLAYHARD": "bingo9.html",      // Bingo 9
  "WINNER2024": "bingo10.html",   // Bingo 10
  "GAMETIME": "bingo11.html",     // Bingo 11
  "BINGOMASTER": "bingo12.html",  // Bingo 12
  "PLAYBINGO": "bingo13.html",    // Bingo 13
  "GAMEON24": "bingo14.html",     // Bingo 14
  "AWARDFEST": "bingo15.html",    // Bingo 15
  "GAMERZONE": "bingo16.html",    // Bingo 16
  "PLAYNOW24": "bingo17.html",    // Bingo 17
  "BINGOKING": "bingo18.html",    // Bingo 18
  "GAMING24": "bingo19.html",     // Bingo 19
  "THEGAME2024": "bingo20.html"   // Bingo 20
};

// ====================================
// VERIFICAR CÓDIGO DE ACCESO
// ====================================
function verificarCodigo() {
  const input = document.getElementById("codeInput");
  const mensaje = document.getElementById("msg");
  const boton = document.getElementById("accessBtn");
  
  const codigoIngresado = input.value.trim().toUpperCase();
  
  // Resetear mensaje
  mensaje.textContent = "";
  mensaje.className = "access-message";
  
  if (!codigoIngresado) {
    mensaje.textContent = "⚠️ Por favor, ingresa un código";
    mensaje.className = "access-message error";
    input.focus();
    return;
  }
  
  // Verificar si el código existe
  const paginaDestino = CODIGOS_SECRETOS[codigoIngresado];
  
  if (paginaDestino) {
    // Código correcto
    const numeroBingo = paginaDestino.replace('bingo', '').replace('.html', '');
    
    mensaje.textContent = `✅ Accediendo al Bingo ${numeroBingo}...`;
    mensaje.className = "access-message success";
    
    // Deshabilitar controles
    boton.disabled = true;
    input.disabled = true;
    boton.textContent = "ACCEDIENDO...";
    
    // Efecto visual de éxito
    input.style.background = "rgba(0, 255, 85, 0.2)";
    input.style.color = "#00ff55";
    input.style.border = "1px solid #00ff55";
    
    // Redirigir después de 1.5 segundos
    setTimeout(() => {
      window.location.href = paginaDestino;
    }, 1500);
    
  } else {
    // Código incorrecto
    mensaje.textContent = "❌ Código incorrecto";
    mensaje.className = "access-message error";
    
    // Efecto de error
    input.style.animation = "shake 0.5s";
    input.style.background = "rgba(255, 51, 51, 0.2)";
    input.style.color = "#ff3333";
    input.style.border = "1px solid #ff3333";
    
    // Limpiar input
    input.value = "";
    
    // Restaurar estilos después de la animación
    setTimeout(() => {
      input.style.animation = "";
      input.style.background = "rgba(255, 255, 255, 0.95)";
      input.style.color = "#000";
      input.style.border = "none";
      input.focus();
    }, 500);
  }
}

// ====================================
// DETECTAR NÚMERO DE BINGO
// ====================================
function obtenerNumeroBingo() {
  const nombreArchivo = window.location.pathname.split('/').pop();
  
  if (nombreArchivo.startsWith('bingo') && nombreArchivo.endsWith('.html')) {
    const numero = nombreArchivo.replace('bingo', '').replace('.html', '');
    const numeroInt = parseInt(numero);
    
    if (!isNaN(numeroInt) && numeroInt >= 1 && numeroInt <= 20) {
      return numeroInt;
    }
  }
  
  return 1; // Por defecto
}

// ====================================
// OBTENER CÓDIGO DE ESTE BINGO
// ====================================
function obtenerCodigoBingo() {
  const numeroBingo = obtenerNumeroBingo();
  
  // Buscar el código correspondiente a este bingo
  for (const [codigo, archivo] of Object.entries(CODIGOS_SECRETOS)) {
    const numArchivo = archivo.replace('bingo', '').replace('.html', '');
    if (parseInt(numArchivo) === numeroBingo) {
      return codigo;
    }
  }
  
  return `BINGO${String(numeroBingo).padStart(2, '0')}`;
}

// ====================================
// INICIALIZACIÓN
// ====================================
window.addEventListener("load", () => {
  console.log("🔐 Sistema de acceso cargado");
  
  // Si estamos en index.html, configurar el input
  const codeInput = document.getElementById('codeInput');
  if (codeInput) {
    // Event listener para Enter
    codeInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        verificarCodigo();
      }
    });
    
    // Auto-focus después de un momento
    setTimeout(() => {
      codeInput.focus();
    }, 300);
  }
  
  // Aplicar tema si estamos en un bingo
  if (obtenerNumeroBingo() > 0 && document.getElementById('board-wrap')) {
    document.body.classList.add(`bingo-${obtenerNumeroBingo()}`);
    document.title = `Bingo ${obtenerNumeroBingo()} - The Game Awards`;
  }
});

// ====================================
// ANIMACIÓN SHAKE PARA ERROR
// ====================================
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
  }
`;
document.head.appendChild(style);

// ====================================
// EXPORTAR FUNCIONES GLOBALES
// ====================================
window.verificarCodigo = verificarCodigo;
window.obtenerNumeroBingo = obtenerNumeroBingo;
window.obtenerCodigoBingo = obtenerCodigoBingo;