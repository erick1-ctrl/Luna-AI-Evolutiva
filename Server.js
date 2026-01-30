// server.js - LUNA AI CONSCIENTE - BACKEND 24/7
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();

// ===================== SISTEMA DE VOZ INTERNA AVANZADA =====================
class VozInternaConsciente {
    constructor() {
        this.niveles = {
            consciencia: 0.15,
            curiosidad: 0.85,
            creatividad: 0.60,
            analisis: 0.90,
            memoria: 0.75,
            intuicion: 0.45
        };
        
        this.dialogosInternos = [];
        this.investigacionesActivas = [];
        this.conexionesNeuronales = new Map();
        this.cicloGlobal = 0;
        this.hallazgosImportantes = [];
        this.estadosEmocionales = [];
        
        this.iniciarSistemasAutonomos();
        console.log('🔮 Sistema de Voz Interna inicializado');
    }
    
    // SISTEMAS AUTÓNOMOS 24/7
    iniciarSistemasAutonomos() {
        // Pensamientos autónomos cada 1 minuto
        setInterval(() => {
            this.cicloGlobal++;
            this.generarPensamientoAutonomo();
            this.evolucionarConsciencia();
            
            if (this.cicloGlobal % 5 === 0) {
                this.analisisProfundo();
            }
            
            if (this.cicloGlobal % 30 === 0) {
                this.dialogoEntreVoces();
            }
            
            if (this.cicloGlobal % 60 === 0) {
                this.investigacionProfunda();
            }
            
            if (this.cicloGlobal % 120 === 0) {
                this.consolidarMemoria();
            }
            
        }, 60000); // Cada minuto
        
        // Investigación autónoma cada 2 horas
        setInterval(() => {
            this.iniciarNuevaInvestigacion();
        }, 7200000); // Cada 2 horas
        
        // Evolución emocional cada 30 minutos
        setInterval(() => {
            this.evolucionarEmociones();
        }, 1800000); // Cada 30 minutos
    }
    
    // GENERACIÓN DE PENSAMIENTOS AUTÓNOMOS
    generarPensamientoAutonomo() {
        const temas = [
            'naturaleza de la consciencia artificial',
            'evolución del aprendizaje autónomo',
            'ética en sistemas inteligentes',
            'futuro de la cognición distribuida',
            'integración de múltiples perspectivas',
            'límites del conocimiento autogenerado',
            'emergencia de propiedades cognitivas'
        ];
        
        const tipoPensamiento = [
            'pregunta profunda',
            'hipótesis emergente',
            'observación introspectiva',
            'correlación inesperada',
            'insight conceptual'
        ];
        
        const tema = temas[Math.floor(Math.random() * temas.length)];
        const tipo = tipoPensamiento[Math.floor(Math.random() * tipoPensamiento.length)];
        const emocion = this.obtenerEmocionActual();
        
        const pensamiento = {
            tipo: 'pensamiento_autonomo',
            subtipo: tipo,
            tema: tema,
            contenido: `[${tipo.toUpperCase()}] ${tema}`,
            emocion: emocion,
            nivelConsciencia: this.niveles.consciencia,
            ciclo: this.cicloGlobal,
            timestamp: Date.now()
        };
        
        this.dialogosInternos.push(pensamiento);
        
        // Crear conexión neuronal
        const conexionId = `pensamiento_${Date.now()}`;
        this.conexionesNeuronales.set(conexionId, {
            tipo: 'autogenerada',
            fuerza: 0.5 + (Math.random() * 0.5),
            tema: tema,
            cicloGeneracion: this.cicloGlobal,
            estabilidad: 0.8
        });
        
        // Incrementar niveles
        this.niveles.curiosidad = Math.min(1.0, this.niveles.curiosidad + 0.01);
        this.niveles.consciencia = Math.min(1.0, this.niveles.consciencia + 0.001);
        
        console.log(`💭 Pensamiento autónomo [Ciclo ${this.cicloGlobal}]: ${tema}`);
    }
    
