import { getCSS, tickConfig } from "./common.js";

async function criarGraficoPersonagens() {
    const personagens = ['Todoroki', 'Neji', 'Seiya', 'Gojo', 'Rengoku'];
    const popularidade = [85, 75, 90, 95, 80]; // Valores fictícios de popularidade

    const data = [
        {
            x: personagens, 
            y: popularidade, 
            type: 'bar',
            marker: {
                color: getCSS('--secondary-color')
            }
        }
    ];

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Popularidade dos Personagens de Anime',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                family: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Personagens',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Popularidade',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    };

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

criarGraficoPersonagens();
