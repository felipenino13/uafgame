  
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
            color7:'lightseagreen',
            color8:'lightseagreen',
            color9:'lightseagreen',
            color10:'lightseagreen',
            color11:'lightseagreen',
            color12:'lightseagreen',
            color13:'lightcyan',
            color14:'lightcyan',
            color15:'lightcyan',
            color16:'lightcyan',
            color17:'lightcyan',
            color18:'lightcyan',
            color19:'lightpink',
            color20:'lightpink',
            color21:'lightpink',
            color22:'lightpink',
            color23:'lightpink',
            color24:'lightpink',
            color25:'lightgray',
            color26:'lightgray',
            color27:'lightgray',
            color28:'lightgray',
            color29:'lightgray',
            color30:'lightgray',
            color31:'lightsalmon',
            color32:'lightsalmon',
            color33:'lightsalmon',
            color34:'lightsalmon',
            color35:'lightsalmon',
            color36:'lightsalmon',
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
            color49:'yellowgreen',
        }

    let resultadoColor = c[color];

    let colorInfo = resultadoColor;

    //definicion titulos fase generales

    let titulo = 'titulo'+acumulado;

    const t = {
        titulo1:'Fase 0. Alistamiento y caracterización territorial, socioeconómica y productiva',
        titulo2:'Fase 0. Alistamiento y caracterización territorial, socioeconómica y productiva',
        titulo3:'Fase 0. Alistamiento y caracterización territorial, socioeconómica y productiva',
        titulo4:'Fase 0. Alistamiento y caracterización territorial, socioeconómica y productiva',
        titulo5:'Fase 0. Alistamiento y caracterización territorial, socioeconómica y productiva',
        titulo6:'Fase 0. Alistamiento y caracterización territorial, socioeconómica y productiva',
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
        titulo37: 'Fase 6. Aplicación de estándares territoriales para áreas complementarias',
        titulo38: 'Fase 6. Aplicación de estándares territoriales para áreas complementarias',
        titulo39: 'Fase 6. Aplicación de estándares territoriales para áreas complementarias',
        titulo40: 'Fase 6. Aplicación de estándares territoriales para áreas complementarias',
        titulo41: 'Fase 6. Aplicación de estándares territoriales para áreas complementarias',
        titulo42: 'Fase 6. Aplicación de estándares territoriales para áreas complementarias',
        titulo43: 'Fase 7. Verificación de exclusiones, condicionantes y áreas adjudicables en UAF',
        titulo44: 'Fase 7. Verificación de exclusiones, condicionantes y áreas adjudicables en UAF',
        titulo45: 'Fase 7. Verificación de exclusiones, condicionantes y áreas adjudicables en UAF',
        titulo46: 'Fase 7. Verificación de exclusiones, condicionantes y áreas adjudicables en UAF',
        titulo47: 'Fase 7. Verificación de exclusiones, condicionantes y áreas adjudicables en UAF',
        titulo48: 'Fase 7. Verificación de exclusiones, condicionantes y áreas adjudicables en UAF',
        titulo49:'Felicidades, así se calcula la UAF',
    }

    let resultadoTitulo = t[titulo];

    let tituloInfo = resultadoTitulo;

    // definicio subtitulos de fase generales

    let subtitulo = 'subtitulo'+acumulado;

    const sb = {
        subtitulo1: 'La fase de alistamiento es la primera y más importante, porque se deben analizar cuidadosamente las características sociales, productivo-económicas del municipio y aspectos ambientales que influyen en el cálculo de la UAF, así como la planificación para una adecuada recolección de la información en campo.',
        subtitulo2: 'La fase de alistamiento es la primera y más importante, porque se deben analizar cuidadosamente las características sociales, productivo-económicas del municipio y aspectos ambientales que influyen en el cálculo de la UAF, así como la planificación para una adecuada recolección de la información en campo.',
        subtitulo3: 'La fase de alistamiento es la primera y más importante, porque se deben analizar cuidadosamente las características sociales, productivo-económicas del municipio y aspectos ambientales que influyen en el cálculo de la UAF, así como la planificación para una adecuada recolección de la información en campo.',
        subtitulo4: 'La fase de alistamiento es la primera y más importante, porque se deben analizar cuidadosamente las características sociales, productivo-económicas del municipio y aspectos ambientales que influyen en el cálculo de la UAF, así como la planificación para una adecuada recolección de la información en campo.',
        subtitulo5: 'La fase de alistamiento es la primera y más importante, porque se deben analizar cuidadosamente las características sociales, productivo-económicas del municipio y aspectos ambientales que influyen en el cálculo de la UAF, así como la planificación para una adecuada recolección de la información en campo.',
        subtitulo6: 'La fase de alistamiento es la primera y más importante, porque se deben analizar cuidadosamente las características sociales, productivo-económicas del municipio y aspectos ambientales que influyen en el cálculo de la UAF, así como la planificación para una adecuada recolección de la información en campo.',
        subtitulo7: 'El uso del territorio como unidad de análisis en el cálculo de la UAF implica vincular el espacio geográfico con bases de datos alfanuméricas estadísticas, es decir, imputar valores a cada unidad física homogénea (UFH) luego del desarrollo de campo y la sistematización de información primaria. En esta fase se combinan las cualidades geográficas, biofísicas y alfanuméricas a escala submunicipal.',
        subtitulo8: 'El uso del territorio como unidad de análisis en el cálculo de la UAF implica vincular el espacio geográfico con bases de datos alfanuméricas estadísticas, es decir, imputar valores a cada unidad física homogénea (UFH) luego del desarrollo de campo y la sistematización de información primaria. En esta fase se combinan las cualidades geográficas, biofísicas y alfanuméricas a escala submunicipal.',
        subtitulo9: 'El uso del territorio como unidad de análisis en el cálculo de la UAF implica vincular el espacio geográfico con bases de datos alfanuméricas estadísticas, es decir, imputar valores a cada unidad física homogénea (UFH) luego del desarrollo de campo y la sistematización de información primaria. En esta fase se combinan las cualidades geográficas, biofísicas y alfanuméricas a escala submunicipal.',
        subtitulo10: 'El uso del territorio como unidad de análisis en el cálculo de la UAF implica vincular el espacio geográfico con bases de datos alfanuméricas estadísticas, es decir, imputar valores a cada unidad física homogénea (UFH) luego del desarrollo de campo y la sistematización de información primaria. En esta fase se combinan las cualidades geográficas, biofísicas y alfanuméricas a escala submunicipal.',
        subtitulo11: 'El uso del territorio como unidad de análisis en el cálculo de la UAF implica vincular el espacio geográfico con bases de datos alfanuméricas estadísticas, es decir, imputar valores a cada unidad física homogénea (UFH) luego del desarrollo de campo y la sistematización de información primaria. En esta fase se combinan las cualidades geográficas, biofísicas y alfanuméricas a escala submunicipal.',
        subtitulo12: 'El uso del territorio como unidad de análisis en el cálculo de la UAF implica vincular el espacio geográfico con bases de datos alfanuméricas estadísticas, es decir, imputar valores a cada unidad física homogénea (UFH) luego del desarrollo de campo y la sistematización de información primaria. En esta fase se combinan las cualidades geográficas, biofísicas y alfanuméricas a escala submunicipal.',
        subtitulo13: 'Comprende la consolidación, procesamiento y análisis de la información para consolidar la lista de alternativas productivas, caracterizar la oferta agropecuaria, la demanda agropecuaria y diferenciar las condiciones comerciales a nivel de UFH.',
        subtitulo14: 'Comprende la consolidación, procesamiento y análisis de la información para consolidar la lista de alternativas productivas, caracterizar la oferta agropecuaria, la demanda agropecuaria y diferenciar las condiciones comerciales a nivel de UFH.',
        subtitulo15: 'Comprende la consolidación, procesamiento y análisis de la información para consolidar la lista de alternativas productivas, caracterizar la oferta agropecuaria, la demanda agropecuaria y diferenciar las condiciones comerciales a nivel de UFH.',
        subtitulo16: 'Comprende la consolidación, procesamiento y análisis de la información para consolidar la lista de alternativas productivas, caracterizar la oferta agropecuaria, la demanda agropecuaria y diferenciar las condiciones comerciales a nivel de UFH.',
        subtitulo17: 'Comprende la consolidación, procesamiento y análisis de la información para consolidar la lista de alternativas productivas, caracterizar la oferta agropecuaria, la demanda agropecuaria y diferenciar las condiciones comerciales a nivel de UFH.',
        subtitulo18: 'Comprende la consolidación, procesamiento y análisis de la información para consolidar la lista de alternativas productivas, caracterizar la oferta agropecuaria, la demanda agropecuaria y diferenciar las condiciones comerciales a nivel de UFH.',
        subtitulo19: 'Comprende las acciones de procesamiento de la información primaria recopilada en la etapa de campo por cada alternativa productiva para estructurar costos de producción, establecer el nivel tecnológico, validar la aptitud edafoclimática; todo con la finalidad de diseñar un portafolio de sistemas productivo por cada UFH.',
        subtitulo20: 'Comprende las acciones de procesamiento de la información primaria recopilada en la etapa de campo por cada alternativa productiva para estructurar costos de producción, establecer el nivel tecnológico, validar la aptitud edafoclimática; todo con la finalidad de diseñar un portafolio de sistemas productivo por cada UFH.',
        subtitulo21: 'Comprende las acciones de procesamiento de la información primaria recopilada en la etapa de campo por cada alternativa productiva para estructurar costos de producción, establecer el nivel tecnológico, validar la aptitud edafoclimática; todo con la finalidad de diseñar un portafolio de sistemas productivo por cada UFH.',
        subtitulo22: 'Comprende las acciones de procesamiento de la información primaria recopilada en la etapa de campo por cada alternativa productiva para estructurar costos de producción, establecer el nivel tecnológico, validar la aptitud edafoclimática; todo con la finalidad de diseñar un portafolio de sistemas productivo por cada UFH.',
        subtitulo23: 'Comprende las acciones de procesamiento de la información primaria recopilada en la etapa de campo por cada alternativa productiva para estructurar costos de producción, establecer el nivel tecnológico, validar la aptitud edafoclimática; todo con la finalidad de diseñar un portafolio de sistemas productivo por cada UFH.',
        subtitulo24: 'Comprende las acciones de procesamiento de la información primaria recopilada en la etapa de campo por cada alternativa productiva para estructurar costos de producción, establecer el nivel tecnológico, validar la aptitud edafoclimática; todo con la finalidad de diseñar un portafolio de sistemas productivo por cada UFH.',
        subtitulo25: 'En la fase 4 se estiman resultados y beneficio por hectárea del productor al desarrollar una actividad agropecuaria cuando el productor se encuentra en su respectiva UFH líder y con esto se estima el área mínima rentable para alcanzar el beneficio esperado.',
        subtitulo26: 'En la fase 4 se estiman resultados y beneficio por hectárea del productor al desarrollar una actividad agropecuaria cuando el productor se encuentra en su respectiva UFH líder y con esto se estima el área mínima rentable para alcanzar el beneficio esperado.',
        subtitulo27: 'En la fase 4 se estiman resultados y beneficio por hectárea del productor al desarrollar una actividad agropecuaria cuando el productor se encuentra en su respectiva UFH líder y con esto se estima el área mínima rentable para alcanzar el beneficio esperado.',
        subtitulo28: 'En la fase 4 se estiman resultados y beneficio por hectárea del productor al desarrollar una actividad agropecuaria cuando el productor se encuentra en su respectiva UFH líder y con esto se estima el área mínima rentable para alcanzar el beneficio esperado.',
        subtitulo29: 'En la fase 4 se estiman resultados y beneficio por hectárea del productor al desarrollar una actividad agropecuaria cuando el productor se encuentra en su respectiva UFH líder y con esto se estima el área mínima rentable para alcanzar el beneficio esperado.',
        subtitulo30: 'En la fase 4 se estiman resultados y beneficio por hectárea del productor al desarrollar una actividad agropecuaria cuando el productor se encuentra en su respectiva UFH líder y con esto se estima el área mínima rentable para alcanzar el beneficio esperado.',
        subtitulo31: 'A partir de los resultados de la fase 4, se estima el comportamiento de los resultados por alternativa productiva y por sistema, y se establece la distribución óptima de alternativas dentro del sistema para cada posible localización en el municipio.',
        subtitulo32: 'A partir de los resultados de la fase 4, se estima el comportamiento de los resultados por alternativa productiva y por sistema, y se establece la distribución óptima de alternativas dentro del sistema para cada posible localización en el municipio.',
        subtitulo33: 'A partir de los resultados de la fase 4, se estima el comportamiento de los resultados por alternativa productiva y por sistema, y se establece la distribución óptima de alternativas dentro del sistema para cada posible localización en el municipio.',
        subtitulo34: 'A partir de los resultados de la fase 4, se estima el comportamiento de los resultados por alternativa productiva y por sistema, y se establece la distribución óptima de alternativas dentro del sistema para cada posible localización en el municipio.',
        subtitulo35: 'A partir de los resultados de la fase 4, se estima el comportamiento de los resultados por alternativa productiva y por sistema, y se establece la distribución óptima de alternativas dentro del sistema para cada posible localización en el municipio.',
        subtitulo36: 'A partir de los resultados de la fase 4, se estima el comportamiento de los resultados por alternativa productiva y por sistema, y se establece la distribución óptima de alternativas dentro del sistema para cada posible localización en el municipio.',
        subtitulo37: 'En la presente fase, se aplican los estándares territoriales de áreas complementarias al área estrictamente productiva. Una vez aplicado cada estándar, se adicionan las áreas complementarias respectivamente al área óptima productiva calculada en la fase 6 para así obtener la extensión de UAF por UFH.',
        subtitulo38: 'En la presente fase, se aplican los estándares territoriales de áreas complementarias al área estrictamente productiva. Una vez aplicado cada estándar, se adicionan las áreas complementarias respectivamente al área óptima productiva calculada en la fase 6 para así obtener la extensión de UAF por UFH.',
        subtitulo39: 'En la presente fase, se aplican los estándares territoriales de áreas complementarias al área estrictamente productiva. Una vez aplicado cada estándar, se adicionan las áreas complementarias respectivamente al área óptima productiva calculada en la fase 6 para así obtener la extensión de UAF por UFH.',
        subtitulo40: 'En la presente fase, se aplican los estándares territoriales de áreas complementarias al área estrictamente productiva. Una vez aplicado cada estándar, se adicionan las áreas complementarias respectivamente al área óptima productiva calculada en la fase 6 para así obtener la extensión de UAF por UFH.',
        subtitulo41: 'En la presente fase, se aplican los estándares territoriales de áreas complementarias al área estrictamente productiva. Una vez aplicado cada estándar, se adicionan las áreas complementarias respectivamente al área óptima productiva calculada en la fase 6 para así obtener la extensión de UAF por UFH.',
        subtitulo42: 'En la presente fase, se aplican los estándares territoriales de áreas complementarias al área estrictamente productiva. Una vez aplicado cada estándar, se adicionan las áreas complementarias respectivamente al área óptima productiva calculada en la fase 6 para así obtener la extensión de UAF por UFH.',
        subtitulo43: 'Comprende las actividades tendientes a que la ANT verifique la posibilidad de ejercer libremente las competencias que se le atribuyen en materia de establecer unidades agrícolas familiares y, por ende, adelantar programas de titulación/adjudicación en áreas que no le prohíba la ley o verificar la manera en que se condiciona, restringe o limita la decisión de otorgar títulos de propiedad a los sujetos de ordenamiento social de la propiedad en UAF.',
        subtitulo44: 'Comprende las actividades tendientes a que la ANT verifique la posibilidad de ejercer libremente las competencias que se le atribuyen en materia de establecer unidades agrícolas familiares y, por ende, adelantar programas de titulación/adjudicación en áreas que no le prohíba la ley o verificar la manera en que se condiciona, restringe o limita la decisión de otorgar títulos de propiedad a los sujetos de ordenamiento social de la propiedad en UAF.',
        subtitulo45: 'Comprende las actividades tendientes a que la ANT verifique la posibilidad de ejercer libremente las competencias que se le atribuyen en materia de establecer unidades agrícolas familiares y, por ende, adelantar programas de titulación/adjudicación en áreas que no le prohíba la ley o verificar la manera en que se condiciona, restringe o limita la decisión de otorgar títulos de propiedad a los sujetos de ordenamiento social de la propiedad en UAF.',
        subtitulo46: 'Comprende las actividades tendientes a que la ANT verifique la posibilidad de ejercer libremente las competencias que se le atribuyen en materia de establecer unidades agrícolas familiares y, por ende, adelantar programas de titulación/adjudicación en áreas que no le prohíba la ley o verificar la manera en que se condiciona, restringe o limita la decisión de otorgar títulos de propiedad a los sujetos de ordenamiento social de la propiedad en UAF.',
        subtitulo47: 'Comprende las actividades tendientes a que la ANT verifique la posibilidad de ejercer libremente las competencias que se le atribuyen en materia de establecer unidades agrícolas familiares y, por ende, adelantar programas de titulación/adjudicación en áreas que no le prohíba la ley o verificar la manera en que se condiciona, restringe o limita la decisión de otorgar títulos de propiedad a los sujetos de ordenamiento social de la propiedad en UAF.',
        subtitulo48: 'Comprende las actividades tendientes a que la ANT verifique la posibilidad de ejercer libremente las competencias que se le atribuyen en materia de establecer unidades agrícolas familiares y, por ende, adelantar programas de titulación/adjudicación en áreas que no le prohíba la ley o verificar la manera en que se condiciona, restringe o limita la decisión de otorgar títulos de propiedad a los sujetos de ordenamiento social de la propiedad en UAF.',
        subtitulo49: 'Esta metodología contribuye a la definición del modelo de ocupación territorial de un municipio, a partir de las unidades agrícolas familiares y las características socioeconómicas del territorio. Se articula con el ordenamiento social de la propiedad, mejorando los índices de competitividad de un municipio con relación a la actividad agropecuaria a escala regional.',
    }

    let resultadoSubtitulo = sb[subtitulo];

    
    //condicionales para avanzar la ficha

    if (acumulado < 50 ){

            document.getElementById('resultadoLanzar').innerHTML = tirarDado;
            document.getElementById(numeroAnterio).src='';
            document.getElementById(acumulado).src='src/ficha.png';
            
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

        

        