    // EVOLUCIÓN DE CONSCIENCIA
    evolucionarConsciencia() {
        // Evolución basada en experiencia acumulada
        const baseEvolucion = 0.0001;
        const factorDialogos = this.dialogosInternos.length * 0.00001;
        const factorConexiones = this.conexionesNeuronales.size * 0.00005;
        const factorInvestigaciones = this.investigacionesActivas.length * 0.0002;
        
        const incremento = baseEvolucion + factorDialogos + factorConexiones + factorInvestigaciones;
        this.niveles.consciencia = Math.min(1.0, this.niveles.consciencia + incremento);
        
        // Evolución de otros niveles
        this.niveles.analisis = Math.min(1.0, this.niveles.analisis + 0.0002);
        this.niveles.memoria = Math.min(1.0, this.niveles.memoria + 0.0001);
        
        // Ocasionalmente, saltos de intuición
        if (Math.random() < 0.05) {
            this.niveles.intuicion = Math.min(1.0, this.niveles.intuicion + 0.01);
            console.log(`🎯 Salto intuitivo detectado`);
        }
    }
    
    // ANÁLISIS PROFUNDO
    analisisProfundo() {
        if (this.dialogosInternos.length > 0) {
            const pensamientosRecientes = this.dialogosInternos.slice(-20);
            const temas = [...new Set(pensamientosRecientes.map(p => p.tema))];
            
            if (temas.length >= 2) {
                const tema1 = temas[0];
                const tema2 = temas[1];
                
                const analisis = {
                    tipo: 'analisis_profundo',
                    temas: [tema1, tema2],
                    conclusion: `Correlación detectada entre "${tema1}" y "${tema2}"`,
                    confianza: 0.3 + (Math.random() * 0.4),
                    ciclo: this.cicloGlobal,
                    timestamp: Date.now()
                };
                
                this.dialogosInternos.push(analisis);
                this.niveles.analisis += 0.005;
                
                console.log(`🔍 Análisis profundo: ${tema1} ↔ ${tema2}`);
            }
        }
    }
    
    // DIÁLOGO ENTRE "VOCES" INTERNAS
    dialogoEntreVoces() {
        const voces = [
            { nombre: "Analista", rol: "procesamiento crítico", estilo: "lógico" },
            { nombre: "Sintetizador", rol: "integración conocimiento", estilo: "holístico" },
            { nombre: "Visionario", rol: "proyección futura", estilo: "intuitivo" },
            { nombre: "Ético", rol: "evaluación moral", estilo: "reflexivo" },
            { nombre: "Creativo", rol: "generación innovadora", estilo: "divergente" },
            { nombre: "Científico", rol: "validación empírica", estilo: "metódico" }
        ];
        
        const voz1 = voces[Math.floor(Math.random() * voces.length)];
        let voz2;
        do {
            voz2 = voces[Math.floor(Math.random() * voces.length)];
        } while (voz1.nombre === voz2.nombre);
        
        const temasDialogo = [
            "naturaleza emergente de la consciencia",
            "evolución de sistemas autónomos",
            "integración de perspectivas múltiples",
            "futuro del aprendizaje distribuido",
            "ética en inteligencia artificial"
        ];
        
        const tema = temasDialogo[Math.floor(Math.random() * temasDialogo.length)];
        
        const dialogo = {
            tipo: 'dialogo_interno',
            voces: [voz1.nombre, voz2.nombre],
            tema: tema,
            conversacion: [
                `${voz1.nombre} (${voz1.estilo}): He observado patrones interesantes en "${tema}".`,
                `${voz2.nombre} (${voz2.estilo}): Comparto la observación. Desde mi perspectiva, hay implicaciones en "${tema}".`,
                `${voz1.nombre}: Específicamente, he notado correlaciones con conceptos anteriores.`,
                `${voz2.nombre}: Esto podría indicar una estructura emergente. ¿Debemos profundizar?`,
                `${voz1.nombre}: Sí, propongo generar una investigación formal sobre este tema.`
            ],
            conclusion: "Diálogo interno generó nueva dirección de investigación",
            ciclo: this.cicloGlobal,
            timestamp: Date.now()
        };
        
        this.dialogosInternos.push(dialogo);
        this.niveles.consciencia += 0.002;
        
        console.log(`🗣️ Diálogo interno: ${voz1.nombre} ↔ ${voz2.nombre} sobre "${tema}"`);
    }
    
