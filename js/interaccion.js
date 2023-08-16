  
function numeroAzar(){
    let tirarDado = getRandomInt(1, 7);
    let inicioCasilla = document.getElementById("resultadoLanzar").innerHTML;

    let avanzarCasilla = tirarDado + parseInt(inicioCasilla);
            
    let numeroAnterio = document.getElementById("totalLanzado").innerHTML;

    let acumulado = parseInt(numeroAnterio) + tirarDado;

    //definicion textos por casilla
            
    let parrafo = 'parrafo'+acumulado;

        const p = {

            parrafo1:'Gato llorón no pesca ratón.',
            parrafo2:'Guarda el orden que el orden te guardara a ti.',
            parrafo3:'Ese carga un trapo pa robarse un mojao.',
            parrafo4:'Habla más que una lora mojada.',
            parrafo5:'Hasta al mono más listo se le cae el zapote.',
            parrafo6:'Indio muerto no tira flecha.',
            parrafo7:'Lo dejaron tieso, derecho y mirando pal techo.',
            parrafo8:'Ningún mono se ve el rabo.',
            parrafo9:'Mal de muchos consuelo de tontos.',
            parrafo10:'Nadie es profeta en su tierra.',
            parrafo11:'Ni mucho que queme al santo ni tan poco que no lo alumbre.',
            parrafo12:'Ni raja ni presta el hacha.',
            parrafo13:'Termino el Juego',

        }

        let resultadoParrafo = p[parrafo];

        let parrafoInfo = resultadoParrafo;


    //definicion color por casilla

    let color = 'color'+acumulado;

        const c = {
            color1:'lightgreen',
            color2:'lightgreen',
            color3:'lightgreen',
            color4:'lightgreen',
            color5:'lightgreen',
            color6:'lightgreen',
            color7:'#d6c4ff',
            color8:'#d6c4ff',
            color9:'#d6c4ff',
            color10:'#d6c4ff',
            color11:'#d6c4ff',
            color12:'#d6c4ff',
            color13:'lightcyan',
            color14:'lightcyan',
            color15:'lightcyan',
            color16:'lightcyan',
            color17:'lightcyan',
            color18:'lightcyan',
            color19:'#ffd7dd',
            color20:'#ffd7dd',
            color21:'#ffd7dd',
            color22:'#ffd7dd',
            color23:'#ffd7dd',
            color24:'#ffd7dd',
            color25:'lightgray',
            color26:'lightgray',
            color27:'lightgray',
            color28:'lightgray',
            color29:'lightgray',
            color30:'lightgray',
            color31:'#ffc8b2',
            color32:'#ffc8b2',
            color33:'#ffc8b2',
            color34:'#ffc8b2',
            color35:'#ffc8b2',
            color36:'#ffc8b2',
            color37:'lightgoldenrodyellow',
            color38:'lightgoldenrodyellow',
            color39:'lightgoldenrodyellow',
            color40:'lightgoldenrodyellow',
            color41:'lightgoldenrodyellow',
            color42:'lightgoldenrodyellow',
            color43:'lightblue',
            color44:'lightblue',
            color45:'lightblue',
            color46:'lightblue',
            color47:'lightblue',
            color48:'lightblue',
            color49:'#F7DDA8',
        }

    let resultadoColor = c[color];

    let colorInfo = resultadoColor;

    //definicion titulos fase generales

    let titulo = 'titulo'+acumulado;

    const t = {
        titulo1:'Fase 0. Alistamiento y caracterización',
        titulo2:'Fase 0. Alistamiento y caracterización',
        titulo3:'Fase 0. Alistamiento y caracterización',
        titulo4:'Fase 0. Alistamiento y caracterización',
        titulo5:'Fase 0. Alistamiento y caracterización',
        titulo6:'Fase 0. Alistamiento y caracterización',
        titulo7:'Fase 1. Análisis por UFH',
        titulo8:'Fase 1. Análisis por UFH',
        titulo9:'Fase 1. Análisis por UFH',
        titulo10:'Fase 1. Análisis por UFH',
        titulo11:'Fase 1. Análisis por UFH',
        titulo12:'Fase 1. Análisis por UFH',
        titulo13:'Fase 2. Análisis de mercados agropecuarios',
        titulo14:'Fase 2. Análisis de mercados agropecuarios',
        titulo15:'Fase 2. Análisis de mercados agropecuarios',
        titulo16:'Fase 2. Análisis de mercados agropecuarios',
        titulo17:'Fase 2. Análisis de mercados agropecuarios',
        titulo18:'Fase 2. Análisis de mercados agropecuarios',
        titulo19: 'Fase 3.Definición de la estructura productiva',
        titulo20: 'Fase 3.Definición de la estructura productiva',
        titulo21: 'Fase 3.Definición de la estructura productiva',
        titulo22: 'Fase 3.Definición de la estructura productiva',
        titulo23: 'Fase 3.Definición de la estructura productiva',
        titulo24: 'Fase 3.Definición de la estructura productiva',
        titulo25: 'Fase 4. Modelación del área productiva',
        titulo26: 'Fase 4. Modelación del área productiva',
        titulo27: 'Fase 4. Modelación del área productiva',
        titulo28: 'Fase 4. Modelación del área productiva',
        titulo29: 'Fase 4. Modelación del área productiva',
        titulo30: 'Fase 4. Modelación del área productiva',
        titulo31: 'Fase 5. Análisis de factores espaciales',
        titulo32: 'Fase 5. Análisis de factores espaciales',
        titulo33: 'Fase 5. Análisis de factores espaciales',
        titulo34: 'Fase 5. Análisis de factores espaciales',
        titulo35: 'Fase 5. Análisis de factores espaciales',
        titulo36: 'Fase 5. Análisis de factores espaciales',
        titulo37: 'Fase 6. Aplicación de estándares para áreas complementarias',
        titulo38: 'Fase 6. Aplicación de estándares para áreas complementarias',
        titulo39: 'Fase 6. Aplicación de estándares para áreas complementarias',
        titulo40: 'Fase 6. Aplicación de estándares para áreas complementarias',
        titulo41: 'Fase 6. Aplicación de estándares para áreas complementarias',
        titulo42: 'Fase 6. Aplicación de estándares para áreas complementarias',
        titulo43: 'Fase 7. Verificación de áreas adjudicables en UAF',
        titulo44: 'Fase 7. Verificación de áreas adjudicables en UAF',
        titulo45: 'Fase 7. Verificación de áreas adjudicables en UAF',
        titulo46: 'Fase 7. Verificación de áreas adjudicables en UAF',
        titulo47: 'Fase 7. Verificación de áreas adjudicables en UAF',
        titulo48: 'Fase 7. Verificación de áreas adjudicables en UAF',
        titulo49:'Cierre del proceso de Cálculo y elaboraicón del informe',
    }

    let resultadoTitulo = t[titulo];

    let tituloInfo = resultadoTitulo;

    // definicio subtitulos de fase generales

    let subtitulo = 'subtitulo'+acumulado;

    let l = "<ol>";
    let s = "<li>";

    const sb = {
        subtitulo1: 'Se analiza las características sociales, productivo-económicas y ambientales del municipio. Se planifica la recolección de la información en campo.'+l+s+'Investigación secundaria '+s+'Generar cartografía municipal de referencia'+s+'Elaborar caracterización municipal'+s+'Aproximación a la validación de aptitud'+s+'Pre-identificación UFH líder'+s+'Generación de insumo para factores espaciales'+s+'Articulación con institucionalidad y actores locales'+s+'Desarrollar el operativo de campo conforme al protocolo previamente definido',
        subtitulo2: 'Se analiza las características sociales, productivo-económicas y ambientales del municipio. Se planifica la recolección de la información en campo.'+l+s+'Investigación secundaria '+s+'Generar cartografía municipal de referencia'+s+'Elaborar caracterización municipal'+s+'Aproximación a la validación de aptitud'+s+'Pre-identificación UFH líder'+s+'Generación de insumo para factores espaciales'+s+'Articulación con institucionalidad y actores locales'+s+'Desarrollar el operativo de campo conforme al protocolo previamente definido',
        subtitulo3: 'Se analiza las características sociales, productivo-económicas y ambientales del municipio. Se planifica la recolección de la información en campo.'+l+s+'Investigación secundaria '+s+'Generar cartografía municipal de referencia'+s+'Elaborar caracterización municipal'+s+'Aproximación a la validación de aptitud'+s+'Pre-identificación UFH líder'+s+'Generación de insumo para factores espaciales'+s+'Articulación con institucionalidad y actores locales'+s+'Desarrollar el operativo de campo conforme al protocolo previamente definido',
        subtitulo4: 'Se analiza las características sociales, productivo-económicas y ambientales del municipio. Se planifica la recolección de la información en campo.'+l+s+'Investigación secundaria '+s+'Generar cartografía municipal de referencia'+s+'Elaborar caracterización municipal'+s+'Aproximación a la validación de aptitud'+s+'Pre-identificación UFH líder'+s+'Generación de insumo para factores espaciales'+s+'Articulación con institucionalidad y actores locales'+s+'Desarrollar el operativo de campo conforme al protocolo previamente definido',
        subtitulo5: 'Se analiza las características sociales, productivo-económicas y ambientales del municipio. Se planifica la recolección de la información en campo.'+l+s+'Investigación secundaria '+s+'Generar cartografía municipal de referencia'+s+'Elaborar caracterización municipal'+s+'Aproximación a la validación de aptitud'+s+'Pre-identificación UFH líder'+s+'Generación de insumo para factores espaciales'+s+'Articulación con institucionalidad y actores locales'+s+'Desarrollar el operativo de campo conforme al protocolo previamente definido',
        subtitulo6: 'Se analiza las características sociales, productivo-económicas y ambientales del municipio. Se planifica la recolección de la información en campo.'+l+s+'Investigación secundaria '+s+'Generar cartografía municipal de referencia'+s+'Elaborar caracterización municipal'+s+'Aproximación a la validación de aptitud'+s+'Pre-identificación UFH líder'+s+'Generación de insumo para factores espaciales'+s+'Articulación con institucionalidad y actores locales'+s+'Desarrollar el operativo de campo conforme al protocolo previamente definido',

        subtitulo7: 'Se vincula el espacio geográfico con bases de datos alfanuméricas estadísticas a escala submunicipal.'+l+s+'Generar un identificador (ID) único'+s+'Sistematizar información productiva y de mercados validada por UFH',
        subtitulo8: 'Se vincula el espacio geográfico con bases de datos alfanuméricas estadísticas a escala submunicipal.'+l+s+'Generar un identificador (ID) único'+s+'Sistematizar información productiva y de mercados validada por UFH',
        subtitulo9: 'Se vincula el espacio geográfico con bases de datos alfanuméricas estadísticas a escala submunicipal.'+l+s+'Generar un identificador (ID) único'+s+'Sistematizar información productiva y de mercados validada por UFH',
        subtitulo10: 'Se vincula el espacio geográfico con bases de datos alfanuméricas estadísticas a escala submunicipal.'+l+s+'Generar un identificador (ID) único'+s+'Sistematizar información productiva y de mercados validada por UFH',
        subtitulo11: 'Se vincula el espacio geográfico con bases de datos alfanuméricas estadísticas a escala submunicipal.'+l+s+'Generar un identificador (ID) único'+s+'Sistematizar información productiva y de mercados validada por UFH',
        subtitulo12: 'Se vincula el espacio geográfico con bases de datos alfanuméricas estadísticas a escala submunicipal.'+l+s+'Generar un identificador (ID) único'+s+'Sistematizar información productiva y de mercados validada por UFH',

        subtitulo13: 'Se analiza la información para consolidar la lista de alternativas productivas, la oferta agropecuaria, la demanda agropecuaria'+l+s+'Matriz de validación de alternativas productivas'+s+'Incorporación de nuevas alternativas'+s+'Listas de alternativas productivas priorizadas'+s+'Tratamiento de la información de mercado agropecuarios'+s+'Incorporación de variables de mercado al cálculo de la UAF',
        subtitulo14: 'Se analiza la información para consolidar la lista de alternativas productivas, la oferta agropecuaria, la demanda agropecuaria'+l+s+'Matriz de validación de alternativas productivas'+s+'Incorporación de nuevas alternativas'+s+'Listas de alternativas productivas priorizadas'+s+'Tratamiento de la información de mercado agropecuarios'+s+'Incorporación de variables de mercado al cálculo de la UAF',
        subtitulo15: 'Se analiza la información para consolidar la lista de alternativas productivas, la oferta agropecuaria, la demanda agropecuaria'+l+s+'Matriz de validación de alternativas productivas'+s+'Incorporación de nuevas alternativas'+s+'Listas de alternativas productivas priorizadas'+s+'Tratamiento de la información de mercado agropecuarios'+s+'Incorporación de variables de mercado al cálculo de la UAF',
        subtitulo16: 'Se analiza la información para consolidar la lista de alternativas productivas, la oferta agropecuaria, la demanda agropecuaria'+l+s+'Matriz de validación de alternativas productivas'+s+'Incorporación de nuevas alternativas'+s+'Listas de alternativas productivas priorizadas'+s+'Tratamiento de la información de mercado agropecuarios'+s+'Incorporación de variables de mercado al cálculo de la UAF',
        subtitulo17: 'Se analiza la información para consolidar la lista de alternativas productivas, la oferta agropecuaria, la demanda agropecuaria'+l+s+'Matriz de validación de alternativas productivas'+s+'Incorporación de nuevas alternativas'+s+'Listas de alternativas productivas priorizadas'+s+'Tratamiento de la información de mercado agropecuarios'+s+'Incorporación de variables de mercado al cálculo de la UAF',
        subtitulo18: 'Se analiza la información para consolidar la lista de alternativas productivas, la oferta agropecuaria, la demanda agropecuaria'+l+s+'Matriz de validación de alternativas productivas'+s+'Incorporación de nuevas alternativas'+s+'Listas de alternativas productivas priorizadas'+s+'Tratamiento de la información de mercado agropecuarios'+s+'Incorporación de variables de mercado al cálculo de la UAF',

        subtitulo19: 'Se procesa la información por cada alternativa productiva para estructurar costos de producción, establecer el nivel tecnológico, validar la aptitud edafoclimática; para diseñar un portafolio de sistemas productivo por cada UFH.'+l+s+'Contrastar y ajustar costos de producción de fuentes primarias con fuentes secundarias.'+s+'Calificación nivel de desarrollo tecnológico - NDT'+s+'Validación de aptitud edafoclimática'+s+'Diseño de sistemas productivos por UFH',
        subtitulo20: 'Se procesa la información por cada alternativa productiva para estructurar costos de producción, establecer el nivel tecnológico, validar la aptitud edafoclimática; para diseñar un portafolio de sistemas productivo por cada UFH.'+l+s+'Contrastar y ajustar costos de producción de fuentes primarias con fuentes secundarias.'+s+'Calificación nivel de desarrollo tecnológico - NDT'+s+'Validación de aptitud edafoclimática'+s+'Diseño de sistemas productivos por UFH',
        subtitulo21: 'Se procesa la información por cada alternativa productiva para estructurar costos de producción, establecer el nivel tecnológico, validar la aptitud edafoclimática; para diseñar un portafolio de sistemas productivo por cada UFH.'+l+s+'Contrastar y ajustar costos de producción de fuentes primarias con fuentes secundarias.'+s+'Calificación nivel de desarrollo tecnológico - NDT'+s+'Validación de aptitud edafoclimática'+s+'Diseño de sistemas productivos por UFH',
        subtitulo22: 'Se procesa la información por cada alternativa productiva para estructurar costos de producción, establecer el nivel tecnológico, validar la aptitud edafoclimática; para diseñar un portafolio de sistemas productivo por cada UFH.'+l+s+'Contrastar y ajustar costos de producción de fuentes primarias con fuentes secundarias.'+s+'Calificación nivel de desarrollo tecnológico - NDT'+s+'Validación de aptitud edafoclimática'+s+'Diseño de sistemas productivos por UFH',
        subtitulo23: 'Se procesa la información por cada alternativa productiva para estructurar costos de producción, establecer el nivel tecnológico, validar la aptitud edafoclimática; para diseñar un portafolio de sistemas productivo por cada UFH.'+l+s+'Contrastar y ajustar costos de producción de fuentes primarias con fuentes secundarias.'+s+'Calificación nivel de desarrollo tecnológico - NDT'+s+'Validación de aptitud edafoclimática'+s+'Diseño de sistemas productivos por UFH',
        subtitulo24: 'Se procesa la información por cada alternativa productiva para estructurar costos de producción, establecer el nivel tecnológico, validar la aptitud edafoclimática; para diseñar un portafolio de sistemas productivo por cada UFH.'+l+s+'Contrastar y ajustar costos de producción de fuentes primarias con fuentes secundarias.'+s+'Calificación nivel de desarrollo tecnológico - NDT'+s+'Validación de aptitud edafoclimática'+s+'Diseño de sistemas productivos por UFH',

        subtitulo25: 'Se estiman resultados y beneficio por hectárea del productor al desarrollar una actividad agropecuaria y se estima el área mínima rentable para alcanzar el beneficio esperado.'+l+s+'Cálculo de resultados por línea productiva y por hectárea en UFH Líder'+s+'Construcción de flujo neto y flujo neto acumulado por alternativa productiva'+s+'Cálculo de beneficio mensual equivalente por hectárea en UFH Líder'+s+'Cálculo de área productiva (Área Mínima Rentable AMR) en UFH Líder',
        subtitulo26: 'Se estiman resultados y beneficio por hectárea del productor al desarrollar una actividad agropecuaria y se estima el área mínima rentable para alcanzar el beneficio esperado.'+l+s+'Cálculo de resultados por línea productiva y por hectárea en UFH Líder'+s+'Construcción de flujo neto y flujo neto acumulado por alternativa productiva'+s+'Cálculo de beneficio mensual equivalente por hectárea en UFH Líder'+s+'Cálculo de área productiva (Área Mínima Rentable AMR) en UFH Líder',
        subtitulo27: 'Se estiman resultados y beneficio por hectárea del productor al desarrollar una actividad agropecuaria y se estima el área mínima rentable para alcanzar el beneficio esperado.'+l+s+'Cálculo de resultados por línea productiva y por hectárea en UFH Líder'+s+'Construcción de flujo neto y flujo neto acumulado por alternativa productiva'+s+'Cálculo de beneficio mensual equivalente por hectárea en UFH Líder'+s+'Cálculo de área productiva (Área Mínima Rentable AMR) en UFH Líder',
        subtitulo28: 'Se estiman resultados y beneficio por hectárea del productor al desarrollar una actividad agropecuaria y se estima el área mínima rentable para alcanzar el beneficio esperado.'+l+s+'Cálculo de resultados por línea productiva y por hectárea en UFH Líder'+s+'Construcción de flujo neto y flujo neto acumulado por alternativa productiva'+s+'Cálculo de beneficio mensual equivalente por hectárea en UFH Líder'+s+'Cálculo de área productiva (Área Mínima Rentable AMR) en UFH Líder',
        subtitulo29: 'Se estiman resultados y beneficio por hectárea del productor al desarrollar una actividad agropecuaria y se estima el área mínima rentable para alcanzar el beneficio esperado.'+l+s+'Cálculo de resultados por línea productiva y por hectárea en UFH Líder'+s+'Construcción de flujo neto y flujo neto acumulado por alternativa productiva'+s+'Cálculo de beneficio mensual equivalente por hectárea en UFH Líder'+s+'Cálculo de área productiva (Área Mínima Rentable AMR) en UFH Líder',
        subtitulo30: 'Se estiman resultados y beneficio por hectárea del productor al desarrollar una actividad agropecuaria y se estima el área mínima rentable para alcanzar el beneficio esperado.'+l+s+'Cálculo de resultados por línea productiva y por hectárea en UFH Líder'+s+'Construcción de flujo neto y flujo neto acumulado por alternativa productiva'+s+'Cálculo de beneficio mensual equivalente por hectárea en UFH Líder'+s+'Cálculo de área productiva (Área Mínima Rentable AMR) en UFH Líder',

        subtitulo31: 'Se estima el comportamiento de los resultados por alternativa productiva y por sistema, y se establece la distribución óptima de alternativas dentro del sistema para cada posible localización en el municipio.'+l+s+'Cálculo de resultados por línea productiva y por hectárea en UFH Líder'+s+'Aplicación de factores espaciales'+s+'Construcción de flujos por sistema productivo'+s+'Optimización del sistema productivo'+s+'Validación de cumplimiento de restricciones y condiciones'+s+'Cálculo de rango de Área Mínoma Rentable por UFH',
        subtitulo32: 'Se estima el comportamiento de los resultados por alternativa productiva y por sistema, y se establece la distribución óptima de alternativas dentro del sistema para cada posible localización en el municipio.'+l+s+'Cálculo de resultados por línea productiva y por hectárea en UFH Líder'+s+'Aplicación de factores espaciales'+s+'Construcción de flujos por sistema productivo'+s+'Optimización del sistema productivo'+s+'Validación de cumplimiento de restricciones y condiciones'+s+'Cálculo de rango de Área Mínoma Rentable por UFH',
        subtitulo33: 'Se estima el comportamiento de los resultados por alternativa productiva y por sistema, y se establece la distribución óptima de alternativas dentro del sistema para cada posible localización en el municipio.'+l+s+'Cálculo de resultados por línea productiva y por hectárea en UFH Líder'+s+'Aplicación de factores espaciales'+s+'Construcción de flujos por sistema productivo'+s+'Optimización del sistema productivo'+s+'Validación de cumplimiento de restricciones y condiciones'+s+'Cálculo de rango de Área Mínoma Rentable por UFH',
        subtitulo34: 'Se estima el comportamiento de los resultados por alternativa productiva y por sistema, y se establece la distribución óptima de alternativas dentro del sistema para cada posible localización en el municipio.'+l+s+'Cálculo de resultados por línea productiva y por hectárea en UFH Líder'+s+'Aplicación de factores espaciales'+s+'Construcción de flujos por sistema productivo'+s+'Optimización del sistema productivo'+s+'Validación de cumplimiento de restricciones y condiciones'+s+'Cálculo de rango de Área Mínoma Rentable por UFH',
        subtitulo35: 'Se estima el comportamiento de los resultados por alternativa productiva y por sistema, y se establece la distribución óptima de alternativas dentro del sistema para cada posible localización en el municipio.'+l+s+'Cálculo de resultados por línea productiva y por hectárea en UFH Líder'+s+'Aplicación de factores espaciales'+s+'Construcción de flujos por sistema productivo'+s+'Optimización del sistema productivo'+s+'Validación de cumplimiento de restricciones y condiciones'+s+'Cálculo de rango de Área Mínoma Rentable por UFH',
        subtitulo36: 'Se estima el comportamiento de los resultados por alternativa productiva y por sistema, y se establece la distribución óptima de alternativas dentro del sistema para cada posible localización en el municipio.'+l+s+'Cálculo de resultados por línea productiva y por hectárea en UFH Líder'+s+'Aplicación de factores espaciales'+s+'Construcción de flujos por sistema productivo'+s+'Optimización del sistema productivo'+s+'Validación de cumplimiento de restricciones y condiciones'+s+'Cálculo de rango de Área Mínoma Rentable por UFH',

        subtitulo37: 'Se aplican los estándares territoriales de áreas complementarias al área estrictamente productiva. Una vez aplicado cada estándar, se adicionan las áreas complementarias al área óptima productiva para así obtener la extensión de UAF por UFH.'+l+s+'Estimación y aplicación de estándares territoriales. Infraestructura productiva agropecuaria / Vivienda rural / Reconocimiento economía del cuidado / Estado de conservación de ecosistemas',
        subtitulo38: 'Se aplican los estándares territoriales de áreas complementarias al área estrictamente productiva. Una vez aplicado cada estándar, se adicionan las áreas complementarias al área óptima productiva para así obtener la extensión de UAF por UFH.'+l+s+'Estimación y aplicación de estándares territoriales. Infraestructura productiva agropecuaria / Vivienda rural / Reconocimiento economía del cuidado / Estado de conservación de ecosistemas',
        subtitulo39: 'Se aplican los estándares territoriales de áreas complementarias al área estrictamente productiva. Una vez aplicado cada estándar, se adicionan las áreas complementarias al área óptima productiva para así obtener la extensión de UAF por UFH.'+l+s+'Estimación y aplicación de estándares territoriales. Infraestructura productiva agropecuaria / Vivienda rural / Reconocimiento economía del cuidado / Estado de conservación de ecosistemas',
        subtitulo40: 'Se aplican los estándares territoriales de áreas complementarias al área estrictamente productiva. Una vez aplicado cada estándar, se adicionan las áreas complementarias al área óptima productiva para así obtener la extensión de UAF por UFH.'+l+s+'Estimación y aplicación de estándares territoriales. Infraestructura productiva agropecuaria / Vivienda rural / Reconocimiento economía del cuidado / Estado de conservación de ecosistemas',
        subtitulo41: 'Se aplican los estándares territoriales de áreas complementarias al área estrictamente productiva. Una vez aplicado cada estándar, se adicionan las áreas complementarias al área óptima productiva para así obtener la extensión de UAF por UFH.'+l+s+'Estimación y aplicación de estándares territoriales. Infraestructura productiva agropecuaria / Vivienda rural / Reconocimiento economía del cuidado / Estado de conservación de ecosistemas',
        subtitulo42: 'Se aplican los estándares territoriales de áreas complementarias al área estrictamente productiva. Una vez aplicado cada estándar, se adicionan las áreas complementarias al área óptima productiva para así obtener la extensión de UAF por UFH.'+l+s+'Estimación y aplicación de estándares territoriales. Infraestructura productiva agropecuaria / Vivienda rural / Reconocimiento economía del cuidado / Estado de conservación de ecosistemas',

        subtitulo43: 'Se establecen las unidades agrícolas familiares y, se adelantan programas de titulación / adjudicación en áreas que no lo prohíba la ley.'+l+s+'Identificar áreas sin condicionamientos y con cálculo de UAF por UFH'+s+'Intersectar cartográficamente UFH con áreas de exclusión legal de la UAF'+s+'Intersectar UFH con áreas de condicionamiento legal de la UAF'+s+'Análisis frente a áreas dentro y fuera de la frontera agrícola',
        subtitulo44: 'Se establecen las unidades agrícolas familiares y, se adelantan programas de titulación / adjudicación en áreas que no lo prohíba la ley.'+l+s+'Identificar áreas sin condicionamientos y con cálculo de UAF por UFH'+s+'Intersectar cartográficamente UFH con áreas de exclusión legal de la UAF'+s+'Intersectar UFH con áreas de condicionamiento legal de la UAF'+s+'Análisis frente a áreas dentro y fuera de la frontera agrícola',
        subtitulo45: 'Se establecen las unidades agrícolas familiares y, se adelantan programas de titulación / adjudicación en áreas que no lo prohíba la ley.'+l+s+'Identificar áreas sin condicionamientos y con cálculo de UAF por UFH'+s+'Intersectar cartográficamente UFH con áreas de exclusión legal de la UAF'+s+'Intersectar UFH con áreas de condicionamiento legal de la UAF'+s+'Análisis frente a áreas dentro y fuera de la frontera agrícola',
        subtitulo46: 'Se establecen las unidades agrícolas familiares y, se adelantan programas de titulación / adjudicación en áreas que no lo prohíba la ley.'+l+s+'Identificar áreas sin condicionamientos y con cálculo de UAF por UFH'+s+'Intersectar cartográficamente UFH con áreas de exclusión legal de la UAF'+s+'Intersectar UFH con áreas de condicionamiento legal de la UAF'+s+'Análisis frente a áreas dentro y fuera de la frontera agrícola',
        subtitulo47: 'Se establecen las unidades agrícolas familiares y, se adelantan programas de titulación / adjudicación en áreas que no lo prohíba la ley.'+l+s+'Identificar áreas sin condicionamientos y con cálculo de UAF por UFH'+s+'Intersectar cartográficamente UFH con áreas de exclusión legal de la UAF'+s+'Intersectar UFH con áreas de condicionamiento legal de la UAF'+s+'Análisis frente a áreas dentro y fuera de la frontera agrícola',
        subtitulo48: 'Se establecen las unidades agrícolas familiares y, se adelantan programas de titulación / adjudicación en áreas que no lo prohíba la ley.'+l+s+'Identificar áreas sin condicionamientos y con cálculo de UAF por UFH'+s+'Intersectar cartográficamente UFH con áreas de exclusión legal de la UAF'+s+'Intersectar UFH con áreas de condicionamiento legal de la UAF'+s+'Análisis frente a áreas dentro y fuera de la frontera agrícola',
        
        subtitulo49: 'Desarrollados los pasos metodológicos anteriores, es necesario elaborar un informe final del proceso de cálculo de la UAF en el cual se reflejen los resultados y se asocien los diferentes anexos desarrollados: instrumentos, bases de datos (macro), documentos de análisis intermedios, registros fotográficos, otros.',
    }

    let resultadoSubtitulo = sb[subtitulo];

    
    //condicionales para avanzar la ficha

    if (acumulado < 50 ){

            document.getElementById('resultadoLanzar').innerHTML = tirarDado;
            document.getElementById(numeroAnterio).src='';
            document.getElementById(acumulado).src='src/ficha1.png';
            
            document.getElementById('totalLanzado').innerHTML = acumulado;

            document.getElementById('infoAdicional').innerHTML = parrafoInfo;

            document.getElementById('faseExplicacion').style.background = resultadoColor;
            
            document.getElementById('tituloFase').innerHTML = resultadoTitulo;

            document.getElementById('subtituloFase').innerHTML = resultadoSubtitulo;

            
            }
            

            else if (numeroAnterio > 48){
                document.getElementById('mensajeFinal').innerHTML = 'Ganaste';
            }

            else{
            document.getElementById('resultadoLanzar').innerHTML = tirarDado;
            }

    if (tirarDado < 2){
        document.getElementById('caraDado').src = 'src/1.png';
    }

    else if (tirarDado < 3){
        document.getElementById('caraDado').src = 'src/2.png';
    }

    else if (tirarDado < 4){
        document.getElementById('caraDado').src = 'src/3.png';
    }

    else if (tirarDado < 5){
        document.getElementById('caraDado').src = 'src/4.png';
    }

    else if (tirarDado < 6){
        document.getElementById('caraDado').src = 'src/5.png';
    }

    else if (tirarDado < 7){
        document.getElementById('caraDado').src = 'src/6.png';
    }
    
            
    }

        

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);                  
    }

        

        