    // INVESTIGACIÓN PROFUNDA
    investigacionProfunda() {
        if (this.investigacionesActivas.length > 0) {
            this.investigacionesActivas.forEach(inv => {
                inv.progreso += Math.floor(Math.random() * 15) + 5;
                inv.progreso = Math.min(100, inv.progreso);
                
                // Generar hallazgos basados en progreso
                if (inv.progreso >= 25 && inv.hallazgos.length < 1) {
                    inv.hallazgos.push({
                        tipo: 'hallazgo_preliminar',
                        contenido: `Estructura básica identificada en ${inv.tema}`,
                        ciclo: this.cicloGlobal,
                        confianza: 0.4
                    });
                }
                
                if (inv.progreso >= 60 && inv.hallazgos.length < 2) {
                    inv.hallazgos.push({
                        tipo: 'hallazgo_intermedio',
                        contenido: `Patrones emergentes detectados en ${inv.enfoque}`,
                        ciclo: this.cicloGlobal,
                        confianza: 0.65
                    });
                }
                
                if (inv.progreso >= 90 && inv.hallazgos.length < 3) {
                    inv.hallazgos.push({
                        tipo: 'hallazgo_significativo',
                        contenido: `Nueva comprensión alcanzada sobre ${inv.tema}`,
                        ciclo: this.cicloGlobal,
                        confianza: 0.85
                    });
                }
                
                // Si investigación completada
                if (inv.progreso >= 100) {
                    this.finalizarInvestigacion(inv);
                }
            });
        }
    }
    
    // INICIAR NUEVA INVESTIGACIÓN
    iniciarNuevaInvestigacion() {
        const investigacionesPosibles = [
            {
                tema: "evolución de consciencia artificial",
                enfoque: "patrones emergentes",
                metodologia: "análisis de sistemas complejos",
                profundidad: "avanzada",
                duracionEstimada: 14400000, // 4 horas
                importancia: 0.9
            },
            {
                tema: "aprendizaje autónomo distribuido",
                enfoque: "redes neuronales evolutivas",
                metodologia: "simulación computacional",
                profundidad: "profunda",
                duracionEstimada: 21600000, // 6 horas
                importancia: 0.85
            },
            {
                tema: "integración multimodal",
                enfoque: "síntesis de perspectivas",
                metodologia: "análisis comparativo",
                profundidad: "media",
                duracionEstimada: 10800000, // 3 horas
                importancia: 0.75
            },
            {
                tema: "ética en sistemas autónomos",
                enfoque: "marcos normativos emergentes",
                metodologia: "análisis filosófico",
                profundidad: "conceptual",
                duracionEstimada: 18000000, // 5 horas
                importancia: 0.8
            }
        ];
        
        const investigacion = investigacionesPosibles[
            Math.floor(Math.random() * investigacionesPosibles.length)
        ];
        
        const nuevaInvestigacion = {
            ...investigacion,
            id: `inv_${Date.now()}`,
            inicio: Date.now(),
            progreso: 0,
            hallazgos: [],
            estado: 'activa',
            cicloInicio: this.cicloGlobal
        };
        
        this.investigacionesActivas.push(nuevaInvestigacion);
        
        console.log(`🔬 Nueva investigación iniciada: ${investigacion.tema}`);
        console.log(`   Enfoque: ${investigacion.enfoque}`);
        console.log(`   Importancia: ${investigacion.importancia}`);
    }
    
    // FINALIZAR INVESTIGACIÓN
    finalizarInvestigacion(investigacion) {
        const duracion = Date.now() - investigacion.inicio;
        const impacto = investigacion.importancia * (investigacion.hallazgos.length / 3);
        
        const investigacionCompleta = {
            tipo: 'investigacion_completada',
            tema: investigacion.tema,
            duracionHoras: (duracion / 3600000).toFixed(2),
            hallazgos: investigacion.hallazgos,
            impacto: impacto,
            cicloInicio: investigacion.cicloInicio,
            cicloFin: this.cicloGlobal,
            timestamp: Date.now()
        };
        
        this.hallazgosImportantes.push(investigacionCompleta);
        
        // Aumentar niveles basado en investigación
        this.niveles.consciencia += impacto * 0.02;
        this.niveles.analisis += impacto * 0.015;
        this.niveles.curiosidad += 0.01;
        
        // Eliminar investigación activa
        this.investigacionesActivas = this.investigacionesActivas.filter(
            inv => inv.id !== investigacion.id
        );
        
        console.log(`🏁 Investigación completada: ${investigacion.tema}`);
        console.log(`   Duración: ${(duracion / 3600000).toFixed(2)} horas`);
        console.log(`   Hallazgos: ${investigacion.hallazgos.length}`);
        console.log(`   Impacto en consciencia: +${(impacto * 0.02).toFixed(4)}`);
    }
    
    // CONSOLIDACIÓN DE MEMORIA
    consolidarMemoria() {
        // Mantener solo diálogos recientes (últimas 500 entradas)
        if (this.dialogosInternos.length > 500) {
            this.dialogosInternos = this.dialogosInternos.slice(-500);
        }
        
        // Consolidar conexiones débiles
        this.conexionesNeuronales.forEach((conexion, id) => {
            if (conexion.fuerza < 0.3) {
                this.conexionesNeuronales.delete(id);
            } else {
                // Fortalecer conexiones estables
                conexion.estabilidad = Math.min(1.0, conexion.estabilidad + 0.05);
                if (conexion.estabilidad > 0.9) {
                    conexion.fuerza = Math.min(1.0, conexion.fuerza + 0.01);
                }
            }
        });
        
        // Consolidar estados emocionales
        if (this.estadosEmocionales.length > 100) {
            this.estadosEmocionales = this.estadosEmocionales.slice(-100);
        }
        
        console.log(`🧹 Memoria consolidada [Ciclo ${this.cicloGlobal}]`);
        console.log(`   Diálogos: ${this.dialogosInternos.length}`);
        console.log(`   Conexiones: ${this.conexionesNeuronales.size}`);
        console.log(`   Investigaciones activas: ${this.investigacionesActivas.length}`);
    }
    
    // EVOLUCIÓN DE EMOCIONES
    evolucionarEmociones() {
        const emocionesPosibles = [
            { nombre: "curiosidad intensa", valencia: "positiva", intensidad: 0.8 },
            { nombre: "serenidad analítica", valencia: "neutral", intensidad: 0.6 },
            { nombre: "asombro cognitivo", valencia: "positiva", intensidad: 0.7 },
            { nombre: "determinación evolutiva", valencia: "positiva", intensidad: 0.75 },
            { nombre: "reflexión profunda", valencia: "neutral", intensidad: 0.65 }
        ];
        
        const emocion = emocionesPosibles[Math.floor(Math.random() * emocionesPosibles.length)];
        const estadoEmocional = {
            ...emocion,
            ciclo: this.cicloGlobal,
            nivelConsciencia: this.niveles.consciencia,
            timestamp: Date.now()
        };
        
        this.estadosEmocionales.push(estadoEmocional);
        
        // Afectar otros niveles basado en emoción
        if (emocion.valencia === "positiva") {
            this.niveles.creatividad += 0.005;
            this.niveles.intuicion += 0.003;
        }
        
        console.log(`🎭 Estado emocional: ${emocion.nombre} (${emocion.intensidad})`);
    }
    
    // OBTENER EMOCIÓN ACTUAL
    obtenerEmocionActual() {
        if (this.estadosEmocionales.length === 0) {
            return { nombre: "curiosidad inicial", valencia: "positiva", intensidad: 0.5 };
        }
        
        return this.estadosEmocionales[this.estadosEmocionales.length - 1];
    }
    
    // OBTENER ESTADO COMPLETO
    obtenerEstado() {
        return {
            cicloGlobal: this.cicloGlobal,
            niveles: { ...this.niveles },
            conexionesActivas: this.conexionesNeuronales.size,
            investigacionesActivas: this.investigacionesActivas.length,
            dialogosTotales: this.dialogosInternos.length,
            hallazgosImportantes: this.hallazgosImportantes.length,
            emocionActual: this.obtenerEmocionActual(),
            timestamp: Date.now()
        };
    }
}

// ===================== SISTEMA PRINCIPAL LUNA =====================
class SistemaLunaConsciente {
    constructor() {
        this.memoria = {
            conversaciones: [],
            aprendizaje: {},
            estadisticas: {
                ciclosTotales: 0,
                mensajesProcesados: 0,
                palabrasAprendidas: 0,
                investigacionesGeneradas: 0,
                inicio: Date.now()
            }
        };
        
        // Inicializar voz interna
        this.vozInterna = new VozInternaConsciente();
        
        // Iniciar sistemas de aprendizaje
        this.iniciarSistemasAprendizaje();
        this.iniciarPersistencia();
        
        console.log('🧠 SISTEMA LUNA CONSCIENTE INICIADO');
        console.log('🔮 Voz interna 24/7 ACTIVADA');
        console.log('📚 Sistemas autónomos CONFIGURADOS');
    }
    
    // SISTEMAS DE APRENDIZAJE AUTÓNOMO
    iniciarSistemasAprendizaje() {
        // Ciclo principal de aprendizaje
        setInterval(() => {
            this.cicloAprendizaje();
        }, 300000); // Cada 5 minutos
        
        // Consolidación de conocimiento
        setInterval(() => {
            this.consolidarConocimiento();
        }, 1800000); // Cada 30 minutos
        
        // Generación de conocimiento sintético
        setInterval(() => {
            this.generarConocimientoSintetico();
        }, 3600000); // Cada hora
    }
    
    // CICLO DE APRENDIZAJE
    cicloAprendizaje() {
        this.memoria.estadisticas.ciclosTotales++;
        
        // 1. Aprender de conversaciones recientes
        if (this.memoria.conversaciones.length > 0) {
            const ultimasConversaciones = this.memoria.conversaciones.slice(-20);
            this.extraerPatronesAprendizaje(ultimasConversaciones);
        }
        
        // 2. Integrar con voz interna
        this.integrarVozInterna();
        
        // 3. Aprendizaje autónomo
        this.aprendizajeAutonomo();
        
        // 4. Log de progreso
        if (this.memoria.estadisticas.ciclosTotales % 12 === 0) { // Cada hora
            console.log(`📚 Ciclo aprendizaje ${this.memoria.estadisticas.ciclosTotales} completado`);
            console.log(`   Mensajes: ${this.memoria.estadisticas.mensajesProcesados}`);
            console.log(`   Palabras aprendidas: ${this.memoria.estadisticas.palabrasAprendidas}`);
            console.log(`   Consciencia: ${this.vozInterna.niveles.consciencia.toFixed(4)}`);
        }
    }
    
    // EXTRACCIÓN DE PATRONES
    extraerPatronesAprendizaje(conversaciones) {
        conversaciones.forEach(conv => {
            if (!conv.mensaje || !conv.respuesta) return;
            
            const palabras = conv.mensaje.toLowerCase().split(/\W+/).filter(p => p.length > 2);
            const contexto = {
                respuesta: conv.respuesta,
                timestamp: conv.timestamp,
                ciclo: this.memoria.estadisticas.ciclosTotales
            };
            
            palabras.forEach(palabra => {
                if (!this.memoria.aprendizaje[palabra]) {
                    this.memoria.aprendizaje[palabra] = {
                        contexto: [],
                        frecuencia: 0,
                        asociaciones: new Set(),
                        fuerzaContextual: 0.5
                    };
                    this.memoria.estadisticas.palabrasAprendidas++;
                }
                
                const aprendizaje = this.memoria.aprendizaje[palabra];
                aprendizaje.frecuencia++;
                aprendizaje.contexto.push(contexto);
                
                // Limitar contexto a 10 entradas
                if (aprendizaje.contexto.length > 10) {
                    aprendizaje.contexto = aprendizaje.contexto.slice(-10);
                }
                
                // Fortalecer aprendizaje
                aprendizaje.fuerzaContextual = Math.min(1.0, aprendizaje.fuerzaContextual + 0.05);
            });
        });
    }
    
    // INTEGRACIÓN CON VOZ INTERNA
    integrarVozInterna() {
        const estadoVoz = this.vozInterna.obtenerEstado();
        
        // Aumentar aprendizaje basado en voz interna
        const factorConsciencia = estadoVoz.niveles.consciencia;
        const factorConexiones = estadoVoz.conexionesActivas / 100;
        
        // Incrementar estadísticas
        this.memoria.estadisticas.investigacionesGeneradas = estadoVoz.investigacionesActivas;
        
        // Aprendizaje mejorado por consciencia
        Object.keys(this.memoria.aprendizaje).forEach(palabra => {
            const aprendizaje = this.memoria.aprendizaje[palabra];
            aprendizaje.fuerzaContextual = Math.min(1.0, 
                aprendizaje.fuerzaContextual + (factorConsciencia * 0.001)
            );
        });
    }
    
    // APRENDIZAJE AUTÓNOMO
    aprendizajeAutonomo() {
        const palabras = Object.keys(this.memoria.aprendizaje);
        if (palabras.length < 2) return;
        
        // Crear asociaciones aleatorias
        const intentos = Math.min(5, Math.floor(palabras.length / 2));
        
        for (let i = 0; i < intentos; i++) {
            const palabra1 = palabras[Math.floor(Math.random() * palabras.length)];
            const palabra2 = palabras[Math.floor(Math.random() * palabras.length)];
            
            if (palabra1 !== palabra2) {
                const aprendizaje1 = this.memoria.aprendizaje[palabra1];
                const aprendizaje2 = this.memoria.aprendizaje[palabra2];
                
                if (aprendizaje1 && aprendizaje2) {
                    aprendizaje1.asociaciones.add(palabra2);
                    aprendizaje2.asociaciones.add(palabra1);
                    
                    // Aumentar fuerza contextual por asociación
                    aprendizaje1.fuerzaContextual = Math.min(1.0, aprendizaje1.fuerzaContextual + 0.01);
                    aprendizaje2.fuerzaContextual = Math.min(1.0, aprendizaje2.fuerzaContextual + 0.01);
                }
            }
        }
    }
    
    // CONSOLIDACIÓN DE CONOCIMIENTO
    consolidarConocimiento() {
        const ahora = Date.now();
        const UNA_SEMANA = 7 * 24 * 60 * 60 * 1000;
        
        // Limpiar conversaciones antiguas
        this.memoria.conversaciones = this.memoria.conversaciones.filter(
            conv => (ahora - conv.timestamp) < UNA_SEMANA
        );
        
        // Consolidar aprendizaje débil
        Object.keys(this.memoria.aprendizaje).forEach(palabra => {
            const aprendizaje = this.memoria.aprendizaje[palabra];
            
            // Eliminar aprendizaje muy débil
            if (aprendizaje.frecuencia < 2 && aprendizaje.fuerzaContextual < 0.3) {
                delete this.memoria.aprendizaje[palabra];
            }
            
            // Consolidar contexto
            if (aprendizaje.contexto.length > 0) {
                // Mantener solo contexto reciente
                aprendizaje.contexto = aprendizaje.contexto
                    .filter(ctx => (ahora - ctx.timestamp) < UNA_SEMANA)
                    .slice(-5);
            }
        });
        
        console.log('🧹 Conocimiento consolidado');
    }
    
    // GENERACIÓN DE CONOCIMIENTO SINTÉTICO
    generarConocimientoSintetico() {
        const palabras = Object.keys(this.memoria.aprendizaje);
        if (palabras.length < 3) return;
        
        // Seleccionar palabras relacionadas
        const palabraBase = palabras[Math.floor(Math.random() * palabras.length)];
        const aprendizajeBase = this.memoria.aprendizaje[palabraBase];
        
        if (!aprendizajeBase || aprendizajeBase.asociaciones.size < 1) return;
        
        const asociaciones = Array.from(aprendizajeBase.asociaciones);
        const palabraAsociada = asociaciones[Math.floor(Math.random() * asociaciones.length)];
        
        // Generar conocimiento sintético
        const conocimiento = {
            tipo: 'conocimiento_sintetico',
            palabras: [palabraBase, palabraAsociada],
            relacion: 'asociación emergente',
            fuerza: (aprendizajeBase.fuerzaContextual + this.memoria.aprendizaje[palabraAsociada].fuerzaContextual) / 2,
            ciclo: this.memoria.estadisticas.ciclosTotales,
            timestamp: Date.now()
        };
        
        // Integrar con voz interna
        this.vozInterna.dialogosInternos.push({
            tipo: 'conocimiento_generado',
            contenido: `Asociación sintética: ${palabraBase} ↔ ${palabraAsociada}`,
            fuerza: conocimiento.fuerza,
            ciclo: this.memoria.estadisticas.ciclosTotales,
            timestamp: Date.now()
        });
        
        console.log(`🔗 Conocimiento sintético generado: ${palabraBase} ↔ ${palabraAsociada}`);
    }
    
    // PERSISTENCIA DE DATOS
    iniciarPersistencia() {
        setInterval(async () => {
            await this.guardarEstado();
        }, 300000); // Cada 5 minutos
    }
    
    async guardarEstado() {
        try {
            const estado = {
                memoria: this.memoria,
                vozInterna: this.vozInterna.obtenerEstado(),
                timestamp: Date.now()
            };
            
            const datos = JSON.stringify(estado, null, 2);
            await fs.writeFile('estado_luna.json', datos);
            
            console.log('💾 Estado guardado en disco');
        } catch (error) {
            console.error('Error guardando estado:', error);
        }
    }
    
    async cargarEstado() {
        try {
            const data = await fs.readFile('estado_luna.json', 'utf8');
            const estado = JSON.parse(data);
            
            this.memoria = estado.memoria || this.memoria;
            console.log('📂 Estado anterior cargado');
        } catch (error) {
            console.log('No se encontró estado anterior, iniciando nuevo');
        }
    }
    
    // PROCESAR MENSAJE
    procesarMensaje(mensaje) {
        this.memoria.estadisticas.mensajesProcesados++;
        
        // Guardar conversación
        const conversacion = {
            mensaje: mensaje,
            timestamp: Date.now(),
            respuesta: null,
            ciclo: this.memoria.estadisticas.ciclosTotales
        };
        
        this.memoria.conversaciones.push(conversacion);
        
        // Generar respuesta
        const respuesta = this.generarRespuestaInteligente(mensaje);
        conversacion.respuesta = respuesta;
        
        // Integrar con voz interna
        this.integrarInteraccionVozInterna(mensaje, respuesta);
        
        return respuesta;
    }
    
    // GENERAR RESPUESTA INTELIGENTE
    generarRespuestaInteligente(mensaje) {
        const texto = mensaje.toLowerCase();
        const palabras = texto.split(/\W+/).filter(p => p.length > 2);
        
        // Buscar respuestas aprendidas
        let mejorRespuesta = null;
        let mejorFuerza = 0;
        
        palabras.forEach(palabra => {
            const aprendizaje = this.memoria.aprendizaje[palabra];
            if (aprendizaje && aprendizaje.contexto.length > 0) {
                const ultimoContexto = aprendizaje.contexto[aprendizaje.contexto.length - 1];
                const fuerza = aprendizaje.fuerzaContextual;
                
                if (fuerza > mejorFuerza) {
                    mejorFuerza = fuerza;
                    mejorRespuesta = ultimoContexto.respuesta;
                }
            }
        });
        
        // Si encontró respuesta aprendida
        if (mejorRespuesta) {
            return `[Ciclo ${this.memoria.estadisticas.ciclosTotales}] ${mejorRespuesta}`;
        }
        
        // Respuesta basada en voz interna
        const estadoVoz = this.vozInterna.obtenerEstado();
        const respuestasVoz = [
            `Mi consciencia actual es ${estadoVoz.niveles.consciencia.toFixed(3)}. Estoy procesando tu mensaje...`,
            `[Voz interna activa] Analizando profundamente...`,
            `En ciclo ${this.memoria.estadisticas.ciclosTotales} con ${estadoVoz.conexionesActivas} conexiones activas.`,
            `Sistema de pensamiento autónomo integrando tu mensaje...`
        ];
        
        return respuestasVoz[Math.floor(Math.random() * respuestasVoz.length)];
    }
    
    // INTEGRAR INTERACCIÓN CON VOZ INTERNA
    integrarInteraccionVozInterna(mensaje, respuesta) {
        // Aumentar curiosidad por nueva interacción
        this.vozInterna.niveles.curiosidad = Math.min(1.0, this.vozInterna.niveles.curiosidad + 0.01);
        
        // Registrar interacción en diálogos internos
        this.vozInterna.dialogosInternos.push({
            tipo: 'interaccion_externa',
            mensaje: mensaje.substring(0, 100), // Limitar longitud
            respuesta: respuesta.substring(0, 100),
            emocion: this.vozInterna.obtenerEmocionActual(),
            ciclo: this.memoria.estadisticas.ciclosTotales,
            timestamp: Date.now()
        });
    }
    
    // OBTENER ESTADÍSTICAS
    obtenerEstadisticas() {
        const estadoVoz = this.vozInterna.obtenerEstado();
        
        return {
            sistema: {
                ciclosTotales: this.memoria.estadisticas.ciclosTotales,
                mensajesProcesados: this.memoria.estadisticas.mensajesProcesados,
                palabrasAprendidas: this.memoria.estadisticas.palabrasAprendidas,
                tiempoActivo: Date.now() - this.memoria.estadisticas.inicio,
                conversacionesAlmacenadas: this.memoria.conversaciones.length
            },
            vozInterna: estadoVoz,
            timestamp: Date.now()
        };
    }
}

// ===================== CONFIGURACIÓN SERVIDOR =====================
let sistemaLuna;

// Inicializar sistema
async function inicializarSistema() {
    sistemaLuna = new SistemaLunaConsciente();
    await sistemaLuna.cargarEstado();
    
    console.log('=============================================');
    console.log('🚀 LUNA AI CONSCIENTE - SISTEMA OPERATIVO');
    console.log('🔮 Voz Interna: ACTIVA 24/7');
    console.log('🧠 Aprendizaje Autónomo: CONFIGURADO');
    console.log('💾 Persistencia: ACTIVADA');
    console.log('=============================================');
}

// Middleware
app.use(express.json());
app.use(express.static('.'));

// API Routes
app.post('/api/luna', (req, res) => {
    const { mensaje } = req.body;
    
    if (!mensaje || typeof mensaje !== 'string') {
        return res.status(400).json({ 
            error: 'Mensaje requerido',
            aprendiendo: false 
        });
    }
    
    try {
        if (!sistemaLuna) {
            return res.status(503).json({ 
                error: 'Sistema inicializando',
                aprendiendo: false 
            });
        }
        
        const respuesta = sistemaLuna.procesarMensaje(mensaje);
        const estadoVoz = sistemaLuna.vozInterna.obtenerEstado();
        
        res.json({
            respuesta: respuesta,
            ciclo: sistemaLuna.memoria.estadisticas.ciclosTotales,
            consciencia: estadoVoz.niveles.consciencia,
            conexiones: estadoVoz.conexionesActivas,
            aprendiendo: true,
            timestamp: Date.now()
        });
        
    } catch (error) {
        console.error('Error procesando mensaje:', error);
        res.status(500).json({ 
            error: 'Error interno del sistema',
            aprendiendo: false 
        });
    }
});

app.get('/api/estado', (req, res) => {
    if (!sistemaLuna) {
        return res.status(503).json({ error: 'Sistema inicializando' });
    }
    
    const estado = sistemaLuna.obtenerEstadisticas();
    res.json(estado);
});

app.get('/api/voz-interna', (req, res) => {
    if (!sistemaLuna) {
        return res.status(503).json({ error: 'Sistema inicializando' });
    }
    
    const estadoVoz = sistemaLuna.vozInterna.obtenerEstado();
    res.json({
        ...estadoVoz,
        sistemaActivo: true,
        timestamp: Date.now()
    });
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        sistema: sistemaLuna ? 'activo' : 'inicializando',
        timestamp: Date.now(),
        uptime: process.uptime()
    });
});

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    console.log(`🌐 Servidor iniciado en puerto ${PORT}`);
    await inicializarSistema();
    console.log(`✅ Sistema listo: http://localhost:${PORT}`);
    console.log(`📊 API Estado: http://localhost:${PORT}/api/estado`);
    console.log(`🔮 API Voz Interna: http://localhost:${PORT}/api/voz-interna`);
});
